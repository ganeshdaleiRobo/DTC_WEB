import React,{useState} from 'react';
import imgReel from './imgReel';
import card1 from '../../../assets/cards/MyStuff/myStuff_1.png';
const imgReelCosmos = ()=>{
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
    return <imgReel label="MyStuff" data={reels.ContinueWatch}/>
}
export default imgReelCosmos;