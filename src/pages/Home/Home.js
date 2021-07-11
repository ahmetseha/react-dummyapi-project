import React from "react";
import styles from "./Home.module.scss";
import CardContainer from "../../components/CardContainer/CardContainer";
// import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
  return (
    <div className={styles.container}>
      {/* <SearchBar /> */}
      <CardContainer />
    </div>
  );
}

export default Home;
