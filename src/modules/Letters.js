import React, { Component } from 'react';
import './modules.css';

import letterjson from './letters.json';


class Letters extends Component {
  constructor(props) {
    super(props);
    this.state={
      filterStr: ""
    }
  }

	render() {
    const { filterStr } = this.state;

    const filteredElements = letterjson.letters
      .filter(e => e.name.toLowerCase().includes(filterStr))
      .map(e => <li key={e.name}><a href={e.href}>{ e.name }</a></li>)

		return (
      <div className="LettersTile">
        <div className="TileTitle">Letters</div>
        <hr />
        <div>
          <input
            type="text"
            value={ filterStr }
            onChange={ e => this.setState({ filterStr: e.target.value.toLowerCase() }) }
            placeholder="How do you feel right now?"
            size="30"/>
          <div className="LettersTable"><ul>
            {filteredElements}
          </ul></div>
        </div>
      </div>
		)
	}
}


export default Letters;
