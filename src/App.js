import React from 'react';
import logo from './logo.svg';
import JokeButton from './components/JokeButton';
import axios from 'axios';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      setup: '',
      punchline: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let jokeURL = 'https://official-joke-api.appspot.com/random_joke';
    axios
      .get(jokeURL)
      .then((result) => {
        console.log('result', result.data.setup);
        this.setState({ setup: result.data.setup });
        this.setState({ punchline: result.data.punchline });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <h1>Need a laugh today? Click the button below!</h1>
        <h2>{this.state.setup}</h2>
        <h2>{this.state.punchline}</h2>
        <JokeButton handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
