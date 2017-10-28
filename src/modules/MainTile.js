import React, { Component } from 'react';
import '../App.css';

class MainTile extends Component {
	constructor(props) {
		super(props);
		this.state={
			displayedMessage: null
		}
	}

	componentWillMount = () => {
		this.getMessages();
	}

	getMessages = () => {
		fetch('/messages')
			.then(res => res.json())
			.then(fetchedMessages => this.setState({
				displayedMessage: JSON.parse(fetchedMessages)[Math.floor(Math.random() * JSON.parse(fetchedMessages).length)]
			}))
	}

	render() {
		console.log(this.state)
		if (this.state.displayedMessage === null) {
			return (
				<div className="Tile">
					<div className="MainTile">
						<div className="Title">
							<h1>For Ann Marie Schoenbaum</h1>
							<hr width="50%"/>
							<div>Loading message...</div>
						</div>
					</div>
				</div>
			)
		}
		return (
			<div className="Tile">
				<div className="MainTile">
					<div className="Title">
						<h1>For Ann Marie Schoenbaum</h1>
						<hr width="50%"/>
						<p>{this.state.displayedMessage.message}</p>
					</div>
				</div>
			</div>
		)
	}
}


export default MainTile;
