// types
import type { FoodType } from "@/types/recipes/foods";

export default function IngredientsEffects({ rec }: { rec: FoodType }) {
    return (
        <section className="grid grid-cols-[1fr_1fr] gap-20 my-15">
            <div className="flex flex-col gap-5 p-7 rounded-xl shadow-primary">
                <h3>Ingredients</h3>
                <ul className="grid grid-cols-[1fr_1fr]">
                    {rec.ingredients.map((ing) => (
                        <li className="py-1 border-b border-b-[gray] border-dashed w-max text-dark-gray">
                            <span>x{ing.amount}</span> {ing.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-5 p-7 rounded-xl shadow-primary bg-light-gray">
                <h3>Effects</h3>
                <ul className="grid grid-cols-[1fr_1fr]">
                    {rec.effects && rec.effects.map((eff) => (
                        <li className="py-1 border-b border-b-[gray] border-dashed w-max text-dark-gray">
                            {eff.name} {eff.duration && <span>{(eff.duration / 1000)}s</span>}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}