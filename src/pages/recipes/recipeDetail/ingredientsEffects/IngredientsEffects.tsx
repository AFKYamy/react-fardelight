// types
import type { FoodType } from "@/types/recipes/foods";

export default function IngredientsEffects({ rec }: { rec: FoodType }) {
    return (
        <section className="grid grid-cols-1 gap-7 my-15 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div className="flex flex-col gap-5 p-5 rounded-xl shadow-primary sm:p-7">
                <h3>Ingredients</h3>
                <ul className="grid grid-cols-1 gap-x-5 sm:grid-cols-[1fr_1fr]">
                    {rec.ingredients.map((ing) => (
                        <li className="py-1 border-b border-b-[gray] border-dashed w-fit max-w-full text-dark-gray break-words" key={ing.name}>
                            <span>x{ing.amount}</span> {ing.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-5 p-5 rounded-xl shadow-primary bg-light-gray sm:p-7">
                <h3>Effects</h3>
                <ul className="grid grid-cols-1 gap-x-5 sm:grid-cols-[1fr_1fr]">
                    {rec.effects && rec.effects.map((eff) => (
                        <li className="py-1 border-b border-b-[gray] border-dashed w-fit max-w-full text-dark-gray break-words" key={eff.name}>
                            {eff.name} {eff.duration && <span>{(eff.duration / 1000)}s</span>}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
