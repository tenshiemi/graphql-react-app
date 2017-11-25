import React from 'react';
import { Link } from 'react-router-dom';

const Collection = ({ collection }) => (
  <div className="Collection">
    <Link to={`/new/${collection.id}`}>{collection.name}</Link>
  </div>
);

export default Collection;
