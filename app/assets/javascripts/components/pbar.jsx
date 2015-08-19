// var React = require('react');

var Pbar = React.createClass({
  getInitialState: function(){
    return {
      status: "success"
    }
  },
  add: function() {
    console.log("add recurrence")
  },
  subtract: function() {
    console.log("subtract recurrence")
  },
  show: function(id){
    console.log(this.props.activity.description)
    this.props.schedule(id)
  },
  render: function(){
    var activity = this.props.activity
    var progress = this.props.activity.percent
    var pbarStyles = {
      width: progress + '%'
    }
    if (progress >= 95){
      var status = "success"
    } else if (progress >= 80){
    } else if (progress >= 60){
      var status = "info"
    } else if (progress >= 30){
      var status = "warning"
    } else if (progress < 30){
      var status = "danger"
    }

    return (
      <div className="todo-progress" onClick={this.show.bind(this, this.props.activity)}>
        <h2>{activity.description}
        </h2>
        <div className="progress">
          <div className={"progress-bar progress-bar-striped active progress-bar-"+status} role="progressbar" style={pbarStyles}>
          {activity.percent}%
          </div>
          
        </div>
      </div>
      )}
  });

  // module.exports = Pbar;
