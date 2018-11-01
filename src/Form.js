import React, { Component } from 'react'
import './Form.css'
class Form extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.props.onChange(e.target.name, e.target.value)
  }
  render () {
    return (
      <form>
        email
        <input type="text" name="email" onChange={this.handleChange} value={this.props.email}/>
        <br />
        password
        <input type="password" name="password" onChange={this.handleChange} value={this.props.password}/>
        <br />
        target
        <input type="text" name="target_email" onChange={this.handleChange} value={this.props.target_email}/>
        <br />
        subject
        <input type="text" name="subject" onChange={this.handleChange} value={this.props.subject}/>
      </form>)
  }
}
export default Form
