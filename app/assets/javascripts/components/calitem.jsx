// var React = require('react');

var CalItem = React.createClass({
  getInitialState: function(){
    return {
      status: ""
    }
  },
 handleCheck: function(id){
    console.log("POST /todos/:id")
    var temp = "done"
    if (this.state.status == "done") temp = ""
    this.setState({
      status: temp
    })

  var temp = "done"
    var start = new Date()
    if (this.state.status == "done") {
      temp = "",
      start = null
    }
    console.log("POST /api/tasks/"+this.props.todo.id)
    $.ajax({
      // TODO
      type: 'PATCH',
      url: 'api/tasks/'+this.props.todo.id,
      data: {
        task: {
          starts_at: start
        }
      },
      dataType: 'json',
      success: function(transport) {
        console.log("Handled todo! " + this.props.todo.description + " StartTime = " + start)
        this.setState({
          status: temp
        })
      }.bind(this)
    })
  },
  render: function(){
    return (
      <div onClick={this.handleCheck} 
        className={this.state.status}
        id={this.props.id}
        key={this.props.id}>
        {this.props.todo}
      </div>
    )
  }
});

// module.exports = CalItem;