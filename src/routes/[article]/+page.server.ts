import type { EntryGenerator } from './$types';
import { routing } from '../../cache/routes';

export const entries: EntryGenerator = () => {
	return Object.keys(routing).map((r) => ({ article: r }));
};

export const prerender = true;
