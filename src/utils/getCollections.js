/**
 * Create the request body to retrieve all collections
 * @return {Object}      the request body
 */
function getCollection() {
  return {
    query: [
      'query collections {',
      '  collections {',
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
    variables: {}
  };
}

if (typeof module !== 'undefined') {
  module.exports = getCollection;
}
