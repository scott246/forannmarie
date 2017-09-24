import React, { Component } from 'react';
import './App.css';
import message from './messages.json';

class MainTile extends Component {
	render() {
		return (
			<div className="MainTile">
				<div className="Title">
					<h1>For Ann Marie Schoenbaum</h1>
					<hr width="50%"/>
					<p>{message.messages[Math.floor(Math.random() * message.messages.length)]}</p>
				</div>
			</div>
		)
	}
}


export default MainTile;