import React from 'react';
import {Link} from 'react-router-dom';

const Recipes = (props) => (
  
  <div className="container">
    <div className="row">

      {props.recipes.map(recipe => {
        return (
          <div className="col-md-4" style={{marginBottom:"2rem"}} key={recipe.title} >
            <img className="recipe_box"
              src={recipe.image_url} 
              alt={recipe.title}/>

            <h5 className="recipe_title">{recipe.title}</h5>
              <p className="recipe_subtitle"> Publisher: <span>{recipe.publisher}</span></p>

            <button className="recipe_button">
              <Link to={{pathname: `/recipe/${recipe.recipe_id}`}}>View Recipe</Link>
            </button>

          </div>
          )
       }) 
      }
      </div>
  </div>
)

export default Recipes;