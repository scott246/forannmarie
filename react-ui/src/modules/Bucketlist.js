import React, { Component } from 'react';
import './modules.css';

class BucketList extends Component {
	render() {
		return (
      <div className="BLTile">
        <div className="TileTitle">Bucket List</div>
        <hr />
        <div>
          <a href="https://docs.google.com/document/d/1myAj1he3qKyLNEDrPyS2v00murScvBoiZirm6AEHicU/edit?usp=sharing">
          Ann Marie and Nathan{'\''}s Bucket List
          </a>
        </div>
      </div>
		)
	}
}


export default BucketList;
