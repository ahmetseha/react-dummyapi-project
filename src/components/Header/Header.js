import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.container__containerHead}>
        <header className={styles.container__head}>
          <NavLink to="/">
            <div className={styles.container__logo}>Ahmet Seha</div>
          </NavLink>
          <nav className={styles.container__menu}>
            <ul className={styles.container__items}>
              <li className={styles.container__item}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className={styles.container__item}>
                <NavLink to="/about">About</NavLink>
              </li>
              <li className={styles.container__item}>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
