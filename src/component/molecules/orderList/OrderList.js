import React from "react";

const OrderList = (style = true, listArray = ["sample1", "sample2"]) => {
  return (
    <ul>
      {listArray.map((value, index, arr) => {
        <li>{value}</li>;
      })}
    </ul>
  );
};

export default OrderList;
