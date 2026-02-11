// components
import Card from "./Card";

// data
import { meals } from "@/data/recipes";

export default function Cards() {
    return (
        <section className="flex justify-between gap-7 flex-wrap mx-auto my-25 container">
            {
                meals.map((meal) => (
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