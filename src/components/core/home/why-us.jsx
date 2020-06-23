import React, { Component } from 'react';

class WhyUs extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <section className="why-us">
                    <section>
                        {/* <img src="/HomeImages/Search.svg" alt="" /> */}
                        <img src="https://img.icons8.com/pastel-glyph/256/000000/search--v2.png" alt=""/>
                        <div className="miniLine"></div>
                        <h3>Search</h3>
                        <p>Search for Mechanics, plumbers ... etc. in your area</p>
                    </section>
                    <section>
                        <img src="/HomeImages/Mechanic.svg" alt="" />
                        <div className="miniLine"></div>
                        <h3>Compare</h3>
                        <p>Compare between mulitple choices and choose what suits you</p>
                    </section>
                    <section>
                        <img src="/assets/calendar.svg" alt="" />
                        <div className="miniLine"></div>
                        <h3>Book</h3>
                        <p>Book your appointment, with no need to wait</p>
                    </section>
                </section>
            </React.Fragment>
        );
    }
}

export default WhyUs;