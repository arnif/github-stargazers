var ActionTypes = require('../Constants').ActionTypes;
var AppDispatcher = require('../AppDispatcher');
var APIUtils = require('../utils/APIUtils');

var ViewActionCreators = {
  getStarredReposFromUser(userName, pageNr) {
      AppDispatcher.handleViewAction({
      type: ActionTypes.GET_STARRED,
      userName: userName,
      pageNr: pageNr
    });
    APIUtils.getStarredReposFromUser(userName, pageNr);
  }
};

module.exports = ViewActionCreators;
