import React from 'react';
import './linkMenu.scss';
class LinkMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {
                    this.props.children.map((value, index, arr) => {
                        return (
                            <li>{value.props.label}</li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default LinkMenu;