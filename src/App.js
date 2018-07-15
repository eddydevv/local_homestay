import React, { Component } from 'react'
import Landing from './components/home/landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Base from './components/base/base'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Base} />
            <Route exact path="/landing" component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
