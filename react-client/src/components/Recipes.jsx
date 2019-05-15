import React from 'react';

const Recipes = (props) => (
  
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => {
        return (

          <div className="col-md-4" style={{marginBottom:"2rem"}} key={recipe.title} >

            <img className="recipe_box"
              src={recipe.image_url} 
              alt={recipe.title}
              />
          
            <h5>{recipe.title}</h5>
          </div>
          )
       }) 
      }
      </div>
  </div>
)

export default Recipes;