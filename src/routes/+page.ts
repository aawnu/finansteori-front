import type { PageLoad } from './$types';
import { archive } from '../cache/archive';
import { routing } from '../cache/routes';

export const load: PageLoad = () => {
	let articles: { route: string; title: string; date?: string }[] = [];

	for (const entry in routing) {
		if (routing[entry].direct != undefined) {
			articles.push({
				route: entry,
				title: routing[entry].direct
			});
			continue;
		}

		const entryMatch = archive.rss.channel.item.find((article) =>
			routing[entry].lookup.includes(article.link)
		);

		if (!entryMatch) continue;
		articles.push({
			route: entry,
			title: entryMatch.title,
			date: entryMatch.pubDate
		});
	}

	return {
		articles
	};
};
