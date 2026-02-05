import { Link, NavLink } from "react-router-dom";

// components
import NavControls from "./NavControls";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                site logo
            </Link>

            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
                        HOME
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/recipes" className={({ isActive }) => (isActive ? "active" : undefined)}>
                        RECIPES
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/ingredients" className={({ isActive }) => (isActive ? "active" : undefined)}>
                        INGREDTIENTS
                    </NavLink>
                </li>
            </ul>

            <NavControls />
        </nav>
    )
}