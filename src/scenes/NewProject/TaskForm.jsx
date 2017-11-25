import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      dueDate: '',
      name: '',
      type: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    event.preventDefault();

    this.props.handleTaskSubmit(this.state);
  }

  render() {
    const contentClasses =
      this.state.type === 'CONTENT' ? 'RadioInput RadioSelected' : 'RadioInput';
    const todoClasses =
      this.state.type === 'TODO' ? 'RadioInput RadioSelected' : 'RadioInput';

    return (
      <div className="TaskForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            <p className="Label">Name</p>
            <input
              className="TextInput"
              name="name"
              onChange={this.handleChange}
              placeholder="Give your task a name"
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
              placeholder="Add details about your task"
              name="description"
              type="textarea"
              value={this.state.description}
            />
          </label>
          <label>
            <p className="Label">Due date (optional)</p>
            <input
              className="TextInput"
              name="dueDate"
              onChange={this.handleChange}
              placeholder="mm/dd/yyyy"
              type="date"
              value={this.state.date}
            />
          </label>
          <div className="group">
            <label>
              <p className="Label">Task type</p>
              <label htmlFor="content">
                <span className={contentClasses}>CONTENT</span>
              </label>
              <input
                id="content"
                name="type"
                onChange={this.handleChange}
                required
                type="radio"
                value="CONTENT"
              />
              <label htmlFor="todo">
                <span className={todoClasses}>TO-DO</span>
              </label>
              <input
                id="todo"
                name="type"
                onChange={this.handleChange}
                required
                type="radio"
                value="TODO"
              />
            </label>
          </div>
          <div className="group">
            <div className="TaskActions">
              <a className="CancelTask" onClick={this.props.toggleTaskView}>
                cancel
              </a>
              <input className="SaveTaskButton" type="submit" value="SAVE" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskForm;
