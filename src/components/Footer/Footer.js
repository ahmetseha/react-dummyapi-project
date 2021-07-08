import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.container__containerItems}>
        <div className={styles.container__items}>
          <div className={styles.container__item}>
            <a href="https://github.com/ahmetseha" target="_blank">
              Github
            </a>
          </div>
          <div className={styles.container__item}>
            <a href="https://www.linkedin.com/in/ahmetseha/" target="_blank">
              Linkedin
            </a>
          </div>
          <div className={styles.container__item}>
            <a href="https://twitter.com/sehabidev" target="_blank">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
