var React = require('react');
var TodoItem = require('./todoitem');

var List = React.createClass({

  show: function(id){
    console.log(id)
    this.props.schedule(id)
  },
  render: function(){
    var todoList = this.props.todos.map(function(todo, index){
      return (
        <TodoItem todo={todo} showForm={this.show.bind(this, todo)} id={index} key={index} name={name}/>
      )
    }.bind(this))

    return <ul id="todo-scroll">{todoList}</ul>
  }
});

module.exports = List;
