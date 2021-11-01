import React from 'react'

export default function toggle(props) {
  return (
    <button
      className={`toggle ${props.open ? 'open' : ''}`}
      aria-label={`${props.ariaLabel}`}
      tabIndex='1'
    >
      <div className={` ${props.open ? 'open' : ''}`}></div>
      <div className={` ${props.open ? 'open' : ''}`}></div>
      <div className={` ${props.open ? 'open' : ''}`}></div>
    </button>
  )
}
