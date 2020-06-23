import React, { useState, useEffect } from "react";
import List from "../../atoms/list/List";
import "./fevariteMenuBar.scss";

const FevariteMenuBar = () => {
  const [interest, setinterest] = useState({
    userInterest: [
      { label: "For you", rout: "./home" },
      { label: "Category", rout: "./home" },
      { label: "Category", rout: "./home" },
      { label: "Category", rout: "./home" },
      { label: "Category", rout: "./home" },
      { label: "Category", rout: "./home" },
      { label: "Category", rout: "./home" },
      { label: "Category", rout: "./home" },
      { label: "Category", rout: "./home" },
      { label: "Category", rout: "./home" },
      { label: "Category", rout: "./home" },
      { label: "Category", rout: "./home" },
    ],
  });
  return (
    <div className="user-interest-menu">
      <ul>
        {interest.userInterest.map((value, index, arr) => {
          return <List>{value.label}</List>;
        })}
      </ul>
    </div>
  );
};
export default FevariteMenuBar;
