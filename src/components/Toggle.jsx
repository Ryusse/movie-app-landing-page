import React from 'react'

export default function toggle(props) {
    return (
        <div className={`toggle ${props.open ? "open" : ""}`} >
            <div className={`toggle__line toggle__line-1 ${props.open ? "open" : ""}`}></div>
            <div className={`toggle__line toggle__line-2 ${props.open ? "open" : ""}`}></div>
            <div className={`toggle__line toggle__line-3 ${props.open ? "open" : ""}`}></div>
        </div>
    )
}
