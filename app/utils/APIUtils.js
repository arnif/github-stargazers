var URL = 'https://api.github.com'

var ServerActionCreators = require('../actions/ServerActionCreators');
var CONSTANTS = require('../Constants');

module.exports = {

  getStarredReposFromUser(userName, pageNr) {
    console.log('getStarredRepo', userName);
    fetch(URL + '/users/' + userName + '/starred?page=' + pageNr + '&per_page=' + CONSTANTS.PER_PAGE)
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json)
        ServerActionCreators.didGetStarredRepos(json);
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }
  
};
