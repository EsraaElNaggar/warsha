import React from 'react'

export default function Dropdown(props) {
    let {header,list} = props
    list = list.map(l => {
        return (
            <li key={l}>
                {l}
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
            <ul className="drop-down collapse">
                {list}
            </ul>
        </div>
    )
}
