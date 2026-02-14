export default function RecipeDetailDescription({ desc }: { desc: string }) {
    return (
        <section className="my-15">
            <p>{desc}</p>
        </section>
    )
}