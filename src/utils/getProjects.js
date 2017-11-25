/**
 * Create the request body to retrieve all the projects in a collection
 * @param  {Object} args an object to pick arguments from
 * @return {Object}     the request body
 */
function getProjects(args) {
  return {
    query: [
      'query projects($id: String!) {',
      '  projects(collectionId: $id) {',
      '    id',
      '    name',
      '    description',
      '    createdAt',
      '    collectionId',
      '    collection {',
      '      id',
      '      name',
      '    }',
      '    tasks {',
      '      id',
      '      name',
      '      description',
      '      type',
      '      dueDate',
      '      createdAt',
      '      projectId',
      '    }',
      '  }',
      '}'
    ].join(''),
    variables: { id: args.id }
  };
}

if (typeof module !== 'undefined') {
  module.exports = getProjects;
}
