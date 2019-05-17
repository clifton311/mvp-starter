import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './Login.jsx';
import Form from './Forms.jsx';
import Recipes from './Recipes.jsx';
import axios from 'axios';
import Register from './Register.jsx';
import Navbar from './NavBar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      recipes: [],
      count: 0
    };

    this.getRecipe = this.getRecipe.bind(this);
    this.incrementMe = this.incrementMe.bind(this);
  }

  componentDidMount() {
    //get item in local is in JSON format so needs to parse
    let item = localStorage.getItem("recipes");
    let recipes = JSON.parse(item);
    this.setState({recipes});

  }

  componentDidUpdate () {
    //only takes json.stringify
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes",recipes);

  }

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

  incrementMe() {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  }

  getRecipe (e) {
    const value = e.target.elements.recipe.value;
    const number = 6;
     axios.get(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=ba5048a28634fc6e5a79ae35592b0fe3&q=${value}&count=${number}`)
      .then(results => {
       this.setState({
         recipes: results.data.recipes
       });
      })
      .catch(err => {
        console.log(err);
      });
    
    e.preventDefault();
  }

  render () {  
    return (
      <div className="App">
        <h1 className="App-title">Recipe Finder</h1> <br></br>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes} likes={this.state.count} incrementMe={this.incrementMe}/>
      </div>
    )
  }  
} 
 export default App;