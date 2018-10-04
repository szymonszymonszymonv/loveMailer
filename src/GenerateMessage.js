import React, { Component } from 'react'

// const ListItem = ({ value, onClick }) => (
//   <li onClick={onClick}>{value}</li>
// )
// const List = ({ items, onItemClick }) => (
//   <ul>
//     {
//       items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
//     }
//   </ul>
// )

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
      <div className='box'>
        <p>your messages</p>
        <ul>
          {messages.map(function (i) { return <li key={i}>{i}</li> })}
        </ul>
        <button type='button' onClick={this.handleClick} value={this.props.message}>hej</button>
      </div>
    )
  }
}

export default GenerateMessage
