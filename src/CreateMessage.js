import React, { Component } from 'react'

class CreateMessage extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.onMessageChange(e.target.value)
  }

  render () {
    const message = this.props.message
    return (
      <div className='box'>
        <p>create a message!</p>
        <textarea rows='10' cols='50' value={ message } onChange={ this.handleChange }></textarea>
        <br></br>
      </div>
    )
  }
}

export default CreateMessage
