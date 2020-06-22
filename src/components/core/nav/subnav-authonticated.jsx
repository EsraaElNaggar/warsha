import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SubNavAuthonticated extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentUser: {},
          isActive: true,
          activeIndex: 0
        };
        this.toggleClass = this.toggleClass.bind(this);
      };

    toggleClass = (index, e) => {
    this.setState({ activeIndex: index });
    };
    
    toggle = e => {
        this.setState({ isActive: !this.state.isActive });
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="parts">
            <button onClick={this.toggle} className="navUser">
            fName
            </button>
            <div
            className={
                this.state.isActive ? "dropNav activedrop " : "dropNav "
            }
            >
            <NavLink className="itemNavCont dropdown-item" to="/myprofile">
                My Profile
            </NavLink>
            <div className="dropdown-divider"></div>
            <a
                className="itemNavCont dropdown-item"
                onClick={this.onClick}
                href="/landingPage"
            >
                Sign Out
            </a>
            </div>
            </div>
        </React.Fragment>
         );
    }
}
 
export default SubNavAuthonticated;