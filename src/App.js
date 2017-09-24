import React, { Component } from 'react';
import MainTile from './MainTile.js';
import './App.css';
import appjson from './apps.json';

class Navbar extends Component {
  render() {
    return (
      <div className="Dropdown">
        <button className="Dropbtn"> All Apps </button>
        <div className="Dropdown-content">
        {
          appjson.apps.map((item) => {
            return <Row key={item.name} label={item.name} href={item.href} />
          })
        }
        </div>
      </div>
    )
  }
}

class Row extends Component {
  render() {
    return (
      <a href={this.props.href}>{this.props.label}</a>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Name">
            <h3>Annie{'\''}s List</h3>
          </div>
          <Navbar />
        </div>
        <MainTile />
        <p className="App-intro">
          "Made with {'<'}3 by Nathan Scott, 2017."
        </p>
      </div>
    );
  }
}

export default App;
