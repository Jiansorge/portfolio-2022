import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Project from '../routes/projects';
import About from '../routes/about';


const App = () => (
	<div id="app">
        <Header />
        <Router>
            <Route path="/" component={Home} />
            <Route path="/projects/" component={Project} name="All Projects" />
            <Route path="/projects/:name" component={Project} />
            <Route path="/about/" component={About} />

        </Router>
    </div>
);

export default App;
