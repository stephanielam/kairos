// var React = require('react');

var Todoform= React.createClass({
  getInitialState: function() {
    return { state: "edit" };
  },
  render: function(){
    var states = ["edit", "once", "recurring"]
    var size = this.props.size
    return (
      <form>
      <div>
        Name: <input type="text"/>
      </div>
      <div>
        Time: <input type="text"/>
      </div>
      <input type="submit" value="Submit" />
      </form>
      )}
  });

  // module.exports = Todoform;
