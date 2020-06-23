import React from 'react'

export default function FilterMenu(props) {
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
            <li onClick={toggleList} className="Talal-dropdown-header">{header}</li>
            <ul className="collapse-Talal-dropdown>
                {list}
            </ul>
        </div>
    )
}
