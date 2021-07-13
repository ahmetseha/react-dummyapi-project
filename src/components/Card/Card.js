import { useState } from "react";
import styles from "./Card.module.scss";
import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = process.env.REACT_APP_API_KEY;

function Card({ image, alt, FirstName, LastName, email, id }) {
  const [userInfo, setUserInfo] = useState();

  const clickDetails = () => {
    axios
      .get(`${BASE_URL}/user/${id}`, { headers: { "app-id": APP_ID } })
      .then((res) => setUserInfo(res.data))
      .catch(console.error);
  };

  return (
    <div className={styles.container} onClick={clickDetails}>
      <div className={styles.container__image}>
        <img src={image} alt={alt} />
      </div>
      <div className={styles.container__names}>
        <p className={styles.container__firstname}>{FirstName}</p>
        <p className={styles.container__lastname}>{LastName}</p>
      </div>
      <div className={styles.container__email}>
        <p>{email}</p>
      </div>

      <div className={styles.container__country}>
        {userInfo ? (
          <p className={styles.container__birtday}>
            {userInfo.location.country}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
