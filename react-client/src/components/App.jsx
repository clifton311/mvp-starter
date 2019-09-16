import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './Login.jsx';
import Form from './Forms.jsx';
import Recipes from './Recipes.jsx';
import Recipe from './Recipe.jsx';
import axios from 'axios';
import Register from './Register.jsx';
import Navbar from './NavBar.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { runInThisContext } from 'vm';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      recipes: [],
      count: 0,
      login: true,
      pageView: 0,
      username: "",
      password: "",
      isAuthenticated: true
    };

    this.getRecipe = this.getRecipe.bind(this);
    this.incrementMe = this.incrementMe.bind(this);
    this.isRegistered = this.isRegistered.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.pageViewChange = this.pageViewChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.returnHome=this.returnHome.bind(this)
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

  handleChange(e) {
    this.setState({
      username: e.target.value,
      password: e.target.value
    })
  }


  incrementMe() {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  }

  isRegistered () {
    this.setState({
      login: !this.state.login,
      isRegistered: !this.state.isRegistered
    })
  }

  isAuthenticated() {

  }

  pageViewChange (e) {
    e.preventDefault()
    this.setState({
      pageView: 3
    })
  }

 returnHome () {
    this.setState({
      pageView: 0
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then((response) => {
      console.log('response',response)
      if (response.status === 200) {
        console.log('good')
      }
    })
    .catch( error => {
      console.log('login error', error)
    })
  }

  getRecipe (e) {
    const value = e.target.elements.recipe.value;
    const number = 6;
     axios.get(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=76521c50a5da5eed488968b0bfa15ce9&q=${value}&count=${number}`)
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

    if (this.state.pageView === 0) {
       return (
        <div className="App">
          <h1 className="App-title">Recipe Finder</h1> <br></br>
           <Login 
            pageViewChange={this.pageViewChange} 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            /> 
           <Form getRecipe={this.getRecipe}/> */}
           <Recipes recipes={this.state.recipes} likes={this.state.count} incrementMe={this.incrementMe}/>  
        </div>
      )
    } else if ( this.state.pageView === 1){
      return(
        <div>
          <Form getRecipe={this.getRecipe}/>
          <Recipes recipes={this.state.recipes} likes={this.state.count} incrementMe={this.incrementMe}/>  
        </div>
      )
    } else {
      return (
        <Register pageViewChange={this.returnHome}/>
      )
    }
    // return (
    //   <Router>
    //     <div>
    //     <Switch>
    //       <Route exact path="/" component={Login} exact />
    //       <Route exact path="/recipe/:id" 
    //           render={()=> 
    //             this.state.isAuthenticated ? <Redirect to="/recipe" /> : <Login />} />
    //       <Route exact path="/login" component={Login} />
    //       <Route exact path="/register" component={Register} />
    //     </Switch>

    //     </div>
    //   </Router>
      
  
    
  }  
} 
 export default App;