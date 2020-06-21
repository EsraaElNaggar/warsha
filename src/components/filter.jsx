import React from 'react'

export default function Filter() {
    return (
        <div className="col-3">
            <div className="search-filters">
                <p className="filters-title">
                    <i className="fas fa-filter pr-2"></i>
                    Filters
                </p>
                <ul className="filters p-0 m-0">
                    <li>
                        <i className="fas fa-cogs pr-2"></i>
                        Make
                        <i className="fas fa-caret-down filter-arrow"></i>


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

                    </li>
                    <li>
                        <i className="fas fa-car pr-2"></i>
                        Model
                        <i className="fas fa-caret-right filter-arrow"></i>
                    </li>
                    <li>
                        <i className="far fa-calendar pr-2"></i>
                            Year
                        <i className="fas fa-caret-right filter-arrow"></i>
                    </li>
                    <li>
                        <i className="far fa-calendar-alt pr-2"></i>
                            Availability
                        <i className="fas fa-caret-right filter-arrow"></i>
                    </li>
                    <li>
                        <i className="fas fa-tools pr-2"></i>
                            Remote Check
                        <i className="fas fa-caret-right filter-arrow"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}
