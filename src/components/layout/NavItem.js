import React, { Component } from 'react'

class NavItem extends Component {
    state = {
        open: false
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }
    handleClick = (e) => {
        if(!this.node.contains(e.target)) {
            this.setState({
                open: false
            });
        }
    }
    render () {
        return (
            <li className="navbar-item" ref={node => this.node = node}>
                {// eslint-disable-next-line
                }<a href="#" className="navbar-item-btn" onClick={() => this.setState({open: !this.state.open})}>
                    { this.props.icon }
                </a>
                { this.state.open && this.props.children }
            </li>        
        );
    }
}

export default NavItem;