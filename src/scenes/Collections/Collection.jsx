import React from 'react';
import { Link } from 'react-router-dom';

const Collection = ({ collection }) => (
  <div className="Collection">
    {collection.name} <Link to={`/new/${collection.id}`}>New Project</Link>
  </div>
);

export default Collection;
