var React = require('react');

var Login = React.createClass({
  displayName:"login",
  render: function(){
  return (
    <form>
      <Textfield />
      <Textfield />
      <button type="button" className="btn btn-default">Login</button>
    </form>
  )}
});