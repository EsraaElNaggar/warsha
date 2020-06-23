import React, { Component } from 'react';

class WhyUs extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <section className="why-us">
                    <section>
                        <img src="/HomeImages/Search.svg" alt=""/>
                        <h3>Search</h3>
                        <p>Search for Mechanics, plumbers ... etc. in your area</p>
                    </section>
                    <section>
                        <img src="/HomeImages/Mechanic.svg" alt=""/>
                        <h3>Compare</h3>
                        <p>Compare between mulitple choices and choose what suits you</p>
                    </section>
                    <section>
                        <img src="/HomeImages/Book.svg" alt=""/>
                        <h3>Book</h3>
                        <p>Book your appointment, with no need to wait</p>
                    </section>
                </section>
            </React.Fragment>
         );
    }
}
 
export default WhyUs;