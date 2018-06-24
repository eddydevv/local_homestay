import React, { Component } from 'react'
import Home from './components/base/home'
import Navigation from './layouts/navigation'
import Header from './layouts/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
