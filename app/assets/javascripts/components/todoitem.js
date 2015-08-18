var React = require('react');
var TodoItem = React.createClass({
  getInitialState: function(){
    return {
      status: ""
    }
  },
 handleCheck: function(id){
    console.log("POST /todos/:id")
    var temp = "done"
    if (this.state.status == "done") temp = ""
    this.setState({
      status: temp
    })
  },
  show: function(id){
    this.props.showForm(id)
  },
  delete: function(id){
    console.log("delete")
  },
  render: function(){
    return (
      <li
        className={this.state.status}
        id={this.props.id}
        key={this.props.id}>
        <span onClick={this.handleCheck}> {this.props.todo}</span>
        <img onClick={this.show.bind(this, this.props.todo)} key={this.props.id} src="images/clock.png"/>
        <img onClick={this.delete.bind(this, this.props.todo)} key={this.props.id} src="images/xicon.png"/>
      </li>
    )
  }
});

  module.exports = TodoItem;