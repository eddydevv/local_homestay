import React, { Component } from 'react'
import Home from './home'
import About from './about'
import Safety from './safety'
import FAQs from './faqs'
import Contact from './contact'
import Navigation from '../../layouts/navigation'
import Header from '../../layouts/header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class Base extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasNav: true,
      title: ''
    }
  }

  render() {
    return(
      <Router>
        <div>
          <Navigation hasNav={this.state.hasNav} />
          <Header title={this.state.title} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" render={props => (
              <About title="About" />
            )} />
            <Route exact path="/safety" component={Safety} />
            <Route exact path="/faqs" component={FAQs} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    )
  }
}