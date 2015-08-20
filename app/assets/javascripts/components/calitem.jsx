// var React = require('react');

var CalItem = React.createClass({
  getInitialState: function(){
    return {
      status: ""
    }
  }, 
  handleCheck: function(id){
    var temp = "done"
    var now = new Date()
    if (this.state.status == "done") {
      temp = "",
      now = null
    }
    // console.log('PATCH api/task_models/'+this.props.todo.id+'/task_instances/'+this.props.todo.task_instance_id)
    $.ajax({
      type: 'PATCH',
      url: 'api/task_models/'+this.props.todo.id+'/task_instances/'+this.props.todo.task_instance_id,
      data: {
        task_instance: {
          completed_at: now,
          task_model_id: this.props.todo.id
        }
      },
      dataType: 'json',
      success: function(transport) {
        console.log("Marked '" + this.props.todo.description + "' as completed_at " + now)
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
        {this.props.name}
      </div>
    )
  }
});

// module.exports = CalItem;