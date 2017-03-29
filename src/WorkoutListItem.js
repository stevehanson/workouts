import React, { Component } from 'react';
import moment from 'moment';

class WorkoutListItem extends Component {
  handleRemove() {
    this.props.workoutRemoved(this.props.workout)
  }

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

        <i className="close-icon material-icons" onClick={this.handleRemove.bind(this)}>close</i>
      </li>
    );
  }
}

export default WorkoutListItem;
