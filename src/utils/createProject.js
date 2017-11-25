/**
 * Get the request body for creating a project
 * @param  {Object} args an object we can pick arguments from
 * @return {Object}      the request body
 */
function createProject(args) {
  return {
    query: [
      'mutation($name: String!, $description: String!, $collectionId: String!, $tasks: [TaskInput]) {',
      '  project: createProject(',
      '    name: $name',
      '    description: $description',
      '    collectionId: $collectionId',
      '    tasks: $tasks',
      '  ) {',
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
    variables: {
      name: args.name,
      description: args.description,
      collectionId: args.collectionId,
      tasks: args.tasks
    }
  };
}

if (typeof module !== 'undefined') {
  module.exports = createProject;
}
