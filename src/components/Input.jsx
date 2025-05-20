import React from 'react'

const Input = ({handleChange, value, color, name, title}) => {
  return (
    <label className="sidebar-label-container">
        <input type="radio" value={value} name={name} onChange={handleChange} />
        <span className="checkmark" style={{backgroundColor: color}}></span>{title}
    </label> 
  )
}

export default Input
