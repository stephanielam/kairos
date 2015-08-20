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
      formView: 'hidden',
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
      currentTask: event,
      start_time: this.state.time
    })
  },
  scheduleTodo: function(id){
    // TODO: 
    console.log("Schedule recurring event at " + this.state.time)
    $.ajax({
      type: 'POST',
      url: 'api/task_models/'+this.state.currentTask.id+'/task_instance/',
      data: {
        task_instance: {
          start_time: this.state.time
        }
      },
      dataType: 'json',
      success: function(transport) {
        console.log("Schedule success")
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
      return <Pbar activity={todo} schedule={this.handleForm} key={index}/>
    }.bind(this))
    return (
      <div id="progress">
        <div id="scheduleRecurring" className={formView}>
          <h3>{this.state.currentTask.description}</h3>
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
