import { LuSearch } from "react-icons/lu";

type SearchHeaderProps = {
    inputValue: string;
    setInputValue: (value: string) => void;
    handleSubmit: React.SubmitEventHandler<HTMLFormElement>
}

export default function SearchHeader({
    inputValue,
    setInputValue,
    handleSubmit
}: SearchHeaderProps) {
    return (
        <section className="flex flex-col gap-5">
            <h1 className="font-medium">
                Search <span className="text-primary">Results</span>
            </h1>
            <form
                className="flex w-full max-w-2xl items-center gap-3 rounded-full bg-light-gray px-5 py-3 shadow-md"
                role="search"
                onSubmit={handleSubmit}
            >
                <input
                    className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-gray sm:text-lg"
                    type="search"
                    value={inputValue}
                    placeholder="Search recipes"
                    aria-label="Search recipes"
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <button
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-black hover:bg-neutral-950 hover:text-neutral-50"
                    type="submit"
                    aria-label="Search"
                >
                    <LuSearch className="h-5 w-5" />
                </button>
            </form>
        </section>
    )
}