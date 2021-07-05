import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = process.env.REACT_APP_API_KEY;

const FetchData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user?limit=15`, { headers: { "app-id": APP_ID } })
      .then(({ data }) => setData(data));
  }, []);

  console.log(data);

  return <div></div>;
};

export default FetchData;
