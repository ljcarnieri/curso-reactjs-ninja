'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'
import Timer from './timer'

class App extends Component {
  constructor () {
    console.log('constructor app')
    super()
    this.state = {
      time: 0,
      color: 'green',
      showTimer: true
    }
  }

  componentWillMount () {
    console.log('componentWillMount app')
  }

  componentDidMount () {
    console.log('componentDidMount app')
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate app', this.props, prevProps)
  }

  render () {
    console.log('render app')
    return (
      <div>
        <Square color={this.state.color} />
        {['red', 'green', 'blue'].map((color) => (
          <Button
            key={color}
            handlerClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))}

        {this.state.showTimer && <Timer time={this.state.time} />}

        <Button handlerClick={() => (
          this.setState({ showTimer: !this.state.showTimer })
        )}>
          Show / hide timer
        </Button>

        <Button handlerClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>
          Change props
        </Button>
      </div>
    )
  }
}

export default App
