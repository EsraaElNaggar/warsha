import React, { Component } from 'react';

import SearchFilters from './search-filters';
import CenterCard from './center-card';

class SearchResult extends Component {
    state = {  }
    render() { 
        console.log(this.props);
        return ( 
            <React.Fragment>
                <div className="container row pt-3 m-auto">
                    {/* Filters Container */}
                    <SearchFilters/> 

                    {/* Centers Cards Container */}
                    <div className="col-9">
                        <div className="cards-container">
                            <div className="d-flex justify-content-between mb-3 mx-2">
                                <h5>All Specialities <span className="no-of--all-centers">1050 Centers</span> </h5>
                                {/* Sort Options Start */}
                                <div>
                                    <select id="sort" name="sort" className="sort-options">
                                    <option value="defaultValue" >Select Option</option>
                                    {/* {this.state.options.map(opt => (
                                    <option value={opt.value}>
                                        {opt.name}
                                    </option>
                                    ))} */}
                                    <option value="a-to-z" id='1'>A to Z</option>
                                    <option value="z-to-a" id='2'>Z to A</option>
                                    <option value="top-rated" id='3'>Top Rated</option>
                                    <option value="less-waiting-time" id='4'>Less Waiting Time</option>
                                </select>
                                </div>
                                {/* Sort Options End */}
                            </div>

                            {/* Center Card */}
                            <CenterCard/>

                        </div>
                    </div>
                    {/* Centers Cards Container End */}
                </div>
            </React.Fragment>
        );
    }
}
 
export default SearchResult;