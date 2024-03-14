import { useContext } from "react";
import { NavLink } from "react-router-dom";

import cartIcon from "../assets/cart.svg";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search.svg";
import { AuthContext } from "../contexts/AuthContext.tsx";

import styles from "./NavBar.module.css";
import { Button } from "./index.ts";

export function NavBar() {
  const destinations = {
    consumers: "https://ccidc.org/consumer-items-of-interest/",
    cids: "https://ccidc.org/wp-login.php",
    aboutUs: "https://ccidc.org/about-us/",
    resources: "https://ccidc.org/", // resources nav item on ccidc.org does not have link address
    contactUs: "https://ccidc.org/contact-ccidc/",
    login: "https://ccidc.org/wp-login.php",
  };

  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <nav className={styles.navBar}>
      <div className={styles.navContent}>
        <NavLink className={styles.navLink} to={"/"}>
          <img src={logo} className={styles.logo} alt={"CCIDC"} />
        </NavLink>
        <ul className={styles.navigation}>
          <li>
            <a className={styles.legacyLink} href={destinations.consumers}>
              Consumers
            </a>
          </li>
          <li>
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
              to={"/candidates"}
            >
              Candidates
            </NavLink>
          </li>
          <li>
            <a className={styles.legacyLink} href={destinations.cids}>
              CIDS
            </a>
          </li>
          <li>
            <a className={styles.legacyLink} href={destinations.aboutUs}>
              About Us
            </a>
          </li>
          <li>
            <a className={styles.legacyLink} href={destinations.resources}>
              Resources
            </a>
          </li>
          <li>
            <a className={styles.legacyLink} href={destinations.contactUs}>
              Contact Us
            </a>
          </li>
          {isLoggedIn && (
            <li>
              <img src={cartIcon} className={styles.navIcon} alt="shop"></img>
            </li>
          )}

          <li>
            <img src={searchIcon} className={styles.navIcon} alt="search"></img>
          </li>

          <li>
            {isLoggedIn ? (
              <button className={styles.logInOutButton} onClick={logout}>
                Logout
              </button>
            ) : (
              <button className={styles.logInOutButton} onClick={login}>
                Login
              </button>
            )}
          </li>
          <li>
            <NavLink className={styles.navLink} to={"/apply"}>
              <Button onClick={null}>Apply</Button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
