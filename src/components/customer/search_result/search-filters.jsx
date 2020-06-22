import React from 'react';

const SearchFilters = props => {
   
    return ( 
        <React.Fragment>
            <div className="col-3">
                <div className="search-filters">
                {/* Filter Title Start */}
                <p className="filters-title">
                    <i className="fas fa-filter pr-2" />
                    Filters
                </p>
                {/* Filter Title End */}
                {/* Filters Start */}
                <ul className="filters p-0 m-0">
                    <li>
                    <i className="fas fa-cogs pr-2" />
                    Make
                    <i className="fas fa-caret-down filter-arrow" />
                    {/* Filter Options Start */}
                    <ul className="filter-options">
                        <li>
                        <input type="checkbox" name="car-make" id="audi" />
                        Audi
                        </li>
                        <li>
                        <input type="checkbox" name="car-make" id="bmw" />
                        BMW
                        </li>
                        <li>
                        <input type="checkbox" name="car-make" id="ford" />
                        Ford
                        </li>
                        <li>More</li>
                    </ul>
                    {/* Filter Options End */}
                    </li>
                    <li>
                    <i className="fas fa-car pr-2" />
                    Model
                    <i className="fas fa-caret-right filter-arrow" />
                    </li>
                    <li>
                    <i className="far fa-calendar pr-2" />
                    Year
                    <i className="fas fa-caret-right filter-arrow" />
                    </li>
                    <li>
                    <i className="far fa-calendar-alt pr-2" />
                    Availability
                    <i className="fas fa-caret-right filter-arrow" />
                    </li>
                    <li>
                    <i className="fas fa-tools pr-2" />
                    Remote Check
                    <i className="fas fa-caret-right filter-arrow" />
                    </li>
                </ul>
                {/* Filters End */}
                </div>
            </div>
        </React.Fragment>
    );
    
};
 
export default SearchFilters;