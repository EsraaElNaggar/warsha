import React, {Component} from 'react'

import Header from './header';
import SearchBar from './search-bar';
import WhyUs from './why-us';
import Footer from '../footer';

const Home = props => {

    const handleSearch = searchResult =>{
        props.handleSearch(searchResult);
        props.history.replace("searchresult");
    };

    return ( 
        <React.Fragment>
            {/* Header */}
            <Header/>

            {/* Home Container */}
            <section className="full-height-container credits">
                <SearchBar 
                    handleSearch={handleSearch}
                />
                <WhyUs/>
            </section>

            {/* Footer */}
            <Footer/>
        </React.Fragment>
    );
}
 
export default Home;
