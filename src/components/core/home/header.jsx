import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from './../nav/nav';

class Header extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                {/* Navbar */}
                <Nav className="white" />

                {/* Banner */}
                <section className="logWrap landWrap">
                    <div className="logLeft land">
                        <Link to="/"><span>W</span>arsha</Link>
                        <h2><strong>Your Platform for </strong> <br /> <strong>Car Services</strong></h2>
                        {/* <h2><strong> Welcome to our Website!</strong></h2> */}
                        <p>Find the <span>Nearest</span> mechanic..</p>
                        <p className="pBook">Book online now !</p>
                    </div>
                    <div className="landPic" ></div>
                </section>
            </React.Fragment>
        );
    }
}

export default Header;