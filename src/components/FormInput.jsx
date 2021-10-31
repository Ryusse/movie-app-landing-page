import React from 'react'

export default function FormInput(props) {
  return (
    <form className={props.className}>
      <div className={`${props.className}-container__box`}>
        <input
          className={`${props.className}-container__input`}
          type='text'
          placeholder='Enter your email'
        />
      </div>
    </form>
  )
}
