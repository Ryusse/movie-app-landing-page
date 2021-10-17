import React from 'react'

export default function toggle(props) {
    return (
        <div className={`toggle ${props.open ? "open" : ""}`} >
            <div className={` ${props.open ? "open" : ""}`}></div>
            <div className={` ${props.open ? "open" : ""}`}></div>
            <div className={` ${props.open ? "open" : ""}`}></div>
        </div>
    )
}
