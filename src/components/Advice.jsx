import React, { useEffect, useState } from "react";
import "../css/Advice.css";
import axios from "axios";

const BASE_URL = "https://api.adviceslip.com/advice";

const Advice = () => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    getAdvice();
  });

  const getAdvice = async () => {
    try {
      const response = await axios.get(BASE_URL);
      const { advice } = response.data.slip;

      setInfo(advice);
      // console.log(advice);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(info);
  return (
    <div className="advice-container">
      <p>{info}</p>
      <button onClick={getAdvice}>Change</button>
    </div>
  );
};

export default Advice;
