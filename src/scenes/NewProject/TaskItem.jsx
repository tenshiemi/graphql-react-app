import React from 'react';

const TaskItem = ({ deleteTask, index, task }) => (
  <div className="TaskItem">
    {task.name}
    <a className="DeleteTask" data-index={index} onClick={deleteTask}>
      delete
    </a>
  </div>
);

export default TaskItem;
