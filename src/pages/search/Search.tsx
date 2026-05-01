// hooks
import { useSearchPage } from "@/hooks/useSearchPage";

// components
import Navbar from "@/components/nav/Navbar";
import SearchHeader from "./SearchHeader";
import SearchResults from "./SearchResults";

export default function Search() {
    const search = useSearchPage();
    
    return (
        <>
            <Navbar />
            <main className="mx-auto my-15 flex flex-col gap-10 container">
                <SearchHeader {...search} />

                <SearchResults {...search} />
            </main>
        </>
    )
}
