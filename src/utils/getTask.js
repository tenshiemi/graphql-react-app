/**
 * Create the request body to retrieve a task
 * @param  {Object} args an object to pick arguments from
 * @return {Object}      the request body
 */
function getTask(args) {
  return {
    query: [
      'query task($id: String!) {',
      '  task(id: $id) {',
      '    id',
      '    name',
      '    description',
      '    type',
      '    dueDate',
      '    createdAt',
      '    projectId',
      '    project {',
      '      id',
      '      name',
      '      description',
      '      createdAt',
      '      collectionId',
      '      collection {',
      '        id',
      '        name',
      '      }',
      '    }',
      '  }',
      '}'
    ].join(''),
    variables: { id: args.id }
  };
}

if (typeof module !== 'undefined') {
  module.exports = getTask;
}
