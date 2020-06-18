import React from 'react';
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel_img from '../../assets/market.png';
class HeroCarousel extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Carousel showThumbs={false} infiniteLoop={true}>
            <div style={{ height: "300", color: "#fff" }}><img src={Carousel_img}/></div>
            <div style={{height: "300", color: "#fff" }}><img src={Carousel_img}/></div>
            <div style={{ height: "300", color: "#fff" }}><img src={Carousel_img}/></div>
          </Carousel>
        )
    }
}
export default HeroCarousel;