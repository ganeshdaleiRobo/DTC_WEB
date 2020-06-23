import React, { useState } from "react";
import Reel from "./Reel";
import card1 from "../../assets/cards/card1.png";
import card2 from "../../assets/cards/card2.png";
import card3 from "../../assets/cards/card3.png";
import card4 from "../../assets/cards/card4.png";
import card5 from "../../assets/cards/card5.png";
import card6 from "../../assets/cards/card6.png";

const ReelCosmos = () => {
  const [reels, setReels] = useState({
    ContinueWatch: [
      { img: card1, rout: "./" },
      { img: card2, rout: "./" },
      { img: card3, rout: "./" },
      { img: card4, rout: "./" },
      { img: card5, rout: "./" },
      { img: card6, rout: "./" },
    ],
  });
  return <Reel data={reels.ContinueWatch} />;
};
export default ReelCosmos;
