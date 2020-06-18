import React from 'react';
import './menuList.scss';
class MenuList extends React.Component{
constructor(props){
    super(props)

}
render(){
    return(
        <div className="menu-render">
            {
                this.props.children.map((value,index,arr)=>{
                    return (
                    <div className="menu">
                        <img className={value.props.isbackground ? "circle" : "menu-img"} width="32px" height="32px" src={value.props.icon}/>
                        <span className="menu-span">{value.props.name}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

}
export default MenuList;