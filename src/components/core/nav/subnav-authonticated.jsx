import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { removeFromStorage } from './../../../_utils/local-storage';

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

    // signout from account
    signOut = () =>{
        removeFromStorage('authToken');
        removeFromStorage('currentID');
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="parts">
                    <button onClick={this.toggle} className="navUser">
                        {this.props.fName}
                    </button>
                    <div className={ this.state.isActive ? "dropNav activedrop " : "dropNav "}>
                        <Link className="itemNavCont dropdown-item" to="/myprofile">
                            My Profile
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link
                            className="itemNavCont dropdown-item"
                            onClick={this.signOut}
                            to="/landingPage"
                        >
                            Sign Out
                        </Link>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default SubNavAuthonticated;