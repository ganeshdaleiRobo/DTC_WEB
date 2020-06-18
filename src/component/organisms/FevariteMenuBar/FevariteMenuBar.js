import React from 'react';
import LinkMenu from '../../atoms/linkMenu/LinkMenu';
import './fevariteMenuBar.scss';
class FevariteMenuBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInterest:[
                {label:"For you",rout:"./home"},
                {label:"Category",rout:"./home"},
                {label:"Category",rout:"./home"},
                {label:"Category",rout:"./home"},
                {label:"Category",rout:"./home"},
                {label:"Category",rout:"./home"},
                {label:"Category",rout:"./home"},
                {label:"Category",rout:"./home"},
                {label:"Category",rout:"./home"},
                {label:"Category",rout:"./home"},
                {label:"Category",rout:"./home"},
                {label:"Category",rout:"./home"},
            ]
        }
    }
    render(){
        return(
            <div className="user-interest-menu">
            <LinkMenu>
            {
                this.state.userInterest.map((value,index,arr)=>{
                    return (
                    <menu label={value.label} path={value.rout}/>
                    )
                })
            }
            </LinkMenu>
            </div>
        )
    }
}
export default FevariteMenuBar;