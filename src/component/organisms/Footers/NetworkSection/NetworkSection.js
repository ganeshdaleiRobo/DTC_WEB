import React, { useState } from "react";
import "./footer-network.scss";
import Img from "../../../atoms/img/Img";
import img_1 from "../../../assets/footer/network/img_1.png";
import img_2 from "../../../assets/footer/network/img_2.png";
import img_3 from "../../../assets/footer/network/img_3.png";
import img_4 from "../../../assets/footer/network/img_4.png";
import img_5 from "../../../assets/footer/network/img_5.png";
import img_6 from "../../../assets/footer/network/img_6.png";
import img_7 from "../../../assets/footer/network/img_7.png";
import img_8 from "../../../assets/footer/network/img_8.png";

import CircleBg from '../../../atoms/circleBg/CircleBg';
const NetworkSection = () => {
  const [img, setimg] = useState({
    img: [
      { url: img_1 },
      { url: img_2 },
      { url: img_3 },
      { url: img_4 },
      { url: img_5 },
      { url: img_6 },
      { url: img_7 },
      { url: img_8 },

    ],
  });
  return (
    <div className="footer-network">
      <CircleBg label="tex" color="white" style="bold"/>
      {img.img.map((value, index, arr) => {
        return <Img imges={value.url} width="50" height="50" />;
      })}
    </div>
  );
};
export default NetworkSection;
