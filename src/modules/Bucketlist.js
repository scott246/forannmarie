import React, { Component } from 'react';
import './modules.css';

class BucketList extends Component {
  constructor(props) {
    super(props);
    this.state={
      filterStr: ""
    }
  }

	render() {
		return (
      <div className="BLTile">
        <div className="TileTitle">Bucket List</div>
        <hr />
        <div>
          <a href="https://docs.google.com/document/d/1myAj1he3qKyLNEDrPyS2v00murScvBoiZirm6AEHicU/edit?usp=sharing">
          Ann Marie and Nathans Bucket List
          </a>
        </div>
      </div>
		)
	}
}


export default BucketList;
