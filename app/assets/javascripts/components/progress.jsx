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
      todos: [],
      currentTask: '',
      formView: '',
      time: new Date()
    }
  },
  handleStartTime: function(e){
    this.setState({
      time: e.target.value
    })
  },
  handleForm: function(event){
    this.setState({
      formView: '',
      currentTask: event
    })
  },
  scheduleTodo: function(id){
    // TODO: 
    console.log("Schedule recurring event at " + this.state.time)
    $.ajax({
      type: 'POST',
      url: 'api/tasks',
      data: {
        task: {
          start_time: this.state.time
        }
      },
      dataType: 'json',
      success: function(transport) {
        console.log("Add success")
        time: new Date()
      }.bind(this)
    })
    this.setState({
      formView: 'hidden'
    })
  },
  cancel: function(){
    console.log("cancel")
    this.setState({
      currentTask: null,
      formView: 'hidden',
      time: new Date()
    })
  },
  render: function(){
    var todos = this.state.todos
    var formView = this.state.formView
    var progressBars = todos.map(function (todo,index) {
      return <Pbar activity={todo} key={index}/>
    })
    return (
      <div id="progress">
        <div id="scheduleRecurring" className={formView}>
          <h1>{this.state.currentTask.time}</h1>
          <form action="" method="POST">
            <input type="datetime-local" onChange={this.handleStartTime}/>
            <button type="button" className="btn btn-default" onClick={this.scheduleTodo}>Schedule</button>
            <button type="button" className="btn btn-default" onClick={this.cancel}>Cancel</button>
          </form>
        </div>
        <h1>PROGRESS</h1>
        {progressBars}
      </div>
      )}
  });

  // module.exports = Progress;
