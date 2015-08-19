var AppDispatcher = require('../AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../Constants').ActionTypes;
var assign = require('react/lib/Object.assign');

var events = new EventEmitter();
var CHANGE_EVENT = 'CHANGE';

var state = {
  userName: '',
  loading:false,
  starredRepos: [],
  pageNr: 1
};

function setState(newState) {
  assign(state, newState);
  events.emit(CHANGE_EVENT);
}

var GithubStore = {
  addChangeListener: function (fn) {
    events.addListener(CHANGE_EVENT, fn);
  },

  removeChangeListener: function (fn) {
    events.removeListener(CHANGE_EVENT, fn);
  },


  getState: function () {
    return state;
  }
};

GithubStore.dispatchToken = AppDispatcher.register(function (payload) {
  var { action } = payload;

  if (action.type === ActionTypes.GET_STARRED) {
    setState({
      userName: action.userName,
      loading: true,
      pageNr: action.pageNr
    });
  } else if (action.type === ActionTypes.GET_STARRED_SUCCESS) {
    setState({
      loading: false,
      starredRepos: action.repos
    })
  }
});

module.exports = GithubStore;
