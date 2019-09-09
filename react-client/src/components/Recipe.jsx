import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

 
class Recipe extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      activeRecipe: [],
      favorite: true
    };


    
    this.favoriteToggle = this.favoriteToggle.bind(this);
  }

  componentDidMount()  {
    const title = this.props.location.state.recipe;
     axios.get(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=ba5048a28634fc6e5a79ae35592b0fe3&q=${title}`)
      .then(results => {
       this.setState({
         activeRecipe: results.data.recipes[0]
       });
      })
      .catch(err => {
        console.log(err);
      });
  }

  favoriteToggle () {
    this.setState({
      favorite: !this.state.favorite
    });
  }

  render () {
    const recipe = this.state.activeRecipe;
      return (

        <div className="container">
          <img className="active_recipe" src={recipe.image_url} alt={recipe.title} />

            <p className="active-recipe__publisher">{recipe.title}</p>
              <h4>Publisher: <span>{recipe.publisher} </span></h4>

              <p className="active-recipe__website">Website: 
              <span><a href={recipe.source_url}>{recipe.source_url}</a></span>
            </p>

            <button className="button"> 
                <Link to="/">Return Home</Link>
            </button>

            <button onClick={this.favoriteToggle}>favorite</button>
         
        </div>
      )
  }

}
export default Recipe;