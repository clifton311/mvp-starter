import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div>
        <h1 className="h1">React Routing</h1>
        

      </div>)
  }
}



ReactDOM.render(<App />, document.getElementById('app'));