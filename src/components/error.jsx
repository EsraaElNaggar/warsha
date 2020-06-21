import React, { Component } from 'react';
import _ from "lodash";

import Nav from './nav';

class ErrorPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav
                    className="white"
                />
                <main className='covidUnivers'>
                    <React.Fragment>
                        {_.times(80, (i) => (
                            <img className='covid' src="/assets/covid.png" alt='covid' key={i} />
                        ))}
                    </React.Fragment>
                    <article className='covidHelpMsg'>
                        <p>Damnit stranger,</p>
                        <p>You got lost in the <strong>404 Covid</strong> galaxy.</p>
                        <p>
                            <button>Put your mask & Go back.</button>
                        </p>
                    </article>
                </main>
            </React.Fragment>
        );
    }
}

export default ErrorPage;