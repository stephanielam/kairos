// var React = require('react');

var Textfield = React.createClass({
  handleChange: function(e){
    this.props.onChange(e.target.value);
  },
  render: function(){
  return (
    <div>
    <input type="text" value={this.props.newvalue} className="form-control"  onChange={this.handleChange}/>
    </div>
    )}
});

// module.exports = Textfield;
