import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      main: true
    }
  }
    
  mainfunc() {
    this.setState({
      main: !this.state.main
    })
  }
  mainHeader() {
    return (
      <header className="main-header">
        <h1>{this.props.title}</h1>
      </header>
    )
  }

  altHeader() {
    return (
      <header className="main-header">
        <h1>{this.props.title}</h1>
      </header>
    )
  }

  render () {
    return (
      this.state.main ? this.mainHeader() : this.altHeader()
    )
  }
}