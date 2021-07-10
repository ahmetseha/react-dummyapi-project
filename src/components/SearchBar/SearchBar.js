import { useState } from "react";
import styles from "./SearchBar.module.scss";

function SearchBar() {
  const [filterUsers, setFilterUsers] = useState("");

  // const filtered = user.filter((item) => {
  //   return Object.keys(item).some((key) =>
  //     item[key]
  //       .toString()
  //       .toLowerCase()
  //       .includes(filterUsers.toLocaleLowerCase())
  //   );
  // });

  return (
    <div className={styles.container}>
      <input
        placeholder="Search"
        value={filterUsers}
        onChange={(e) => setFilterUsers(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
