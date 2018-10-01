import React, { Component } from 'react'

class CreateMessage extends Component {
  render () {
    return (
      <div className='box'>
        <p>create a message!</p>
        <textarea rows='10' cols='50'></textarea>
        <button type='button'>send</button>
      </div>
    )
  }
}

export default CreateMessage
