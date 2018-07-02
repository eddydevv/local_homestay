import React, { Component } from 'react'
import Home from './components/base/home'
import About from './components/base/about'
import Safety from './components/base/safety'
import FAQs from './components/base/faqs'
import Contact from './components/base/contact'
import Navigation from './layouts/navigation'
import Header from './layouts/header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasNav: true,
      title: ''
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation hasNav={this.state.hasNav} />
          <Header title={this.state.title} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" render={props => (
              <About />
            )} />
            <Route exact path="/safety" component={Safety} />
            <Route exact path="/faqs" component={FAQs} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
