import React, {Component} from 'react'

import Header from './header';
import SearchBar from './search-bar';
import WhyUs from './why-us';
import Footer from '../footer';

class Home extends Component {

    handleSearch = searchResult =>{
        this.props.handleSearch(searchResult);
        this.props.history.replace("searchresult");
    };

    render() { 
        return ( 
            <React.Fragment>
                {/* Header */}
                <Header/>

                {/* Home Container */}
                <section className="full-height-container credits">
                    <SearchBar 
                        handleSearch={this.handleSearch}
                    />
                    <WhyUs/>
                </section>

                {/* Footer */}
                <Footer/>
            </React.Fragment>
         );
    }
}
 
export default Home;
