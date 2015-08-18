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