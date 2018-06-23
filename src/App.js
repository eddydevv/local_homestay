import React, { Component } from 'react'
import Navigation from './layouts/navigation'
import Header from './layouts/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header title="About" />
      </div>
    );
  }
}

export default App;
