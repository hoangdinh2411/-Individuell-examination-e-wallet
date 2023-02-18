import React from 'react'
import './button.css'
export default function Button(props) {
  const { children, className, ...rest } = props
  return (
    <button {...rest} className={`btn ${className}`}>
      {props.children}
    </button>
  )
}
