import React, { Component } from 'react';

import Nav from './../nav/nav';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {/* Navbar */}
                <Nav className="white"/>
                
                {/* Banner */}
                <section className="banner">
                    <article className="Talal-banner-shape"></article>
                    <article className="Talal-banner-introduction">
                        <div>
                            <span>Find</span> the best mechanics in Egypt
                        </div> 
                        <i className="fas fa-angle-down Talal-angle-down"></i>
                    </article>
                    <article className="Talal-banner-image"></article>
                </section>
            </React.Fragment>
         );
    }
}
 
export default Header;