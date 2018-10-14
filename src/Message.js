import React, { Component } from 'react'
import CreateMessage from './CreateMessage'
import GenerateMessage from './GenerateMessage'
import './Message.css'
class Message extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '',
      messages: []
    }
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDelClick = this.handleDelClick.bind(this)
  }

  handleMessageChange (message) {
    this.setState({
      message: message
    })
  }

  handleAddClick () {
    let messages = this.state.messages
    if (messages.indexOf(this.state.message) < 0) {
      messages.push(this.state.message)
      this.setState({ messages })
    } else {
      window.alert('przestan')
    }
    console.log(this.state)
  }

  handleDelClick (i, e) {
    let messages = this.state.messages
    let index = messages.indexOf(i)
    messages.splice(index, 1)
    this.setState({ messages })
  }

  render () {
    return (<div className='message'><CreateMessage
      onMessageChange = {this.handleMessageChange}
      message = {this.state.message}
    />
    <GenerateMessage messages={this.state.messages} onClick={this.handleAddClick} onDelClick={this.handleDelClick}/>
    </div>
    )
  }
}

export default Message
