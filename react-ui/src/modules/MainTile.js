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
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(fetchedMessages => {
        this.setState({
          displayedMessage: fetchedMessages[Math.floor(Math.random() * fetchedMessages.length)]
        });
      }).catch(e => {
        this.setState({
          displayedMessage: `API call failed: ${e}`
        });
      })
	}

	render() {
		if (this.state.displayedMessage === null) {
			return (
				<div className="Tile">
					<div className="MainTile">
						<div className="Title">
							<h1>For Ann Marie Schoenbaum</h1>
							<hr width="50%"/>
							<p>Loading message...</p>
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
