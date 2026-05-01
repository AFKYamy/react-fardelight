// components
import Navbar from "@/components/nav/Navbar";
import Header from "@/components/header/Header";
import Selector from "./selector/Selector";
import Cards from "./cards/Cards";

// assets
import heroBg from "@/assets/backgrounds/glorious-feast-blur.png";
import heroLogo from "@/assets/food/ratatouille.png";

export default function Recipes() {
    return (
        <>
            <Navbar />
            <Header
                heroBg={heroBg}
                heroLogo={heroLogo}
            >
                <h1 className="text-4xl sm:text-5xl">Farmer's</h1>
                <h1><span className="text-primary">Delightful</span> Recipes</h1>
            </Header>
            <Selector />
            <Cards />
        </>
    )
}
