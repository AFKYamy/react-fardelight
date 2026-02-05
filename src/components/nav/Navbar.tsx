import { Link, NavLink } from "react-router-dom";

// components
import NavControls from "./NavControls";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center mx-auto py-6 container">
            <Link to="/">
                <h2 className="text-2xl font-semibold">
                    FAR
                    <span className="text-primary">
                        DELIGHT
                    </span>
                </h2>
            </Link>

            <ul className="flex gap-[3em]">
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
                        INGREDTIENTS
                    </NavLink>
                </li>
            </ul>

            <NavControls />
        </nav>
    )
}