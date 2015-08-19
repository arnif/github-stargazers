var React = require('react');

var FrontPage = React.createClass({

	componentDidMount() {
		console.log('loaded');
	  },

  	render: function () {
    	return (
     	 <div>
        	{this.props.children}
      	</div>
    	)
  	}
});

module.exports = FrontPage;