import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// components
import NavControls from "./NavControls";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 90);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className={`navbar fixed w-full z-[9999] top-0 ${isScrolled && "scrolled"}`}>
            <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mx-auto py-4 sm:justify-between sm:py-6 container">
                <Link to="/">
                    <h4 className="text-2xl font-semibold">
                        FAR
                        <span className="text-primary">
                            DELIGHT
                        </span>
                    </h4>
                </Link>

                <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm sm:gap-[3em] sm:text-base">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => "navlink flex items-center ease-in-out duration-[0.2s] hover:font-bold" + (isActive ?" active font-bold" : "")}
                        >
                            HOME
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to="/recipes" 
                            className={({ isActive }) => "navlink flex items-center ease-in-out duration-[0.2s] hover:font-bold" + (isActive ? " active font-bold" : "")}
                        >
                            RECIPES
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to="/ingredients" 
                            className={({ isActive }) => "navlink flex items-center ease-in-out duration-[0.2s] hover:font-bold" + (isActive ? " active font-bold" : "")}
                        >
                            INGREDIENTS
                        </NavLink>
                    </li>
                </ul>

                <div className="w-full sm:w-auto">
                    <NavControls />
                </div>
            </nav>
        </div>
    )
}
