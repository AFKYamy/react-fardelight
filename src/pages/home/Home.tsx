// components
import Header from "@/components/header/Header";
import Navbar from "@/components/nav/Navbar";

// assets
import heroBg from "@/assets/backgrounds/cozy-decorations-blur.png";
import heroLogo from "@/assets/farmers-logo.png";

export default function Home() {
    return (
        <>
            <Navbar />
            <Header
                heroBg={heroBg}
                heroLogo={heroLogo}
            >
                <h1>Minecraft</h1>
                <h1><span className="text-primary">Farmer's</span> Delight</h1>
            </Header>
            homepage
        </>
    )
}