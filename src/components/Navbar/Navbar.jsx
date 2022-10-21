import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links}>
                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Entrar
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/register"
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Cadastrar
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Sobre
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
