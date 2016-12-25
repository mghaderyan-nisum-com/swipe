import React, {Component} from 'react';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/1896935_10151992171876313_1186610505_n.jpg?oh=97625325fdda01e2b316bc8b0dbe6fc4&oe=58F0DAC3"/>
        <div>
          <button className="nope">Nope</button>
          <button className="yes">Yes!</button>
        </div>
      </div>
    );
  }
}
