import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Projects from '../routes/projects/projects';
import Project from '../routes/projects/project';
import About from '../routes/about';


const App = () => (
	<div id="app">
        <Header />
        <Router>
            <Route path="/" component={Home} />
            <Route path="/projects/" component={Projects} />
            <Route path="/projects/:name" component={Project} />
            <Route path="/about/" component={About} />
        </Router>
    </div>
);

export default App;
