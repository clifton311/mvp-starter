import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import Form from './components/Forms.jsx';
import Recipes from './components/Recipes.jsx'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router';
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      recipes: []
    };

    this.getRecipe = this.getRecipe.bind(this)
  }

  // componentDidMount() {
  //   this.getRecipe()
  // }

  // handleLog() {
  //   $.ajax({
  //     url: '/users',
  //     method: 'POST',
  //     data: this.state,
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       });
  //     },
  //     error: (err) => {
  //       console.log("err", err)
  //     }
  //   });
  // }

  getRecipe (e) {
    const value = e.target.elements.recipe.value;
     axios.get(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=ba5048a28634fc6e5a79ae35592b0fe3&q=${value}&count=10`)
      .then(results => {
       this.setState({
         recipes: results.data.recipes
       });
       console.log("state",this.state.recipes);
      })
      .catch(err => {
        console.log(err);
      });
    
    e.preventDefault();
   
  }

  render () {  
    return (
      <div>
        <h1 className="h1">Recipe Finder</h1>
        <Form getRecipe={this.getRecipe}/>

          {this.state.recipes.map(recipe => {
             return (
                <div >
                  <img src={recipe.image_url} alt={recipe.title}/>
                  <p>{recipe.title}</p>
                </div>
             )
          }) }
      </div>
    )
  }  
} 




ReactDOM.render(
    <App />
, document.getElementById('app'));