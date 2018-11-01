import React, { Component } from 'react'
import './GenerateMessage.css'

class GenerateMessage extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleDelClick = this.handleDelClick.bind(this)
    this.onDelClick = this.onClick
  }

  handleClick (message) {
    this.props.onClick(message)
  }

  handleDelClick (i, e) {
    this.props.onDelClick(i)
  }

  render () {
    let messages = this.props.messages
    return (
      <div className='boxWithButton'>
        <div className='generateBox'>
          <p>your messages</p>
          <ul>
            {
              messages.map((i) => { // function to display messages
                let boundItemClick = this.handleDelClick.bind(this, i)
                return (
                  <div className='messageValue animated fadeIn'>
                    <li key={i}>{i}</li><button className='delete' type='button' value={i} onClick={boundItemClick}><i className="fas fa-trash-alt"></i></button>
                  </div>)
              })
            }
          </ul>
        </div>
        <button className='addMessage' type='button' onClick={this.handleClick} >add</button>
      </div>
    )
  }
}

export default GenerateMessage
