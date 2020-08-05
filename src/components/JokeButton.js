import React from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';

export default class JokeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="button-wrapper">
        <Button
          variant="contained"
          color="primary"
          onClick={this.props.handleClick}
        >
          Next Joke
        </Button>
      </div>
    );
  }
}
