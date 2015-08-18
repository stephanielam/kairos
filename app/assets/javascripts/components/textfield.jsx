// var React = require('react');

var Textfield = React.createClass({
  handleChange: function(e){
    //grab the target's value from the event
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
