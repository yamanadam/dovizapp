import React from "react";
import "../css/Money.css";
import { FaArrowCircleRight } from "react-icons/fa";

const Money = () => {
  return (
    <div className="money-container">
      <div className="money-text">
        <h2>Currency Calculation</h2>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <input type="number" className="amount" />
        <select className="fromMoney" name="money" id="Money">
          <option value="dolar">USD</option>
          <option value="tl">TRY</option>

          <option value="euro">EURO</option>
        </select>
        <FaArrowCircleRight size={15} />
        <select className="toMoney" name="money" id="Money">
          <option value="tl">TRY</option>
          <option value="dolar">USD</option>

          <option value="euro">EURO</option>
        </select>
        <input type="number" className="result-amount" />
      </div>
      <div>
        <button className="money-button">Calc</button>
      </div>
    </div>
  );
};

export default Money;
