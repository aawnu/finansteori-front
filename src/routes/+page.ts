import type { PageLoad } from './$types';
import { archive } from '../cache/archive';
import { routing } from '../cache/routes';

export const load: PageLoad = () => {
	type Article = { route: string; title: string; date?: string }
	let articles: Record<string, Article[]> = { all: [], stock: [], economy: [], owner: [], other: [] };

	for (const entry in routing) {
		if (routing[entry].direct != undefined) {
			if (routing[entry].category && ['borshandel', 'bors-starter', 'bors-indsigt'].includes(routing[entry].category)) {
				articles.stock.push({
					route: entry,
					title: routing[entry].direct
				});

			} else if (routing[entry].category && ['oekonomi'].includes(routing[entry].category)) {
				articles.economy.push({
					route: entry,
					title: routing[entry].direct
				});
			} else if (routing[entry].category && ['selvstaendig'].includes(routing[entry].category)) {
				articles.owner.push({
					route: entry,
					title: routing[entry].direct
				});
			}

			articles.all.push({
				route: entry,
				title: routing[entry].direct
			});
			continue;
		}

		const entryMatch = archive.rss.channel.item.find((article) =>
			routing[entry].lookup.includes(article.link)
		);

		if (!entryMatch) continue;

		if (Array.isArray(entryMatch.category) &&
			entryMatch.category.find(c => ['borshandel', 'bors-starter', 'bors-indsigt'].includes(c._nicename))) {
			articles.stock.push({
				route: entry,
				title: entryMatch.title,
				date: entryMatch.pubDate
			});

		} else if (Array.isArray(entryMatch.category) &&
			entryMatch.category.find(c => ['oekonomi'].includes(c._nicename))) {
			articles.economy.push({
				route: entry,
				title: entryMatch.title,
				date: entryMatch.pubDate
			});
		} else if (Array.isArray(entryMatch.category) &&
			entryMatch.category.find(c => ['selvstaendig'].includes(c._nicename))) {
			articles.owner.push({
				route: entry,
				title: entryMatch.title,
				date: entryMatch.pubDate
			});
		} else {
			articles.other.push({
				route: entry,
				title: entryMatch.title,
				date: entryMatch.pubDate
			});

		}

		articles.all.push({
			route: entry,
			title: entryMatch.title,
			date: entryMatch.pubDate
		});

	}

	return {
		articles
	};
};
