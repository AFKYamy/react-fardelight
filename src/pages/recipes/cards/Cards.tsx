// components
import Card from "./Card";

// data
import { meals } from "@/data/recipes/meals.ts";

// types
import type { MealType } from "@/types/recipes/foods.ts";

export default function Cards() {
    return (
        <section className="flex justify-between gap-7 flex-wrap mx-auto my-25 container">
            {
                meals.map((meal: MealType) => (
                    <Card
                        key={meal.id}
                        slug={meal.slug}
                        name={meal.name}
                        img={meal.img}
                    />
                ))
            }
        </section>
    )
}