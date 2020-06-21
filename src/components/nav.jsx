import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: {},
            isActive: true,
            activeIndex: 0
        }
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass = (index, e) => {
        this.setState({ activeIndex: index });
    }

    toggle = (e) => {
        this.setState({ isActive: !this.state.isActive });
    }
    // onClick = (e) => {
    //     LocalStorageclear();
    // }
    render() {
        // const { className } = props;
        return (
            <React.Fragment>
                <nav className={this.props.className}>
                    <div className="parts">
                        <h1 className="logo"><span>W</span>arsha</h1>
                    </div>
                    <div className="parts">
                        <div><a href="">Home</a></div>
                        <div><a href="">About us</a></div>
                        <div><a href="">Contact us</a></div>
                        <button onClick={this.toggle} className="navUser">fName</button>
                        <div className={(this.state.isActive) ? "dropNav activedrop " : "dropNav "} >
                            <a className="itemNavCont dropdown-item" href="/myProfile">My Profile</a>
                            <div className="dropdown-divider"></div>
                            <a className="itemNavCont dropdown-item" onClick={this.onClick} href="/landingPage">Sign Out</a>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    };
}
export default Nav;