import React, { Component } from 'react';
import './modules.css';

class Games extends Component {
	render() {
		return (
      <div className="GamesTile">
        <div className="TileTitle">Games</div>
        <hr />
        <div>
          <div className="MiniTileLeft">
            <a href="#">Connect 4</a>
          </div>
          <div className="MiniTileRight">
            <a href="#">Checkers</a>
          </div>
        </div>
      </div>
		)
	}
}


export default Games;
