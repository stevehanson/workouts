import React, { Component } from 'react';
import moment from 'moment';

import { workoutsRef } from './firebase_refs';

class WorkoutInput extends Component {
  constructor() {
    super();
    this.state = this.blankState();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newWorkout = {
      date: this.state.date.hour(moment().hour()).format(),
      notes: this.state.notes,
    };

    workoutsRef.push(newWorkout);
    this.setState(this.blankState());
  }

  blankState() {
    return { date: moment(), notes: '' };
  }

  render() {
    return (
      <div className="WorkoutInput">
        <form onSubmit={this.handleSubmit} className="WorkoutInput-form">
          <div className="form-group">
            <label className="label-muted">Workout Date</label>
            <input
              onChange={(evt) => this.setState({ date: moment(evt.target.value) })}
              value={this.state.date.format('YYYY-MM-DD')}
              type="date"
              required
            />
            <div className="WorkoutInput-day-of-week">{ this.state.date.isValid() ? this.state.date.format('ddd') : 'Choose Date' }</div>
          </div>

          <div className="form-group">
            <label className="label-muted">Notes (Optional)</label>
            <textarea
              onChange={(evt) => this.setState({ notes: evt.target.value })}
              value={this.state.notes}
              rows="2"
              placeholder="Enter notes..."
            />
          </div>

          <input type="submit" value="Log it!" className="button large primary WorkoutInput-submit" />
        </form>
      </div>
    );
  }
}

export default WorkoutInput;