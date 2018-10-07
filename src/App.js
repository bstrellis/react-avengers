import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={avengers: ['WickedBadDude', 'TuffNRuffChick', 'PoorlyConceivedSidekick']};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='http://4.bp.blogspot.com/-ORevk6C1vKQ/VNYpKOkFb4I/AAAAAAAAAPo/osCfQBYydEg/s1600/wolf.jpg' className="App-logo" alt="logo" />
          <p>
            Avengers: By Brandon
          </p>
          <CharacterList characters={this.state.avengers}/>
        </header>
      </div>
    );
  }
}

export default App;
