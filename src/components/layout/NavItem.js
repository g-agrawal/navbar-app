import React, { useState } from 'react'

function NavItem(props) {
    const [open, setOpen] = useState(false);
    return (
        <li className="navbar-item">
            {// eslint-disable-next-line
            }<a href="#" className="navbar-item-btn" onClick={() => setOpen(!open)}>
                { props.icon }
            </a>
            { open && props.children }
        </li>        
    );
}

export default NavItem;