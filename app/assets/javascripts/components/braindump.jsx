// var React = require('react');
// var Textfield = require('./textfield');
// var List = require('./list');
// var Todoform = require('./todoform');

var Braindump = React.createClass({
  componentDidMount: function(){
    $.ajax({
      type: 'GET',
      url: 'api/braindump',
      success: function(todo_data) {
        this.setState({
          todos: todo_data
        })
        console.log("loaded braindump data")
      }.bind(this)
    })
  },
  getInitialState: function(){
    return {
      todos: [],
      currentTask: '',
      formView: 'hidden',
      description: '',
      time: new Date(),
      recurrences: 5,
    }
  },
  updateDescription: function(value){
    this.setState({
      description: value
    })
  },
  handleStartTime: function(e){
    console.log("Handle new start time: " + e.target.value)
    this.setState({
      time: e.target.value
    })
  },
  handleRecurrence: function(e){
    console.log("Set Recurrences: " + e.target.value)
    this.setState({
      recurrences: e.target.value
    })
    
  },
  addTodo: function(id){
    console.log("POST /task_models (add to braindump)")
    $.ajax({
      type: 'POST',
      url: 'api/task_models',
      data: {
        task_model: {
          description: this.state.description
        }
      },
      dataType: 'json',
      success: function(transport) {
        console.log("Add success")
        this.componentDidMount()
        description: ''
      }.bind(this)
    })

    this.setState({
      formView: 'hidden'
    })
    this.componentDidMount()
  },
  clear: function(){
    console.log("Clear completed")
    this.componentDidMount()
  },
  scheduleOnce: function(object){
    console.log('POST api/task_models/'+this.state.currentTask.id+'/task_instances')
    $.ajax({
      type: 'POST',
      url: 'api/task_models/'+this.state.currentTask.id+'/task_instances',
      data: {
        task_instance: {
          task_model_id: this.state.currentTask.id,
          starts_at: this.state.time
        }
      },
      dataType: 'json',
      success: function(transport) {
        console.log(this.state.currentTask.description+"schedule success at " + this.state.time)
      }.bind(this)
    })
    this.setState({
      formView: 'hidden'
    })
  },
  scheduleRecurring: function(object){
    console.log("PATCH api/task_models/"+this.state.currentTask.id)
    $.ajax({
      type: 'PATCH',
      url: 'api/task_models/'+this.state.currentTask.id,
      data: {
        task_model: {
          repeat_times: this.state.recurrences
        }
      },
      dataType: 'json',
      success: function(transport) {
        console.log("Set " + this.state.currentTask.description+" recurrense to "+this.state.recurrences)
      }.bind(this)
    })

    this.setState({
      formView: 'hidden'
    })
  },
  handleForm: function(event){
    this.setState({
      formView: '',
      currentTask: event
    })
  },

  render: function(){
    var formView = this.state.formView
    return (
      <div>
      <div id="braindump">
      <img src="images/logowhite.png" id="logo"/>
      <h1 className="header-title">Kairos</h1>
      <h1>B R A I N D U M P</h1>
      <Textfield newvalue={this.state.description} onChange={this.updateDescription}/>
      <button type="button" className="btn btn-default" onClick={this.addTodo}>Add</button>
      <button type="button" className="btn btn-default" onClick={this.clear}>Clear Completed</button>
      <List schedule={this.handleForm} todos={this.state.todos}/>

      </div>
        <div id="addNew" className={formView}>
          <div className="hover-area">
            <h1>{this.state.currentTask.description}</h1>
            <form action="" method="POST">
              <input id="starttime" name="starttime" type="datetime-local" onChange={this.handleStartTime}/><br/>
              <button type="button" className="btn btn-default" onClick={this.scheduleOnce}>Schedule Once</button>
            </form>
          </div>
          <div className="hover-area">
            <h1>{this.state.currentTask.description}</h1>
            <form action="" method="POST">
              <input id="times" type="range" min="1" max="10" onChange={this.handleRecurrence}></input><p><h3>{this.state.recurrences}</h3>/week</p>
              <button type="button" className="btn btn-default" onClick={this.scheduleRecurring}>Schedule Recurring</button>
            </form>
          </div>
        </div>
      </div>
      )}
});

// module.exports = Braindump;
