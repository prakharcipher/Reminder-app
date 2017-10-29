import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, addStar } from '../actions';
import { StarBorder, Star } from 'material-ui-icons';
import moment from 'moment';
import AppBar from 'material-ui/AppBar';
import Navbar from './Navbar';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: '',
      open: false,
      alert: false,
      star: false
    }
  }


  addStar() {
    this.props.addStar(this.state.star);
  }

  addReminder() {
    if (this.state.text !== '') {
      console.log('this.state.dueDate', this.state.dueDate);
      this.props.addReminder(this.state.text, this.state.dueDate);
    } else {

    }
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <div>
                <li key={reminder.id} className="list-group-item">
                  <div className="list-item">
                    <div>{reminder.text}</div>
                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                  </div>
                  <div
                    className="list-item delete-button"
                    onClick={() => this.deleteReminder(reminder.id)}
                  >
                    &#x2715;
                  </div>
                  <div
                    onClick={() => {this.setState({star: !this.state.star})
                                   this.addStar()}
                  }
                  >
                    {
                      (reminder.star === true) ?
                        <Star />
                        :
                        <StarBorder />

                    }
                  </div>
                </li>
              </div>
            )
          })
        }
      </ul>
    )
  }


  render() {
    return (
      <div className="front">
        <div className="app-bar">
          <AppBar
            className="app-bar"
            title="Reminder Pro"
            onLeftIconButtonTouchTap={() => {
              this.setState({open: !this.state.open});
            }}
          />
          <Dialog
            actions={
              <RaisedButton
                label="OK"
                secondary={true}
                onClick={() => {
                  this.setState({alert: false});
                }}
              />
            }
            open={this.state.alert}
            contentStyle={{
              textAlign: 'center'
            }}
          >
            PLEASE ADD A REMINDER
          </Dialog>
        </div>
        <div className="App">
          <div className="title">
            Reminder Pro
          </div>
          <div className="form-inline reminder-form">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="I have to..."
                ref="item"
                onChange={event => this.setState({text: event.target.value})}
                onKeyPress={event => {
                    if(event.key === 'Enter') {
                      if(this.state.text === '') {
                        this.setState({alert: true})
                      } else {
                        this.addReminder()
                      }
                    }
                  }}
              />
              <input
                className="form-control"
                type="datetime-local"
                onChange={event => this.setState({dueDate: event.target.value})}
              />
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.addReminder()}
            >
              Add Reminder
            </button>
          </div>
            { this.renderReminders() }
        </div>
        <Navbar
          open={this.state.open}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, addStar })(App);
