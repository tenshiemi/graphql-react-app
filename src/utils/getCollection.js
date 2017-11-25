/**
 * Create the request body to retrieve a collection
 * @param  {Object} args an object to pick arguments from
 * @return {Object}      the request body
 */
function getCollection(args) {
  return {
    query: [
      'query collection($id: String!) {',
      '  collection(id: $id) {',
      '    id',
      '    name',
      '    projects {',
      '      id',
      '      name',
      '      description',
      '      createdAt',
      '      collectionId',
      '      tasks {',
      '        id',
      '        name',
      '        description',
      '        type',
      '        dueDate',
      '        createdAt',
      '        projectId',
      '      }',
      '    }',
      '  }',
      '}'
    ].join(''),
    variables: { id: args.id }
  };
}

if (typeof module !== 'undefined') {
  module.exports = getCollection;
}
