import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.landingDisplay = this.landingDisplay.bind(this)
    this.state = {
      hasNav: false
    }
  }

  landingDisplay() {
    return(
      <section id="landing">
        <div id="landing-box">
          <h1 id="landing-header">Local Homestay</h1>
          <p id="landing-subheader">A peek into life abroad through foreign local residents</p>
        </div>
      </section>
    )
  }

  render() {
    return (
      <div className="homepage">
        {this.landingDisplay()}
      </div>
    )
  }
}