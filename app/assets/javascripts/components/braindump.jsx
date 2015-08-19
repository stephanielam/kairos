// var React = require('react');
// var Textfield = require('./textfield');
// var List = require('./list');
// var Todoform = require('./todoform');

var Braindump = React.createClass({
  componentDidMount: function(){
    console.log("load braindump data")
    $.ajax({
      type: 'GET',
      url: 'api/braindump',
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
      description: '',
      time: '',
      recurrence: '',
    }
  },
  updateDescription: function(value){
    this.setState({
      description: value
    })
  },
  handleStartTime: function(e){
    console.log("Handle new start time")
    this.props.onChange(e.target.value);
  },
  handleRecurrence: function(e){
    console.log("Handle Recurrences")
    this.props.onChange(e.target.value);
  },
  addTodo: function(id){
    console.log("POST /todo/ (add to braindump)")
    $.ajax({
      type: 'POST',
      url: 'api/tasks',
      data: {
        task: {
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
  },
  clear: function(){
    console.log("Clear completed")
    this.componentDidMount()
  },
  handleTodo: function(object){
    console.log("POST /todo/"+this.state.currentTask.id)
    $.ajax({
      type: 'POST',
      url: 'api/tasks/'+this.state.currentTask.id,
      data: {
        task: {
          description: this.state.description
        }
      },
      dataType: 'json',
      success: function(transport) {
        console.log(currentTask.description+"schedule success")
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
              <input id="starttime" name="starttime" type="time"/><br/>
              <button type="button" className="btn btn-default" onClick={this.handleTodo} onChange={this.handleStartTime}>Schedule Once</button>
            </form>
          </div>
          <div className="hover-area">
            <h1>{this.state.currentTask.description}</h1>
            <form action="" method="POST">
              <input id="times" type="range" min="1" max="10"></input><p>/week</p>
              <button type="button" className="btn btn-default" onClick={this.handleTodo} onChange={this.handleRecurrence}>Schedule Recurring</button>
            </form>
          </div>
        </div>
      </div>
      )}
});

// module.exports = Braindump;
