import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'


export default class Home extends Component {
  constructor(props) {
    super(props)

    this.topNav = this.topNav.bind(this)
    this.landingDisplay = this.landingDisplay.bind(this)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      hasNav: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    }) 
  }

  topNav() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Local Homestay</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">LOGIN</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
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
        {this.topNav()}
        {this.landingDisplay()}
      </div>
    )
  }
}