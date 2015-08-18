var React = require('react');
var CalItem = require('./calitem');

var Calendar = React.createClass({
  getInitialState: function(){
    return {
      date: new Date(),
      startTime: 0,
      endTime: 24,
      // GET tasks/?startdate=true
      todos: [{name: "todo1", startTime: 8},{name: "todo2", startTime: 8},{name: "todo3", startTime: 8}]
    }
  },
  blur: function(event){
    console.log("blur")
  },
  back: function(event){
    console.log("back")
    var prevDate = new Date()
    prevDate.setDate(this.state.date.getDate() - 1)
    this.setState({
      date: prevDate,
    })
  },

  forward: function(event){
    console.log("forward")
    var nextDate = new Date()
    nextDate.setDate(this.state.date.getDate() + 1)
    this.setState({
      date: nextDate
    })
  },

  today: function(event){
    console.log("today")
    var today = new Date();
     this.setState({
      date: today
    })
  },
  handleTodo: function(event){
    console.log("POST /todo/:id (edit/add)  calendar")
  },
  render: function(){
    var date = this.state.date
    var hours = ["12:00AM", "1:00AM", "2:00AM", "3:00AM","4:00AM","5:00AM", "6:00AM", "7:00AM", "8:00AM", "9:00AM", "10:00AM", "11:00AM",
    "12:00PM", "1:00PM", "2:00PM", "3:00PM","4:00PM","5:00PM", "6:00PM", "7:00PM", "8:00PM", "9:00PM", "10:00PM", "11:00PM"]
    var start = this.state.startTime
    var end = this.state.endTime
    var todos = this.state.todos
    var columnStyle = {
      width: 10 + '%'
    }
    var table = hours.map(function (hour, index) {
      if (index > start && index < end) {
        return <tr><td style={columnStyle}>{hour}</td>
        <td className="todo" key={index}>
          {index}
        </td>
        <td style={columnStyle}>edit</td></tr>
      }
    })

    return (
      <div id="calendar">
        <div className="wrap">
          <img src="images/leftarrow.png" id="prev" className="clickable clicker" onClick={this.back}/>
            <div className="circle"></div>
        </div>
        <h1 id="date">{date.toDateString()}</h1>
        <div className="wrap">
          <img src="images/rightarrow.png" id="next" className="clickable clicker" onClick={this.forward}/>
          <div className="circle"></div>
        </div>
        <div>
          <button className="btn" id="today" onClick={this.today}>TODAY<img src="images/todayarrow.png" id="btn-icon"/></button>
        </div>
        <div id="table-scroll">
        <table className="table table-hover">
          <tbody>
           {table}
          </tbody>
        </table>
        </div>
      </div>
    )
  }
});

module.exports = Calendar;
