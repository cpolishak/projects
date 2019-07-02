import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {
   render() {
       // we use this.props to pass immutable (unchangeable) data/
       // In this case we use this.props with {title} to tie it into the <Recipe title="pasta"... portion from the RecipeApp.js file. 
       const {title, img, instructions} = this.props;
       const ingredients = this.props.ingredients.map((ing, index) => (
        <li key={index}>{ing}</li>
        ));
        // We use this.props for const ingredients to pull the ingredients from the RecipeApp.js file. In this case we are using `.map(ing, index)` to tell it to create an array with a provided function on each item of that array - the ingredients array here. We are telling it to create an li for each member of the array and using index to assign each one the key value the index location (0 , 1, etc.)
        // Above we added the index and {index} into the function to tell react the key to each li is it's index in the array. 
      return (
        <div className="recipe-card">
          <div className="recipe-card-image">
            <img src={img} alt={title} />
          </div>
          <div className="recipe-card-content">
            <h3 className="recipe-title">{title}</h3>
            <h4>Ingredients:</h4>
            <ul>
              {ingredients}
            </ul>
            <h4>Instructions:</h4>
            <p>{instructions}</p>
          </div>
        </div>
      );
   } 
}

export default Recipe;
