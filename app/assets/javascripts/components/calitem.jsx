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
    console.log('PATCH api/task_models/'+this.props.todo.id+'/task_instances/'+this.props.todo.task_instance_id)
    $.ajax({
      // TODO
      type: 'PATCH',
      url: 'api/task_models/'+this.props.todo.id+'/task_instances/'+this.props.todo.task_instance_id,
      data: {
        task_instance: {
          starts_at: start,
          task_model_id: this.props.todo.id
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