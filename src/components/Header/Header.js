import styles from "./Header.module.scss";
// import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.container__containerHead}>
        <header className={styles.container__head}>
          <div className={styles.container__logo}>PROJE</div>
          <nav className={styles.container__menu}>
            <ul className={styles.container__items}>
              <li className={styles.container__item}>Home</li>
              <li className={styles.container__item}>About</li>
              <li className={styles.container__item}>Contact</li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
