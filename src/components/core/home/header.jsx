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
                <section class="banner">
                    <article class="Talal-banner-shape"></article>
                    <article class="Talal-banner-introduction">
                        <div>
                            <span>Find</span> the best mechanics in Egypt
                        </div> 
                        <i class="fas fa-angle-down Talal-angle-down"></i>
                    </article>
                    <article class="Talal-banner-image"></article>
                </section>
            </React.Fragment>
         );
    }
}
 
export default Header;