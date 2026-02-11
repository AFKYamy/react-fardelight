import { Routes, Route } from "react-router-dom";

import './App.css'

// pages
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";
import RecipeDetail from "./pages/recipes/RecipeDetail";
import Ingredients from "./pages/ingredients/Ingredients";
import NotFound from "./pages/notFound/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:slug" element={<RecipeDetail />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App;