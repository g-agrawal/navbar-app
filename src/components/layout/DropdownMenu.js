import React from 'react'
import { ReactComponent as CogIcon } from '../../icons/cog.svg'

function DropdownMenu() {
    function DropdownMenuItem(props) {
        return (
            // eslint-disable-next-line
            <a href="#" className="dropdown-menu-item">
                <span className="navbar-item-btn">{props.iconLeft}</span>
                {props.children}
                <span className="dropdown-menu-item-icon-right">{props.iconRight}</span>
            </a>
        );
    }
    return (
        <div className="dropdown-menu">
            <DropdownMenuItem>My Profile</DropdownMenuItem>
            <DropdownMenuItem iconLeft={<CogIcon />}>Settings</DropdownMenuItem>
        </div>
    );
}

export default DropdownMenu;