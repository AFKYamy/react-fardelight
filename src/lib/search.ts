export function normalizeSearchQuery(query: string): string {
    return query.trim();
}

export function buildSearchUrl(query: string): string {
    return `/search?q=${encodeURIComponent(query)}`;
}