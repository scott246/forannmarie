import React, { Component } from 'react';
import './modules.css';

function CountdownOutput(props) {
  var totalSecs = props.totalSeconds;

  var days = Math.floor(totalSecs / 86400);
  totalSecs -= days * 86400;

  var hours = Math.floor(totalSecs / 3600) % 24;
  totalSecs -= hours * 3600;

  var minutes = Math.floor(totalSecs / 60) % 60;
  totalSecs -= minutes * 60;

  var seconds = totalSecs % 60;
  return <div>{days} days, {hours} hours, {minutes} minutes, {seconds} seconds left!</div>
}

class CountdownInput extends Component {
  constructor(props){
    super(props);
    this.state={
      year: 2017,
      month: 11,
      day: 4,
      hour: 23,
      minute: 59
    }

    this.handleChange = this.handleChange.bind(this);
    this.refreshTime = this.refreshTime.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  refreshTime = () => {

    this.props.callbackFromParent([
      this.state.year,
      this.state.month-1,
      this.state.day,
      this.state.hour,
      this.state.minute])
  }

  render() {
    return (
      <div>
        Time left until
        <input type="text" name="month" placeholder="11" size="4" onChange={this.handleChange}/>
        /
        <input type="text" name="day" placeholder="4" size="4" onChange={this.handleChange}/>
        /
        <input type="text" name="year" placeholder="2017" size="4" onChange={this.handleChange}/>
         at
        <input type="text" name="hour" placeholder="23" size="4" onChange={this.handleChange}/>
        :
        <input type="text" name="minute" placeholder="59" size="4" onChange={this.handleChange}/>
        <button onClick={this.refreshTime}>Refresh</button>
      </div>
    )
  }
}

class Countdown extends Component {
  constructor(props){
    super(props);
    this.state={
      year: 2017,
      month: 10,
      day: 4,
      hour: 23,
      minute: 59
    }
  }
  myCallback = (dataFromChild) => {
    this.setState({
      year: dataFromChild[0],
      month: dataFromChild[1],
      day: dataFromChild[2],
      hour: dataFromChild[3],
      minute: dataFromChild[4]
    })
  }
	render() {
    var today = new Date();
    var targetDate = new Date(
      this.state.year,
      this.state.month,
      this.state.day,
      this.state.hour,
      this.state.minute);

    var delta = Math.ceil((targetDate - today) / 1000);

		return (
			<div className="CountdownTile">
				<div className="TileTitle">Countdown</div>
        <hr />
        <CountdownInput callbackFromParent={this.myCallback}/>
        <CountdownOutput totalSeconds={delta} />
			</div>
		)
	}
}


export default Countdown;
