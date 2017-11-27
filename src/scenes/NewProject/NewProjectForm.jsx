import React from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import createProject from '../../utils/createProject';
import './NewProjectForm.css';

class NewProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      name: '',
      showTasks: false,
      tasks: []
    };
  }

  deleteTask = event => {
    event.preventDefault();

    const taskIndex = event.target.getAttribute('data-index');

    this.setState({
      tasks: this.state.tasks
        .slice(0, taskIndex)
        .concat(this.state.tasks.slice(taskIndex + 1))
    });
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'name' && !value) {
      this.nameInput.setCustomValidity('Your project must have a name.');
    } else {
      this.nameInput.setCustomValidity('');
    }

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const query = createProject({
      name: this.state.name,
      description: this.state.description,
      collectionId: this.props.id,
      tasks: this.state.tasks
    });

    fetch('http://40.87.67.195/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query)
    })
      .then(result => result.json())
      .then(json => {
        this.props.history.push('/');
      });
  };

  handleTaskSubmit = newTask => {
    this.setState({
      showTasks: !this.state.showTasks,
      tasks: [...this.state.tasks, newTask]
    });
  };

  toggleTaskView = event => {
    event.preventDefault();

    this.setState({
      showTasks: !this.state.showTasks
    });
  };

  render() {
    return (
      <div>
        <h2>Fill out your project details</h2>
        <form id="projectForm" onSubmit={this.handleSubmit}>
          <label>
            <p className="Label">Name</p>
            <input
              className="TextInput"
              name="name"
              onChange={this.handleChange}
              placeholder="Give your project a name"
              ref={input => {
                this.nameInput = input;
              }}
              required
              type="text"
              value={this.state.name}
            />
          </label>
          <label>
            <p className="Label">Description (optional)</p>
            <textarea
              className="TextArea"
              onChange={this.handleChange}
              placeholder="Add details about your project"
              name="description"
              type="textarea"
              value={this.state.description}
            />
          </label>
        </form>
        <h2>Add tasks to your project</h2>
        {this.state.tasks.length > 0
          ? this.state.tasks.map((taskItem, index) => (
              <TaskItem
                deleteTask={this.deleteTask}
                index={index}
                key={index}
                task={taskItem}
              />
            ))
          : null}
        {this.state.showTasks ? (
          <TaskForm
            handleTaskSubmit={this.handleTaskSubmit}
            toggleTaskView={this.toggleTaskView}
          />
        ) : (
          <button
            className="AddTaskButton"
            onClick={this.toggleTaskView}
            type="button"
          >
            ADD TASK
          </button>
        )}
        <input
          className="SubmitButton"
          form="projectForm"
          name="submit"
          onSubmit={this.handleSubmit}
          type="submit"
          value="CREATE PROJECT"
        />
        <a className="Cancel" onClick={this.props.toggleTaskView}>
          cancel
        </a>
      </div>
    );
  }
}

export default NewProjectForm;
