import styles from "./NavBar.module.css";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart.svg";
import searchIcon from "../assets/search.svg";
export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <div className={styles.navContent}>
        <img src={logo} className={styles.logo} />
        <div className={styles.navigation}>
          <div>Consumers</div>
          <div>Candidates</div>
          <div>CIDS</div>
          <div>About Us</div>
          <div>Resources</div>
          <div>Contact Us</div>
          <div>Login</div>
          <img src={cartIcon} className={styles.navIcon}></img>
          <img src={searchIcon} className={styles.navIcon}></img>
          <div className={styles.button}> Apply</div>
        </div>
      </div>
    </div>
  );
}
