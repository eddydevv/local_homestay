import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

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
    const pages = ['about', 'safety', 'faqs', 'contact']
    const navLinks = pages.map(page => {
      return (
        <NavItem>
          <NavLink href="#"><Link to={'/' + page}>{page.toUpperCase()}</Link></NavLink>
        </NavItem>
      )
    })

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/landing">Local Homestay</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navLinks}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }

  renderOther() {
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

  render() {
    return(
      <div>{this.props.hasNav ? this.renderMain() : this.renderOther()}</div>
    )
  }
}