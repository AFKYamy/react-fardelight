export type MealType = {
    id: string,
    slug: string,
    name: string,
    type: string,
    description: string,
    ingredients: {
        name: string,
        amount: number
    }[],
    crafting: {
        source: string,
        img: string
    }
    stats: {
        hunger: number,
        saturation: number
    },
    effects: {
        name: string,
        duration: number
    }[],
    img: string
}