import { NavLink } from "react-router-dom";

import cartIcon from "../assets/cart.svg";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/search.svg";

import Button from "./Button";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navContent}>
        <NavLink className={styles.navLink} to={"/"}>
          <img src={logo} className={styles.logo} alt={"CCIDC"} />
        </NavLink>
        <ul className={styles.navigation}>
          <li>
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
              to={"/consumers"}
            >
              Consumers
            </NavLink>
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
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
              to={"/cids"}
            >
              CIDS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
              to={"/about-us"}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
              to={"/resources"}
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
              to={"/contact-us"}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <img src={cartIcon} className={styles.navIcon} alt="shop"></img>
          </li>
          <li>
            <img src={searchIcon} className={styles.navIcon} alt="search"></img>
          </li>

          <li>
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
              to={"/login"}
            >
              Login
            </NavLink>
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
