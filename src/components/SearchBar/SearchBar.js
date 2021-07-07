import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <form className={styles.container__form}>
        {/* onSubmit={submitHandler} */}
        <input
          className={styles.container__searchInput}
          placeholder="Search Users"
        />
        <input
          className={styles.container__searchBtn}
          value="Search"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SearchBar;
