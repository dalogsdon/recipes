import React, { Component } from 'react';
import recipes from './recipes';
import './Recipe.css';

class TaskLi extends Component {
    state = {
        done: false
    };
    toggleDone = () => this.setState({ done: !this.state.done });
    render() {
        const classname = this.state.done ? 'done' : '';
        return (
            <li className={classname} onClick={this.toggleDone}>
                {this.props.children}
            </li>
        );
    }
}

class Recipe extends Component {
    render() {
        const recipeName = this.props.match.params.recipe;
        const recipe = recipes[recipeName];
        if (!recipe) {
            return `No recipe found for ${recipeName}`;
        }
        return (
            <div className="recipe">
                <h1>{recipe.title}</h1>
                {recipe.link && <a href={recipe.link} target="_blank" rel="noopener noreferrer">adapted from</a>}
                <h2>Ingredients</h2>
                <ol>
                    {recipe.ingredients.map(ing => <TaskLi key={ing}>{ing}</TaskLi>)}
                </ol>
                <h2>Steps</h2>
                <ol>
                    {recipe.steps.map(step => <TaskLi key={step}>{step}</TaskLi>)}
                </ol>
            </div>
        );
    }
}

export default Recipe;
