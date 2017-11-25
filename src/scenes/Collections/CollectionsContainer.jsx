import React from 'react';
import Collection from './Collection';
import getCollection from '../../utils/getCollections';
import './Collections.css';

class CollectionsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: []
    };
  }

  componentDidMount() {
    fetch('http://40.87.67.195/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(getCollection())
    })
      .then(result => result.json())
      .then(json => {
        this.setState({
          collections: json.data.collections
        });
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Collections</h1>
        {this.state.collections.map(collection => (
          <Collection collection={collection} key={collection.id} />
        ))}
      </div>
    );
  }
}

export default CollectionsContainer;
