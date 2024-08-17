import type { PageLoad } from './$types';
import { archive } from '../../cache/archive';
import { routing } from '../../cache/routes';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const routeMap = routing[params.article];
	if (!routeMap) error(404);

	const routeMatch = archive.rss.channel.item.find((article) =>
		routeMap.lookup.includes(article.link)
	);
	if (!routeMatch) error(404);

	let body: string = routeMatch.encoded.find((row) => row.__prefix == 'content')?.__cdata ?? '';
	if (!body) error(404);
	if (body.length < 1) error(404);

	for (const entry in routing) {
		for (const lookup of routing[entry].lookup) {
			body = body.replaceAll(lookup, '/' + entry);
		}
	}

	return {
		title: routeMatch.title,
		date: routeMatch.pubDate,
		body
	};
};
