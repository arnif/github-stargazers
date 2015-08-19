var keyMirror = require('react/lib/keyMirror');

module.exports = {
  //API: 'http://localhost:3000',
  PER_PAGE: 30,

  ActionTypes: keyMirror({
    GET_STARRED: null,
    GET_STARRED_SUCCESS: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
