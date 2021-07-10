import React from "react";
import styles from "./Home.module.scss";
import CardContainer from "../../components/CardContainer/CardContainer";

function Home() {
  return (
    <div className={styles.container}>
      <CardContainer />
    </div>
  );
}

export default Home;
