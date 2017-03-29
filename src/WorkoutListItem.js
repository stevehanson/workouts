import React, { Component } from 'react';
import moment from 'moment';

class WorkoutListItem extends Component {
  render() {
    let workout = this.props.workout;
    let notes = '';
    if(workout.notes) {
      notes = (
        <div className="Workout-notes">{workout.notes}</div>
      );
    }

    return (
      <li className="WorkoutListItem">
        <div>
          <div className="label-muted">Workout Logged</div>
          <span className="Workout-date">{moment(workout.date).calendar()}</span>

          {notes}
        </div>
      </li>
    );
  }
}

export default WorkoutListItem;
