import React from "react";

const Money = () => {
  return (
    <div>
      <input type="number" />
      <select name="money" id="Money">
        <option value="dolar">USD</option>
        <option value="tl">TRY</option>

        <option value="euro">EURO</option>
      </select>
    </div>
  );
};

export default Money;
