import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./CardContainer.module.scss";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = process.env.REACT_APP_API_KEY;

function CardContainer() {
  const [users, setUsers] = useState();
  const [isloading, setIsLoading] = useState(true);
  const [filterUsers, setFilterUsers] = useState("");
  const [visible, setVisible] = useState(15);

  // const filtered = users.filter((user) => {
  //   return Object.keys(user).some((key) =>
  //     user[key]
  //       .toString()
  //       .toLowerCase()
  //       .includes(filterUsers.toString().toLocaleLowerCase())
  //   );
  // });
  // console.log(filtered);

  const loadMore = () => {
    setVisible(visible + 15);
  };
  const onChangeSubmit = (e) => {
    setFilterUsers(e.target.value);
  };
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/user?limit=150`, { headers: { "app-id": APP_ID } })
      .then((res) => setUsers(res.data))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <div className={styles.container__head}>
          <h1>USER LIST</h1>
        </div>
        <div className={styles.container__searchBar}>
          <input
            placeholder="Search"
            value={filterUsers}
            onChange={onChangeSubmit}
          />
        </div>
      </div>
      {isloading && <div className={styles.container__loading}>Loading...</div>}
      <div className={styles.container__content}>
        {users &&
          users.data.slice(0, visible).map((user) => {
            return (
              <Card
                key={user.id}
                image={user.picture}
                alt={user.firstName}
                FirstName={user.firstName}
                LastName={user.lastName}
                email={user.email}
              />
            );
          })}
      </div>
      <div className={styles.container__loadMore}>
        <button onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
}

export default CardContainer;
