var React = require('react');
var Braindump = require('./braindump');

var Header = React.createClass({
  show: function(event){
    this.props.blur()
  },
  hide: function(event){
    this.props.show()
  },
  render: function(){
    return (
      <div id="header" class="center" onMouseOver={this.show} onMouseOut={this.hide}>
      <Braindump />
      </div>
      )}
  });

  module.exports = Header;
