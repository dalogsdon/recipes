import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Recipe from './Recipe';
import recipes from './recipes';
import './App.css';

function Home() {
    return (
        <ol>
            {Object.keys(recipes).map(key => <li key={key}><Link to={key}>{recipes[key].title}</Link></li>)}
        </ol>
    );
}

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/"><h1 className="nav-title">Drew's Recipes</h1></Link>
                    </nav>

                    <Route path="/" exact component={Home} />
                    <Route path="/:recipe" component={Recipe} />
                </div>
            </Router>
        );
    }
}

export default App;
