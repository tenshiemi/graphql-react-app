import React from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
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

    this.deleteTask = this.deleteTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.toggleTaskView = this.toggleTaskView.bind(this);
  }

  deleteTask(event) {
    event.preventDefault();

    const taskIndex = event.target.getAttribute('data-index');

    this.setState({
      tasks: this.state.tasks
        .slice(0, taskIndex)
        .concat(this.state.tasks.slice(taskIndex + 1))
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleTaskSubmit(newTask) {
    this.setState({
      showTasks: !this.state.showTasks,
      tasks: [...this.state.tasks, newTask]
    });
  }

  toggleTaskView(event) {
    event.preventDefault();

    this.setState({
      showTasks: !this.state.showTasks
    });
  }

  render() {
    return (
      <div>
        <h2>Fill out your project details</h2>
        <form>
          <label>
            <p className="Label">Name</p>
            <input
              className="TextInput"
              name="name"
              onChange={this.handleChange}
              placeholder="Give your project a name"
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
          onSubmit={this.handleSubmit}
          type="submit"
          value="CREATE PROJECT"
        />
      </div>
    );
  }
}

export default NewProjectForm;
