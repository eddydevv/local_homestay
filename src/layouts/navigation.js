import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'
import { Link } from 'react-router'

export default class Navigation extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.renderMain = this.renderMain.bind(this)
    this.renderOther = this.renderOther.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    }) 
  }

  renderMain() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Local Homestay</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">SAFETY</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">FAQs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">CONTACT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }

  renderOther() {
    return(
      <div></div>
    )
  }

  render() {
    return(
      <div>{this.props.hasNav ? this.renderMain() : this.renderOther()}</div>
    )
  }
}