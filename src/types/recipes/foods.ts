export type mealsTypes = {
    id: string,
    slug: string,
    name: string,
    type: string,
    craft: string,
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