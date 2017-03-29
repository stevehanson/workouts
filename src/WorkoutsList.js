import React, { Component } from 'react';
import moment from 'moment';
import WorkoutListItem from './WorkoutListItem';
import { workoutsRef } from './firebase_refs';

class WorkoutsList extends Component {
  constructor() {
    super();
    this.state = { workouts: [], workoutsLoading: true };
  }

  staticComponentDidMount() {
    setTimeout(() => {
      let workouts = [
        { name: "A Workout", date: moment() },
        { name: "Another Workout", date: moment().subtract(2, 'days').subtract(9, 'hours'), notes: 'Moved up to 3x8 diamond push-ups.' }
      ]
      this.setState( { workouts, workoutsLoading: false });
    }, 300)
  }

  componentDidMount() {
    workoutsRef.on('value', snapshot => {
      const workouts = [];
      snapshot.forEach(workout => {
        workouts.push({ ...workout.val(), key: workout.key });
      });
      this.setState({ workouts, workoutsLoading: false });
    });
  }

  workoutRemoved(workout) {
    let update = {}
    console.log('removing workout ' + workout.key);
    update[workout.key] = null
    workoutsRef.update(update)
  }

  renderWorkouts() {
    const workouts = this.state.workouts;
    const sortedWorkouts = workouts.sort((a, b) => {
      return moment(a.date).isBefore(moment(b.date)) ? 1 : -1;
    });

    return sortedWorkouts.map((workout) => {
      return (<WorkoutListItem workout={workout} workoutRemoved={this.workoutRemoved} key={workout.date} />);
    });
  }

  render() {
    const { workouts, workoutsLoading } = this.state;
    let workoutsList;

    if (workoutsLoading) {
      workoutsList = (<div className="WorkoutList-empty">Loading...</div>);
    } else if (workouts.length) {
      workoutsList = (<ul className="WorkoutList-list">{this.renderWorkouts()}</ul>);
    } else {
      workoutsList = (<div className="WorkoutList-empty">No Workouts</div>);
    }

    return (
      <div className="WorkoutList">
        {workoutsList}
      </div>
    );
  }
}

export default WorkoutsList;
