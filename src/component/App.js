import React from "react";
import "./styles/app.scss";
import Header from "./organisms/Header/Header";
import FevariteMenuBar from "./organisms/FevariteMenuBar/FevariteMenuBar";
import HeroCarousel from "./organisms/HeroCarousel/HeroCarousel";
import Card from "./molecules/card/Card";
import ReelsWapper from "./organisms/reelWapper/ReelsWapper";
import NetworkSection from "./organisms/Footers/NetworkSection/NetworkSection";
import Menu from "./organisms/Footers/Menu/FooterMenu";
import FooterCopyRight from "./organisms/Footers/FooterCopyRight/FooterCopyRight";
const App = () => {
  return (
    <div className="dtc-wapper">
      <div className="dtc-wapper-inner">
        <Header />
        <FevariteMenuBar />
        {<ReelsWapper />}
        <Menu />
        <FooterCopyRight />
      </div>
    </div>
  );
};
export default App;
