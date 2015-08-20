// var React = require('react');
// var Pbar = require('./pbar');

var Progress = React.createClass({
  componentDidMount: function(){
    console.log("Load progress")
    this.timer = setInterval(function(){
    $.ajax({
      type: 'GET',
      url: 'api/progress',
      success: function(todo_data) {
        this.setState({
          todos: todo_data
        })
      }.bind(this)
    })
    }.bind(this), 600);
  },
    componentWillUnmount: function () {
    clearInterval(this.timer);
  },
  getInitialState: function(){
    return {
      todos: [],
      currentTask: '',
      formView: 'hidden',
      date: new Date()
    }
  },
  handleStartTime: function(e){
    this.setState({
      date: e.target.value
    })
  },
  handleForm: function(event){
    this.setState({
      formView: '',
      currentTask: event,
    })
  },
  scheduleTodo: function(id){
    // TODO: 
    console.log("Schedule recurring event at " + this.state.date)
    $.ajax({
      type: 'POST',
      url: 'api/task_models/'+this.state.currentTask.id+'/task_instances',
      data: {
        task_instance: {
          task_model_id: this.state.currentTask.id,
          starts_at: this.state.date
        }
      },
      dataType: 'json',
      success: function(transport) {
        console.log("Schedule success")
        date: new Date()
      }.bind(this)
    })
    this.setState({
      formView: 'hidden'
    })
  },
  cancel: function(){
    console.log("cancel")
    this.setState({
      formView: 'hidden',
      date: new Date()
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
            <input type="datetime-local" placeholder={this.state.date} onChange={this.handleStartTime}/>
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
