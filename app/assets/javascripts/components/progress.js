var React = require('react');
var Pbar = require('./pbar');

var Progress = React.createClass({
  getInitialState: function(){
    return {
      // GET  /tasks/?recurring=true
      todos: [["Email Cornelius", false], ["Pick up sister", false], ["Fix ratchet nails", false],
      ["LOTR marathon", false],["Buy dogs", false], ["Drop everyones tables", false],
      ["Read", true, 30], ["Final Project", true, 10], ["Cry", true, 100], ["Pull out hair", true, 62], ["Code", true, 85],
      ["Sleep", true, 10], ["db:party", true, 100], ["Gym", true, 60]]
    }
  },
  addRecurring: function(){
    console.log("/POST add recurring")
  },
  render: function(){
    var todos = this.state.todos
    var progressBars = todos.map(function (todo) {
      if (todo[1] == true){
        return <Pbar activity={todo[0]} progress={todo[2]}/>
      }
    })
    return (
      <div id="progress">
        <h1>PROGRESS</h1>
        {progressBars}
      </div>
      )}
  });

  module.exports = Progress;
