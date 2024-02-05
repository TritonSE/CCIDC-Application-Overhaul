import styles from "./NavBar.module.css";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart.svg";
import searchIcon from "../assets/search.svg";
import Button from "./Button";
export default function NavBar() {
  function onNavigate(event) {
    const target = event?.target;
    if (!target || !(target instanceof HTMLElement)) return; // TODO: alert error to user

    const parent = target?.parentElement;

    if (!parent) return; // TODO: alert error to user

    Array.from(parent.children).map((c) => c.classList.remove(styles.active));
    target.classList.add(styles.active);
  }

  return (
    <div className={styles.navBar}>
      <div className={styles.navContent}>
        <img src={logo} className={styles.logo} />
        <div className={styles.navigation}>
          <div onClick={onNavigate}>Consumers</div>
          <div onClick={onNavigate}>Candidates</div>
          <div onClick={onNavigate}>CIDS</div>
          <div onClick={onNavigate}>About Us</div>
          <div onClick={onNavigate}>Resources</div>
          <div onClick={onNavigate}>Contact Us</div>
          <div onClick={onNavigate}>Login</div>
          <img src={cartIcon} className={styles.navIcon}></img>
          <img src={searchIcon} className={styles.navIcon}></img>
          <Button>Apply</Button>
        </div>
      </div>
    </div>
  );
}
