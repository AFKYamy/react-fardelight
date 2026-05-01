import { Routes, Route, Outlet } from "react-router-dom";

import './App.css'

// pages
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import RecipeDetail from "./pages/recipes/recipeDetail/RecipeDetail";
import Ingredients from "./pages/ingredients/Ingredients";
import Search from "./pages/search/Search";
import NotFound from "./pages/notFound/NotFound";

// contexts
import { RecipesProvider } from "@/contexts/RecipesContext";

function App() {
    return (
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={
                    <RecipesProvider>
                        <Outlet />
                    </RecipesProvider>
                }>
                    <Route index element={<Recipes />} />
                    <Route path="/recipes/:slug" element={<RecipeDetail />} />
                </Route>
                <Route path="/ingredients" element={<Ingredients />} />
                <Route path="/search" element={<Search />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
    )
}

export default App;
