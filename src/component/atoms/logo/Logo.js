import React from 'react';
import logo from '../../assets/logo.png';
class Logo extends React.Component{
    render(){
        return(
           <img src={logo} width="144px" height="28px"/>
        )
    }
}

export default Logo;