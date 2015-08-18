// var React = require('react');
// var Textfield = require('./textfield');
// var List = require('./list');
// var Todoform = require('./todoform');

var Braindump = React.createClass({
  getInitialState: function(){
    return {
      // GET /tasks/?startdate=false
      todos: [["Email Cornelius", false], ["Pick up sister", false], ["Fix ratchet nails", false],
      ["LOTR marathon", false],["Buy dogs", false], ["Save the world", false],
      ["db:party", false], ["Code", true, 100], ["Read", true, 30], ["Gym", true, 60], ["Final Project", true, 10], ["Yoga", true, 80]],
      currentTask: '',
      formView: 'hidden'
    }
  },
  updateDescription: function(value){
    this.setState({
      description: value
    })
  },
  handleTodo: function(id){
    console.log("POST /todo/:id (edit/add)  braindump")
    // dispatch({type: "CHANGE STATE", id: articleId, state: "loading"});
    // $.ajax({
    //   url: "/todos/#{todoid}"
    //   success: function (data, textStatus, jqXHR) {
    //     dispatch({type: "ARTICLE_LOADED", id: articleId, state: "ready", content: data});
    //   }
    // });

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
      <button type="button" className="btn btn-default" onClick={this.handleTodo} >Add</button>
      <List schedule={this.handleForm} todos={this.state.todos}/>

      </div>
        <div id="addNew" className={formView}>
          <div className="hover-area">
            <h1>{this.state.currentTask}</h1>
            <form action="" method="POST">
              <input id="starttime" name="starttime" type="time"/><br/>
              <button type="button" className="btn btn-default" onClick={this.handleTodo}>Schedule Once</button>
            </form>
          </div>
          <div className="hover-area">
            <h1>{this.state.currentTask}</h1>
            <form action="" method="POST">
              <input id="times" type="range" min="1" max="10"></input><p>/week</p>
              <button type="button" className="btn btn-default" onClick={this.handleTodo}>Schedule Recurring</button>
            </form>
          </div>
        </div>
      </div>
      )}
});

// module.exports = Braindump;
