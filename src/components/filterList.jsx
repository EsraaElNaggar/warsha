import React from 'react'

export default function FilterList(props) {
    let {header,list} = props
    list = list.map(l => {
        return (
            <li key={l}>
                <input type="checkbox" id={l} value={l} name={header}/>
                <label htmlFor={l}>{l}</label>
            </li>
        )

    })
    let toggleList = (e) => {
        e.stopPropagation();
        e.target.parentNode.childNodes[1].classList.toggle("collapse-Talal-dropdown")
        console.log()

    }

    return (
        <div className="Talal-dropdown col-2">
            <div onClick={toggleList} className="Talal-dropdown-header">{header}</div>
            <ul className="collapse-Talal-dropdown">
                {list}
            </ul>
        </div>
    )
}
