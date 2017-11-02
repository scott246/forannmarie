import React, { Component } from 'react';

/* imports for each Component */
import MainTile from './modules/MainTile.js';
import Countdown from './modules/Countdown.js';
import Letters from './modules/Letters.js';
import BucketList from './modules/Bucketlist.js';
import Photos from './modules/PhotoGallery.js';
import Distance from './modules/Distance.js';
import Calendar from './modules/Calendar.js';
import Games from './modules/Games.js';

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
          <h3 className="Name">Annie{'\''}s List</h3>
          {/* <Navbar /> */}
        </div>
        {/*add components to app*/}
        <MainTile />
        <Countdown />
        <Letters />
        <BucketList />
        <Photos />
        <Distance />
        {/* <Calendar /> */}
        <Games />
        <p className="App-intro">
          "Made with {'<'}3 by Nathan Scott, 2017."
        </p>
      </div>
    );
  }
}

export default App;
