import styles from "./NavBar.module.css";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart.svg";
import searchIcon from "../assets/search.svg";
import Button from "./Button";
export default function NavBar() {


  function onNavigate(event: React.MouseEvent<HTMLElement>) {
    const target = event?.target;
    if (!target || !(target instanceof HTMLElement)) return; // TODO: alert error to user

    const parent = target?.parentElement;

    if (!parent) return; // TODO: alert error to user

    Array.from(parent.children).map((c) => c.classList.remove(styles.active));
    target.classList.add(styles.active);
  }

  return (
    <nav className={styles.navBar}>
      <div className={styles.navContent}>
        <img src={logo} className={styles.logo} />
        <ul className={styles.navigation}>
          <li onClick={onNavigate}>Consumers</li>
          <li onClick={onNavigate}>Candidates</li>
          <li onClick={onNavigate}>CIDS</li>
          <li onClick={onNavigate}>About Us</li>
          <li onClick={onNavigate}>Resources</li>
          <li onClick={onNavigate}>Contact Us</li>
          <li>
            <img src={cartIcon} className={styles.navIcon} alt="shop"></img>
          </li>
          <li>
            <img src={searchIcon} className={styles.navIcon} alt="search"></img>
          </li>

          <li onClick={onNavigate}>Login</li>
          <li>
            <Button onClick={null}>Apply</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
