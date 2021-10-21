import React from 'react'

export default function ExitButton(props) {
    return (
        <div className={`${props.className}`} onClick={props.close}>
          <div></div>
          <div></div>
        </div>
    )
}
