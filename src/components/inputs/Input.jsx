

import React from 'react'
import './input.scss'

const Input = ({InputValue,ProductValue}) => {
  return (
    ProductValue.map( values => (
      <div className="inner-right" key={values.id} >
            <label> {values.title} </label>
            <input type="text" placeholder={values.placeholder} />
        </div>
    ))
  )
}

export default Input