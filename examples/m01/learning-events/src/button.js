'use strict'

import React from 'react'

const Button = ({ children, handlerClick }) => (
  <button className='main-button' onClick={handlerClick}>
    {children}
  </button>
)

export default Button
