'use strict'

import React from 'react'

// Usando funções pura.
// const Title = function () {
//   return (
//     <h1>Olá Leonardo</h1>
//   )
// }

// Função pura com ECScript6(arrow function)
// const Title = () => {
//   return (
//     <h1>Olá Leonardo</h1>
//   )
// }

// const Title = () => <h1>Olá Leonardo</h1>

// OR

// const Title = (props) => (
//   <h1>Olá {props.name + ' ' + props.lastname}</h1>
// )

// const Title = (props) => (
//   <h1>Olá {`${props.name} ${props.lastname}`}</h1>
// )

const Title = ({name, lastname}) => (
  <h1>Olá {`${name} ${lastname}!`}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Sem sobrenome'
}

// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       lastname: 'Sem sobrenome'
//     }
//   },
//   render: function () {
//     return <h1> Olá {this.props.name + ' ' + this.props.lastname}!</h1>
//   }
// })

export default Title
