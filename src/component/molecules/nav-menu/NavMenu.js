import React from 'react';
import MenuList from '../../atoms/menus/MenuList';
import iconHome from '../../assets/menus/Home.png';
import iconPlus from '../../assets/menus/plus.png';
import iconShow from '../../assets/menus/show.png';
import iconSearch from '../../assets/menus/search.png';
class NavMenu extends React.Component{
    render(){
        return(
            <MenuList>
                <menu name="home" type="button" icon={iconHome} isbackground={true}/>
                <menu name="My Stuff" type="button" icon={iconPlus} isbackground={false}/>
                <menu name="Shows" type="button" icon={iconShow} isbackground={false}/>
                <menu name="Search" type="input" icon={iconSearch} isbackground={false}/>
                
                </MenuList>
        )
    }
}
export default NavMenu;