import React, { Component } from 'react'
import './GenerateMessage.css'

class GenerateMessage extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (message) {
    this.props.onClick(message)
  }

  render () {
    let messages = this.props.messages
    return (
      <div className='boxWithButton'>
        <div className='generateBox'>
          <p>your messages</p>
          <ul>
            {messages.map(function (i) { return <li key={i}>{i}</li> })}
          </ul>
        </div>
        <button className='addMessage' type='button' onClick={this.handleClick} value={this.props.message}>add</button>
      </div>
    )
  }
}

export default GenerateMessage
