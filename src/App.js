import React, { Component } from 'react';
import WorkoutInput from './WorkoutInput.js';
import WorkoutsList from './WorkoutsList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="App-title">Workouts Log</h2>
        <a className="subtitle-link" href="https://www.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine" target="_blank">View the routine</a>

        <WorkoutInput />

        <div className="divider" />
        <WorkoutsList />
      </div>
    );
  }
}

export default App;
