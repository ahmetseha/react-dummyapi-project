import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./CardContainer.module.scss";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = process.env.REACT_APP_API_KEY;

function CardContainer() {
  const [isloading, setIsLoading] = useState(true);
  const [users, setUsers] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/user?limit=16`, { headers: { "app-id": APP_ID } })
      .then((res) => setUsers(res.data))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      {isloading && <div className={styles.loading}>Loading...</div>}
      {users &&
        users.data.map((user) => {
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
  );
}

export default CardContainer;
