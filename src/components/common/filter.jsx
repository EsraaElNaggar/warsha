import React, { useRef } from 'react'

export default function Filter(props) {
    let { carBrands, carModel,carYear,avalibility } = props;
    //carBrands Element
    carBrands = carBrands.map(c => {
        return (
            <li key={c}>
                <input type="radio" name="car-make" value={c} id={c} />
                <label htmlFor={c}>{c}</label>
            </li>
        )

    })
    carModel = carModel.map(c => {
        return (
            <li key={c}>
                <input type="checkbox" name="car-model" value={c} id={c} />
                <label htmlFor={c}>{c}</label>
            </li>
        )

    })
    carYear = carYear.map(c => {
        return (
            <li key={c}>
                <input type="checkbox" name="car-year" value={c} id={c} />
                <label htmlFor={c}>{c}</label>
            </li>
        )

    })
    avalibility = avalibility.map(c => {
        return (
            <li key={c}>
                <input type="checkbox" name="avalibility" value={c} id={c} />
                <label htmlFor={c}>{c}</label>
            </li>
        )

    })

    const menu = useRef(null);
    //Model Element
    let toggleList = (e) => {
        e.stopPropagation();
        e.target.parentNode.childNodes[1].classList.toggle("collapse-filter-menu")
        console.log()

    }
    return (
        <div className="col-3">
            <div className="search-filters">
                <p className="filters-title">
                    <i className="fas fa-filter pr-2"></i>
                    Filters
                </p>
                <ul className="filters p-0 m-0">
                    <li>
                        <div onClick={toggleList}>
                            <span> <i className="fas fa-cogs pr-2"></i>
                            Make
                            </span>
                            <i className="fas fa-caret-down filter-arrow"></i>
                        </div>
                        <ul className="filter-options">
                            {carBrands}
                        </ul>
                    </li>
                    <li>
                        <div onClick={toggleList}>
                            <span> <i className="fas fa-car pr-2"></i>
                        Model </span>
                            <i className="fas fa-caret-down filter-arrow"></i>
                        </div>
                        <ul className="filter-options">
                            {carModel}
                        </ul>
                    </li>
                    <li>
                        <div onClick={toggleList}>
                            <span> <i className="fas fa-calendar pr-2"></i>
                        Year </span>
                            <i className="fas fa-caret-down filter-arrow"></i>
                        </div>
                        <ul className="filter-options">
                        {carYear}
                        </ul>
                    </li>
                    <li>
                    <div onClick={toggleList}>
                            <span> <i className="fas fa-calendar-alt pr-2"></i>
                        Avalibility </span>
                            <i className="fas fa-caret-down filter-arrow"></i>
                        </div>
                        <ul className="filter-options">
                        {avalibility}
                        </ul>
                    </li>
                    <li>
                    <div onClick={toggleList}>
                            <span> <i className="fas fa-tools pr-2"></i>
                            Remote </span>
                            <input type="checkbox"/>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}
