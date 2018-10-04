import React, { Component } from 'react'
import CreateMessage from './CreateMessage'
import GenerateMessage from './GenerateMessage'
class Message extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '',
      messages: []
    }
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
  }
  handleMessageChange (message) {
    this.setState({
      message: message
    })
  }
  handleAddClick () {
    let messages = this.state.messages
    messages.push(this.state.message)
    this.setState({ messages })
  }
  render () {
    return (<div><CreateMessage
      onMessageChange = {this.handleMessageChange}
      message = {this.state.message}
    />
    <GenerateMessage messages={this.state.messages} onClick={this.handleAddClick} value = {this.state.message}/>
    </div>
    )
  }
}

export default Message
