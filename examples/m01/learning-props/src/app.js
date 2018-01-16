'use strict'

import React, { Component } from 'react'
// import Title from './title'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container'>
        {
          ['blue', 'red', 'blue'].map((square, key) => (
            <Square key={key} color={square} />
          ))
        }
      </div>
    )
  }
}

// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         <Title name='Leonardo' />
//       </div>
//     )
//   }
// })

export default App
