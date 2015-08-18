// var React = require('react');

var Column = React.createClass({
  render: function(){
    var size = this.props.size
  return (
    <div className={"center col-md-"+size}>
      {this.props.children}
    </div>
  )}
});

// module.exports = Column;
