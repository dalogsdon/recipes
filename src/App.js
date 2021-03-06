import React, { useEffect } from 'react';

// NOTE: Must use HashRouter due to GitHub Pages limitations
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Recipe from './Recipe';
import recipes from './recipes';
import './App.css';

function Home() {
    useEffect(() => {
        document.title = 'Recipes';
    }, []);

    return (
        <ol>
            {
                Object.keys(recipes).sort().map(key => 
                    <li key={key}>
                        <Link to={`/${key}`}>{recipes[key].title}</Link>
                    </li>
                )
            }
        </ol>
    );
}

function App() {
    return (
        <Router basename="/">
            <div>
                <nav>
                    <Link to="/"><h1 className="nav-title">Drew's Recipes</h1></Link>
                </nav>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/:recipe" component={Recipe} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
