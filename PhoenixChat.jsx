import React from 'react'
import style from './style.js'

export class PhoenixChat extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        onClick={this.props.toggleChat}
        style={ style.chatButton }>
        XXX
      </div>
    )
  }
}

export default PhoenixChat
