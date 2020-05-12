import React, { useState } from 'react';
import recipes from './recipes';
import './Recipe.css';

function TaskLi({ children }) {
    const [ done, setDone ] = useState(false);
    const classname = done ? 'done' : '';
    return (
        <li className={classname} onClick={() => setDone(!done)}>
            {children}
        </li>
    );
}

function Recipe({ match }) {
    const recipeName = match.params.recipe;
    const recipe = recipes[recipeName];
    if (!recipe) {
        return (
            <div className="recipe">
                No recipe found for "{recipeName}"
            </div>  
        )
    }
    return (
        <div className="recipe">
            <h1>{recipe.title}</h1>
            {recipe.link && <a href={recipe.link} target="_blank" rel="noopener noreferrer">adapted from</a>}
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map(ing => <TaskLi key={ing}>{ing}</TaskLi>)}
            </ul>
            <h2>Steps</h2>
            <ol>
                {recipe.steps.map(step => <TaskLi key={step}>{step}</TaskLi>)}
            </ol>
        </div>
    );
}

export default Recipe;
