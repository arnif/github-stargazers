var ActionTypes = require('../Constants').ActionTypes;
var AppDispatcher = require('../AppDispatcher');

var ServerActionCreators = {
  didGetStarredRepos: function (repos) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.GET_STARRED_SUCCESS,
      repos: repos
    });
  },
};

module.exports = ServerActionCreators;
