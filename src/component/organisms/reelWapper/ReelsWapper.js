import React, {useState}from 'react';
import Reels from '../../organisms/reels/Reel';
import ImgReel from '../reels/imgReel/imgReel';
import './reelsWapper.scss'
import card1  from '../../assets/cards/card1.png';
import card2  from '../../assets/cards/card2.png';
import card3  from '../../assets/cards/card3.png';
import card4  from '../../assets/cards/card4.png';
import card5  from '../../assets/cards/card5.png';
import card6  from '../../assets/cards/card6.png';
import net1  from '../../assets/cards/network/network_1.png';
import net2  from '../../assets/cards/network/network_2.png';
import net3  from '../../assets/cards/network/network_3.png';
import net4  from '../../assets/cards/network/network_4.png';
import net5  from '../../assets/cards/network/network_5.png';
import net6  from '../../assets/cards/network/network_6.png';
import net7  from '../../assets/cards/network/network_7.png';
import net8  from '../../assets/cards/network/network_8.png';

import MyStuff1 from '../../assets/cards/MyStuff/myStuff_1.png';
import MyStuff2 from '../../assets/cards/MyStuff/myStuff_2.png';
import MyStuff3 from '../../assets/cards/MyStuff/myStuff_3.png';
import MyStuff4 from '../../assets/cards/MyStuff/myStuff_4.png';
import MyStuff5 from '../../assets/cards/MyStuff/myStuff_5.png';
import MyStuff6 from '../../assets/cards/MyStuff/myStuff_6.png';
import MyStuff7 from '../../assets/cards/MyStuff/myStuff_6.png';
import MyStuff8 from '../../assets/cards/MyStuff/myStuff_8.png';
import playList1 from '../../assets/cards/playList/playList_1.png';
import playList2 from '../../assets/cards/playList/playList_2.png';
import playList3 from '../../assets/cards/playList/playList_3.png';
import playList4 from '../../assets/cards/playList/playList_4.png';
import playList5 from '../../assets/cards/playList/playList_5.png';

import watch1 from '../../assets/cards/watched/watch_1.png';
import watch2 from '../../assets/cards/watched/watch_2.png';
import watch3 from '../../assets/cards/watched/watch_3.png';
import watch4 from '../../assets/cards/watched/watch_4.png';
import watch5 from '../../assets/cards/watched/watch_5.png';
import watch6 from '../../assets/cards/watched/watch_6.png';
import watch7 from '../../assets/cards/watched/watch_7.png';
import watch8 from '../../assets/cards/watched/watch_8.png';
const ReelsWapper=()=>{
    const [reels, setReels] = useState({
        ContinueWatch:[
            {img:card1,rout:"./"},
            {img:card2,rout:"./"},
            {img:card3,rout:"./"},
            {img:card4,rout:"./"},

        ],
        MyStuff:[
            {img:MyStuff1,rout:"./"},
            {img:MyStuff2,rout:"./"},
            {img:MyStuff3,rout:"./"},
            {img:MyStuff4,rout:"./"},
            {img:MyStuff5,rout:"./"},
            {img:MyStuff6,rout:"./"},
        ],
        netWorks:[
            {img:net1,rout:"./"},
            {img:net2,rout:"./"},
            {img:net3,rout:"./"},
            {img:net4,rout:"./"},
            {img:net5,rout:"./"},
            {img:net6,rout:"./"},
            {img:net7,rout:"./"},

        ],
        playList:[
            {img:playList1,rout:"./"},
            {img:playList2,rout:"./"},
            {img:playList3,rout:"./"},
            {img:playList4,rout:"./"},
            {img:playList5,rout:"./"}
        ],
        watched:[
            {img:watch1,rout:"./"},
            {img:watch2,rout:"./"},
            {img:watch3,rout:"./"},
            {img:watch4,rout:"./"},
            {img:watch5,rout:"./"},
            {img:watch6,rout:"./"},
            {img:watch7,rout:"./"},
            {img:watch8,rout:"./"},
        ]
    })
return(
    <div className="reels-wapper">
        <Reels label ="Continue Watching" data={reels.ContinueWatch}/>
        <ImgReel label="My Stuff" data={reels.MyStuff}/>
        <ImgReel label="NetWorks" data={reels.netWorks}/>
        <ImgReel label="PlayList" data={reels.playList}/>
        <ImgReel label="Because You Watched Chopped" data={reels.watched}/>
    </div>
)
}

export default ReelsWapper;