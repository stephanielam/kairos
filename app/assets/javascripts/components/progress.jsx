// var React = require('react');
// var Pbar = require('./pbar');

var Progress = React.createClass({
  componentDidMount: function(){
    // GET  /tasks/?recurring=true
    $.ajax({
      type: 'GET',
      url: 'api/progress',
      success: function(todo_data) {
        this.setState({
          todos: todo_data
        })
      }.bind(this)
    })
  },
  getInitialState: function(){
    return {
      todos: [["Read", true, 30], ["Final Project", true, 10], ["Cry", true, 100], ["Pull out hair", true, 62], ["Code", true, 85],
      ["Sleep", true, 10], ["db:party", true, 100], ["Gym", true, 60]]
    }
  },
  addRecurring: function(){
    console.log("/POST add recurring")
  },
  render: function(){
    var todos = this.state.todos
    var progressBars = todos.map(function (todo,index) {
      return <Pbar activity={todo} key={index}/>
    })
    return (
      <div id="progress">
        <h1>PROGRESS</h1>
        {progressBars}
      </div>
      )}
  });

  // module.exports = Progress;
