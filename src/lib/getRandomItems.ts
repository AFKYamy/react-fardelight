export function getRandomItems<T>(items: T[], count: number) {
    const shuffled = shuffleItems(items)

    return shuffled.slice(0, count);
}

export function shuffleItems<T>(items: T[]) {
    return [...items].sort(() => 0.5 - Math.random());
}