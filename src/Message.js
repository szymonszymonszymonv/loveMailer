import React, { Component } from 'react'
import CreateMessage from './CreateMessage'
import GenerateMessage from './GenerateMessage'
import './Message.css'
class Message extends Component {
  constructor (props) {
    super(props)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDelClick = this.handleDelClick.bind(this)
  }

  handleMessageChange (message) {
    this.props.onMessageChange(message)
  }

  handleAddClick (message) {
    this.props.onAddClick(message)
  }

  handleDelClick (i, e) {
    this.props.onDelClick(i, e)
  }
  render () {
    var message = this.props.message
    return (<div className='message'><CreateMessage
      onMessageChange = {this.handleMessageChange}
      message = {message}
    />
    <GenerateMessage messages={this.props.messages} onClick={this.handleAddClick} onDelClick={this.handleDelClick}/>
    </div>
    )
  }
}

export default Message
