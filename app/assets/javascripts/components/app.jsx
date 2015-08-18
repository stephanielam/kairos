// var React = require('react');
// var Header = require('./header');
// var Calendar = require('./calendar');
// var Progress = require('./progress');
// var Column = require('./column');
// var Navbar = require('./navbar');

var App = React.createClass({
  displayName:"app",
  getInitialState: function(){
    return {
      status: "bod"
    }
  },
  blur: function(){
      this.setState({
        status: "blur"
      })
  },
  show: function(){
      this.setState({
        status: "bod"
      })
  },
  render: function(){
    return (
      <body>
        <div id="headerContainer">
          <Header show={this.show} blur={this.blur}/>
        </div>

        <div className={this.state.status}>
          <Navbar />
          <div className="container">
            <div className="row center">

            <Column size={6}>
              <Calendar />
            </Column>

            <Column size={6}>
              <Progress />
            </Column>
            </div>
          </div>
        </div>

      </body>
    )
  }
})

// module.exports = App;
