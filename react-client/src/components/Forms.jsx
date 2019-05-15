import React from 'react';

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.getRecipe} style={{marginBottom: "2rem"}}>
        <input className="form_input" type="text" name='recipe'></input>
        <button className="form_button">Search for Recipe</button>
      </form>
    </div>
  )
}

module.exports = Form;