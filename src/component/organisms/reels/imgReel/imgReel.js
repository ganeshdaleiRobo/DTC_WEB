import React, { useState } from 'react';
import Img from '../../../atoms/img/Img';
import Card from '../../../molecules/card/Card';
import card1 from '../../../assets/cards/MyStuff/myStuff_1.png';
import './imgReel.scss';
const imgReel = (props) => {
    const [reels, setReels] = useState({
        ContinueWatch: [
            { img: card1, rout: "./" },
            { img: card1, rout: "./" },
            { img: card1, rout: "./" },
            { img: card1, rout: "./" },
            { img: card1, rout: "./" },
            { img: card1, rout: "./" },
            { img: card1, rout: "./" },
            { img: card1, rout: "./" },
            { img: card1, rout: "./" },
            { img: card1, rout: "./" },
        ],
    })
    return (
        <div>
            <div className="reel-title">{props.label}</div>
        <div className="img-reel-wapper">
            {
                props.data.map((value, index, arr) => {
                    return <Img imges={value.img} />
                })
            }
        </div>
        </div>
    )
}
export default imgReel;