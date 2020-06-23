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
<<<<<<< HEAD
                <section className="banner">
                    <article className="Talal-banner-shape"></article>
                    <article className="Talal-banner-introduction">
                        <div>
                            <span>Find</span> the best mechanics in Egypt
                        </div> 
                        <i className="fas fa-angle-down Talal-angle-down"></i>
                    </article>
                    <article className="Talal-banner-image"></article>
=======
                <section className="logWrap landWrap">
                    <div className="logLeft land">
                        <Link href="/"><span>W</span>arsha</Link>
                        <h2><strong>Your Platform for </strong> <br /> <strong>Car Services</strong></h2>
                        {/* <h2><strong> Welcome to our Website!</strong></h2> */}
                        <p>Find the <span>Nearest</span> mechanic..</p>
                        <p className="pBook">Book online now !</p>
                    </div>
                    <div className="landPic" ></div>
>>>>>>> 08feafecb1feb1f73ba41fe8ddea94261ce18ca6
                </section>
            </React.Fragment>
        );
    }
}

export default Header;