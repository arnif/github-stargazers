var React = require('react');
var ViewActionCreators = require('../actions/ViewActionCreators');
var GithubStore = require('../stores/GithubStore');
var { Link } = require('react-router');
var CONSTANTS = require('../Constants');

import './still.scss';

var Owner = React.createClass({

  getInitialState() {
    return GithubStore.getState();
  },

  componentDidMount() {
    GithubStore.addChangeListener(this._handleStoreChange);
    this.timeout = null;

  },

  componentWillUnmount() {
    GithubStore.removeChangeListener(this._handleStoreChange);
  },

  _handleStoreChange() {
    this.setState(GithubStore.getState());
  },

  _handleTextChange(event) {
    clearTimeout(this.timeout);
    console.log(event.target.value);
    var userName = event.target.value;
    this.timeout = setTimeout(() => {
      ViewActionCreators.getStarredReposFromUser(userName, 1);
    },400);

  },

  _getNext() {
    ViewActionCreators.getStarredReposFromUser(this.state.userName, this.state.pageNr + 1);
  },

  _getPrev() {
    ViewActionCreators.getStarredReposFromUser(this.state.userName, this.state.pageNr - 1);
  },

  render: function () {
    console.log(this.state);
    var listOfStarredRepos = this.state.starredRepos.map((repo) => {
      return (<li key={repo.id}> <span><i className="fa fa-code-fork"></i> {repo.forks} <i className="fa fa-star"></i> {repo.stargazers_count}</span> {repo.name}</li>);
    })
    return (
      <div>
        <input className="owner_inputbox" type="text" onChange={this._handleTextChange} />
        {(this.state.pageNr !== 1 || listOfStarredRepos.length === CONSTANTS.PER_PAGE) && (<div>{this.state.pageNr}</div>)}
        {this.state.pageNr > 1 && (<div><button onClick={this._getPrev}>Previous</button></div>)}
        {listOfStarredRepos.length > 0 && listOfStarredRepos.length === CONSTANTS.PER_PAGE && (<div><button onClick={this._getNext}>Next </button></div>)}
        {this.state.loading && (<span>Loading...</span>)}
        <ul>
          {listOfStarredRepos}
        </ul>
      </div>
      )
  }
});

module.exports = Owner;
