import React from 'react'
import style from './style.js'

export class PhoenixChatButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        onClick={ this.props.toggleChat }
        style={ style.chatButton }>
        <img
          src="https://github.com/LearnPhoenix/graphics/blob/master/phoenix-chat-icon.png?raw=true"
          style={ style.chatImage } />
      </div>
    )
  }
}

export class PhoenixChatSidebar extends React.Component {
  constructor(props) {
    super(props)
    this.closeChat = this.closeChat.bind(this)
    this.state = {
      chat: [
        {name: "Client", content: "Test"},
        {name: "John", content: "Foo"},
        {name: "Client", content: "Bar"}
      ]
    }
  }

  closeChat() {
    this.props.toggleChat()
  }

  render() {
    let list = this.state.chat.map(function(bubble) {
      return (
        <div style={ bubble.name === "Client" ? style.chatRight : style.chatLeft }>
          { bubble.content }
        </div>
      )
    })

    return (
      <div style={ style.client }>
        <div style={ style.header }>
          PhoenixChat
          <div onClick={ this.closeChat }>
            Close
          </div>
        </div>

        <div style={ style.chatContainer }>
          { list }
        </div>

        <div style={ style.inputContainer }>
          <input
            type="text"
            style={ style.inputBox } />
          <div>
            100% free by <a href="learnphoenix.io">PhoenixChat</a>
          </div>
        </div>
      </div>
    )
  }
}

export class PhoenixChat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleChat = this.toggleChat.bind(this)
  }

  toggleChat() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div>
        { this.state.isOpen
          ? <PhoenixChatSidebar toggleChat={this.toggleChat} />
          : <PhoenixChatButton toggleChat={this.toggleChat} /> }
      </div>
    )
  }
}

export default PhoenixChat
