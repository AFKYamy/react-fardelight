// hooks
import { useRecipesContext } from "@/contexts/RecipesContext";

// lib
import { modes } from "@/data/recipes";

export default function Selector() {
    const { selectedMode, setSelectedMode } = useRecipesContext();

    return (
        <section className="mx-auto my-20 text-center container">
            <div className="flex flex-col gap-10">
                <h2 className="font-medium">What to <span className="text-primary">Cook</span>?</h2>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
                    {modes.map((mode) => (
                        <a 
                            key={mode.id}
                            className={`
                                py-2 px-4 rounded-full bg-light-gray shadow-md text-base hover:text-neutral-50 hover:bg-neutral-950 sm:px-5 sm:text-lg
                                ${selectedMode === mode.id && "text-neutral-50 bg-neutral-950"}
                            `}
                            onClick={() => { setSelectedMode(mode.id); }}
                        >
                            {mode.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
