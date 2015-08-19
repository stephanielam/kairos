// var React = require('react');

var CalItem = React.createClass({
  getInitialState: function(){
    return {
      status: ""
    }
  }, 
  handleCheck: function(id){
    var temp = "done"
    var start = new Date()
    if (this.state.status == "done") {
      temp = "",
      start = null
    }
    console.log("PATCH /api/tasks/"+this.props.todo.id)
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
        console.log("Set '" + this.props.todo.description + "' start time: " + start)
        this.setState({
          status: temp,
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