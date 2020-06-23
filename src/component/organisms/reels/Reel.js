import React, { useState } from "react";
import Card from "../../molecules/card/Card";
import "./reel.scss";
const Reel = (props) => {
  return (
    <div className="reel-wapper">
      <div className="reel-title">{props.label}</div>
      <div className="reel-inner">
        {props.data.map((value, index, arr) => {
          return (
              <Card img={value.img} />
          );
        })}
      </div>
    </div>
  );
};
export default Reel;
