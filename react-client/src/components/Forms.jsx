import React from 'react';

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.getRecipe} style={{marginBottom: "2rem"}}>
        <input className="form__input " type="text" name='recipe'></input>
        <button className="form__button">Yum!</button>
      </form>
    </div>
  )
}

module.exports = Form;