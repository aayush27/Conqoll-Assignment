import React, { Component } from 'react';
import '../Styles/App.css';
import * as constants from '../util/constants';

export default class Main extends Component {

  state = {
    projectName: 'BizAnalytics',
    isEdit: false,
    tasks: [{
      id: 1,
      description: 'Create login page',
      status: constants.STATUS.DONE,
    }, {
      id: 2,
      description: 'Store encrypted passwords',
      status: constants.STATUS.NOT_STARTED,
    }, {
      id: 3,
      description: 'Design database tables for User model',
      status: constants.STATUS.IN_PROGRESS,
    }]
  };

  handleDropdownChange = (event, selectedTask) => {
    let newTasks = [...this.state.tasks];
    this.state.tasks.map((task, index) => {
      if (task.id === selectedTask.id) {
        selectedTask.status = event.target.value;
        newTasks[index] = selectedTask;
        this.setState({
          tasks: newTasks
        });
      }
    })
  }

  renderTasksList = () => {
    return (
      this.state.tasks.map((task, index) => {
        let assignedClass = "";
        if (task.status === constants.STATUS.NOT_STARTED) {
           assignedClass = "not-started";
        } else if (task.status === constants.STATUS.IN_PROGRESS) {
          assignedClass = "in-progress";
        } else {
          assignedClass = "done";
        }
        return (
          <tr key={index} className={`text-left ${assignedClass}`}>
            <td>{task.id}</td>
            <td>{task.description}</td>
            <td>
              <select value={task.status} onChange={(event) => this.handleDropdownChange(event, task)}>
                <option value={constants.STATUS.NOT_STARTED}>Not Started</option>
                <option value={constants.STATUS.IN_PROGRESS}>In Progress</option>
                <option value={constants.STATUS.DONE}>Done</option>
              </select>
            </td>
          </tr>
        )
      })
    )
  }

  handleChange = (name) => {
    this.setState({
      projectName: name
    })
  };

  setButtonState = () => {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }

  render = () => {
    return (
      <div>
        <div className="row mx-0">
          <div className="col-12 px-0">
            <div className="App">
              <p className="text-left px-2 mt-3"> Issue tracker for&nbsp;
                {this.state.isEdit ?
                  <input
                    value={this.state.projectName}
                    type="text"
                    onChange={(event) => this.handleChange(event.target.value)}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  /> :
                  <b>{this.state.projectName}</b>
                }
                <button onClick={this.setButtonState} className="ml-2 btn btn-primary">
                  {this.state.isEdit ? "Done" : "Edit"}
                </button>
              </p>
              <div>
                <table className="table table-bordered">
                  <thead>
                    <tr className="text-left table-header">
                      <td style={{ width: "10%" }}>ID</td>
                      <td style={{ width: "70%" }}>Description</td>
                      <td style={{ width: "20%" }}>Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderTasksList()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}