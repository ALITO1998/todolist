import React from 'react'
import Style from './Form.module.css'


const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={props.style}
      className={Style.button}
      type={`${props.type ? props.type : 'button'}`}>
      {props.children}
    </button>
  )
}

export default Button
