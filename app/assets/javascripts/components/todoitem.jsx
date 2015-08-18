// var React = require('react');
var TodoItem = React.createClass({
  getInitialState: function(){
    return {
      status: "",
      img: "images/clock.png"
    }
  },
 handleCheck: function(id){
    console.log("POST /api/tasks/"+this.props.todo.id)
    var temp = "done"
    var temp2 = ""
    var start = new Date()
    if (this.state.status == "done") {
      temp = "",
      temp2 = "images/clock.png"
      start = null
    }

    $.ajax({
      // TODO
      type: 'POST',
      url: 'api/tasks/'+this.props.todo.id,
      data: {
        task: {
          startTime: start
        }
      },
      dataType: 'json',
      success: function(transport) {
        console.log("Handled todo! " + this.props.todo.description + " StartTime = " + start)
        this.setState({
          status: temp,
          img: temp2
        })
      }.bind(this)
    })
  },
  show: function(id){
    this.props.showForm(id)
  },
  delete: function(id){
    // TODO
    console.log("delete")
  },
  render: function(){
    return (
      <li
        className={this.state.status}
        id={this.props.id}
        key={this.props.id}>
        <span onClick={this.handleCheck}> {this.props.todo.description}</span>
        <img onClick={this.show.bind(this, this.props.todo)} key={this.props.id} src={this.state.img}/>
        <img onClick={this.delete.bind(this, this.props.todo)} key={this.props.id} src="images/xicon.png"/>
      </li>
    )
  }
});

  // module.exports = TodoItem;