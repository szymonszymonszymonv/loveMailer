import React, { Component } from 'react'
import './App.css'
import Message from './Message'
import Form from './Form'
import axios from 'axios'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {
        email: '',
        password: '',
        target_email: '',
        subject: ''
      },
      message: '',
      messages: []
    }
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDelClick = this.handleDelClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }
  handleFormChange (name, value) {
    this.setState(prevState => ({
      form: { ...prevState.form,
        [name]: value }
    }))
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
  handleSubmit (e) {
    e.preventDefault()
    let data = this.state
    console.log(data)
    axios.post('/', data)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (<div>
      <Form onChange={this.handleFormChange} props={this.state.form}/>
      <Message messages={this.state.messages} message={this.state.message} onMessageChange={this.handleMessageChange} onAddClick={this.handleAddClick} onDelClick={this.handleDelClick}/>
      <form method='POST' onSubmit={this.handleSubmit}><button type='submit'>submit</button></form>
    </div>)
  }
}

export default App
