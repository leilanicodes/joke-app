import React from 'react';
import { Button } from '@material-ui/core';

export default class JokeButton extends React.Component {
  render() {
    return (
      <Button variant="contained" color="primary">
        Next Joke
      </Button>
    );
  }
}
