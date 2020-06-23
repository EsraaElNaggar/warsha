import React, { Component } from 'react';

import Nav from './../../core/nav/nav';
import SearchFilters from './search-filters';
import CenterCard from './center-card';
import Footer from './../../core/footer';

class SearchResult extends Component {
    state = {
        sortOptions: [
            'A to Z',
            'Z to A',
            'Top Rated',
        ]
    };

    openCenterProfile = center => {
        this.props.openCenterProfile(center);
        this.props.history.replace('/centerprofile')
    };

    render() {
        return (
            <React.Fragment>

                {/* Navbar */}
                <Nav className="white" />

                {/* Search Result Container */}
                <section className="searchR">
                    <div className="container row pt-5 m-auto">
                        {/* Filters Container */}
                        <SearchFilters />

                        {/* Centers Cards Container */}
                        <div className="col-9">
                            <div className="cards-container">
                                <div className="d-flex justify-content-between mb-3 mx-2">
                                    <h5>All Specialities <span className="no-of--all-centers">1050 Centers</span> </h5>
                                    {/* Sort Options Start */}
                                    <div>

                                        <select id="sort" name="sort" className="sort-options">
                                            <option value="defaultValue" >Sort Option</option>
                                            <option value="a-to-z" id='1'>A to Z</option>
                                            <option value="z-to-a" id='2'>Z to A</option>
                                            <option value="top-rated" id='3'>Top Rated</option>
                                            <option value="less-waiting-time" id='4'>Less Waiting Time</option>
                                        </select>
                                    </div>
                                    {/* Sort Options End */}
                                </div>

                                {/* Centers Cards */}
                                {this.props.centers.map(center => (
                                    <CenterCard
                                        key={center.id}
                                        center={center}
                                        openCenterProfile={this.openCenterProfile}
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Centers Cards Container End */}
                    </div>
                </section>
                {/* Footer */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default SearchResult;