import React from "react";
import Img from "../../atoms/img/Img";
import globalIcon from "../../assets/cards/global_icon.png";
import TextField from "../../atoms/textField/TextField";
import "./card.scss";
const Card = (props) => {
  return (
    <div className="Standard-Episode">
      <div className="bitmap-img">
        <Img imges={props.img} />
      </div>
      <div className="bitmap-img-containt">
        <TextField
          color={props.Seriecolor}
          style={props.style}
          size={props.size}
          label={props.SeriesTitle}
        />
        <Img imges={globalIcon} />
      </div>
      <TextField
        color={props.Episodcolor}
        style={props.style}
        size={props.size}
        label={props.EpisodeTitle}
      />
    </div>
  );
};
export default Card;

Card.defaultProps = {
  Seriecolor: "#e4e4e4",
  Episodcolor: "gray",
  SeriesTitle: "Series Title",
  EpisodeTitle: "Episode Title",
  style: "bold",
  size: "16px",
};
