

import React from 'react'
import './input.scss'

const Input = ({input}) => {
  return input.map( values => (
    <div className="inner-right" key={values.id} >
          <label> {values.title} </label>
          <input type="text" placeholder={values.placeholder} />
      </div>
  ))
}

export default Input