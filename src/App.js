import React, { Component } from 'react';
import WorkoutInput from './WorkoutInput.js';
import WorkoutsList from './WorkoutsList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="App-title">Workouts Log</h2>

        <WorkoutInput />

        <div className="divider" />
        <WorkoutsList />
      </div>
    );
  }
}

export default App;
