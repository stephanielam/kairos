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
  render: function(){
    var activity = this.props.activity
    var progress = this.props.progress
    var pbarStyles = {
      width: this.props.progress + '%'
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
      <div className="todo-progress">
        <h2>{activity[0]}
        </h2>
        <div className="progress">
          <div className={"progress-bar progress-bar-striped active progress-bar-"+status} role="progressbar" style={pbarStyles}>
          {activity[2]}%
          </div>
          
        </div>
      </div>
      )}
  });

  // module.exports = Pbar;
