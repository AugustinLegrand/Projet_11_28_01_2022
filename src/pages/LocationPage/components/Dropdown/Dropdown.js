import { useState } from 'react'
import './Dropdown.css'

export default function Dropdown(props) {

    let type = "text"

    const [active, setActive] = useState("")
    const [arrow, setArrow] = useState("down")

    if (Array.isArray(props.data)) {
        type = "list"
    }

    function text() {
        return (
            <div className="dropdown-content-text">
                <p>{props.data}</p>
            </div>
        )
    }

    function list() {
        return (
            <div className="dropdown-content-list">
                {Array.from(props.data, (l, index) => <p key={"list-"+index}>{l}</p>)}
            </div>
        )
    }

    function toggleDropdown(e) {
        setActive(active === "" ? "dropdown-content-open" : "")
        setArrow(arrow === "down" ? "up" : "down")
    }

    return (
        <div className={"dropdown-"+type+" dropdown"}>
            <div className="dropdown-header" onClick={toggleDropdown}>
                <p style={{width: '110px'}}>{props.name}</p>
                <div className="dropdown-icon">
                    <img src={"./../"+arrow+"-arrow.svg"} alt="ARROW ICON" />
                </div>
            </div>
            <div className={"dropdown-content "+active}>
                { (type === "text") ? text() : list() }
            </div>
        </div>
    )

}