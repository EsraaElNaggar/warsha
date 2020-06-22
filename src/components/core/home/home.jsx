import React from 'react'

import Header from './header';
import SearchBar from './search-bar';
import WhyUs from './why-us';
import Footer from '../footer';


export default function Home(props) {

    return (
        <React.Fragment>
            {/* Header */}
            <Header/>

            {/* Home Container */}
            <section class="full-height-container credits">
                <SearchBar/>
                <WhyUs/>
            </section>

            {/* Footer */}
            <Footer/>
        </React.Fragment>
    );
}
