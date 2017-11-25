/**
 * Create the request body to retrieve a project
 * @param  {Object} args an object to pick arguments from
 * @return {Object}      the request body
 */
function getProject(args) {
  return {
    query: [
      'query project($id: String!) {',
      '  project(id: $id) {',
      '    id',
      '    name',
      '    description',
      '    collectionId',
      '    createdAt',
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
  module.exports = getProject;
}
