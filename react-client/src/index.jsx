import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    };
  }

  componentDidMount() {
    this.handleLog();
  }

  handleLog() {
    $.ajax({
      url: '/users',
      method: 'POST',
      data: this.state,
      success: (data) => {
        this.setState({
          items: data
        });
      },
      error: (err) => {
        console.log("err", err)
      }

    });
  }

  render () {
    return (
      <div>
        <h1 className="h1">React Routing</h1>
        <Login click={this.handleLog}/>

      </div>)
  }
}



ReactDOM.render(<App />, document.getElementById('app'));