/**
 * Create the request body to retrieve all the tasks in a project
 * @param  {Object} args an object to pick arguments from
 * @return {Object}     the request body
 */
function getTasks(args) {
  return {
    query: [
      'query tasks($id: String!) {',
      '  tasks(projectId: $id) {',
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
  module.exports = getTasks;
}
