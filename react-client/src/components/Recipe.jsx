import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      activeRecipe: []
    };

  }

  componentDidMount()  {
    const title = this.props.location.state.recipe;
     axios.get(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=ba5048a28634fc6e5a79ae35592b0fe3&q=${title}`)
      .then(results => {
       this.setState({
         activeRecipe: results.data.recipes[0]
       });
      console.log("state",this.state.activeRecipe);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render () {
    const recipe = this.state.activeRecipe;
    console.log("recipe" ,recipe);
      return (
        <div className="container">
          <img className="active_recipe" src={recipe.image_url} alt={recipe.title} />
            <p className="recipe_title">{recipe.title}</p>
              <h4>Publisher: <span>{recipe.publisher} </span></h4>
            <p className="active_recipe">Website: 
              <a href={recipe.source_url}></a>
            </p>
            <button className="button"> 
                <Link to="/">Return Home</Link>
            </button>
        </div>
      )
  }

}
export default Recipe;