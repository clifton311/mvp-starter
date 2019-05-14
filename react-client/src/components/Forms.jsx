import React from 'react';

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.getRecipe}>
        <input type="text" name='recipe'></input>
        <button className="FormButton">Search for Recipe</button>
      </form>
    </div>
  )
}

module.exports = Form;