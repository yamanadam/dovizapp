import React, { useState } from "react";
import "../css/Money.css";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_0WPxaSF04amCNBqJvWjN5wxdCzz6Au6RuOtAum30";

const Money = () => {
  const [amount, setAmount] = useState(0);
  const [res, setRes] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("TRY");

  const getData = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${from}`
    );
    setRes((amount * response.data.data[to]).toFixed(2));
    // console.log(response.data.data[to]);
  };

  return (
    <div className="money-container">
      <div className="money-text">
        <h2>Currency Calculation</h2>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <input
          type="number"
          className="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select className="fromMoney" onChange={(e) => setFrom(e.target.value)}>
          <option value="USD">USD</option>
          <option value="TRY">TRY</option>
          <option value="EUR">EUR</option>
        </select>
        <FaArrowCircleRight size={15} />
        <select className="toMoney" onChange={(e) => setTo(e.target.value)}>
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <input type="number" className="result-amount" value={res} />
      </div>
      <div>
        <button onClick={getData} className="money-button">
          Calc
        </button>
      </div>
    </div>
  );
};

export default Money;
