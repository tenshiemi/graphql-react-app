import React from 'react';
import NewProjectForm from './NewProjectForm';

const NewProjectContainer = props => (
  <div className="container">
    <h1>Build a Project</h1>
    <NewProjectForm history={props.history} id={props.match.params.id} />
  </div>
);

export default NewProjectContainer;
