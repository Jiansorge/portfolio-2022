import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Project from '../routes/project';

const App = () => (
	<div id="app">
        <Header />
        <Router>
            <Route path="/" component={Home} />
            <Route path="/project/" component={Project} name="me" />
            <Route path="/project/:name" component={Project} />
        </Router>
    </div>
);

export default App;