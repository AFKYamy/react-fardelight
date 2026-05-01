// hooks
import { useSearchForm } from "@/hooks/useSearchForm";

import { LuSearch } from "react-icons/lu";

export default function NavControls() {
    const { query, setQuery, handleSubmit } = useSearchForm();

    return (
        <form
            className="flex w-full items-center gap-2 rounded-full bg-light-gray px-3 py-2 shadow-md lg:w-72"
            role="search"
            onSubmit={handleSubmit}
        >
            <input
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-gray"
                type="search"
                value={query}
                placeholder="Search recipes"
                aria-label="Search recipes"
                onChange={(event) => setQuery(event.target.value)}
            />
            <button
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-black hover:bg-neutral-950 hover:text-neutral-50"
                type="submit"
                aria-label="Search"
            >
                <LuSearch className="h-4 w-4" />
            </button>
        </form>
    )
}
