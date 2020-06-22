import React, { Component } from 'react';
import { URL } from 'react-dnd-html5-backend/lib/NativeTypes';

class LandingPage extends Component {
    state = {}
    render() {
        return (
            <section className="logWrap landWrap">
                <div className="logLeft land">
                    <a href="#"><span>W</span>arsha</a>
                    <h2><strong>Your Platform for </strong> <br /> <strong>Car Services</strong></h2>
                    {/* <h2><strong> Welcome to our Website!</strong></h2> */}
                    <p>Find the <span>Nearest</span> mechanic..</p>
                    <p className="pBook">Book online now !</p>
                </div>
                <div className="landPic" ></div>
            </section>
        );
    }
}

export default LandingPage;