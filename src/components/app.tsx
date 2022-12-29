import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Header from './header';
import Footer from './footer';
// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Projects from '../routes/projects/projects';
import Project from '../routes/projects/project';
import About from '../routes/about';
import NotFoundPage from './NotFound';


const App = () => (
	<div id="app" class="h-full">
        <Header />
        <Router>
            <Route path="/" component={Home} />
            <Route path="/projects/" component={Projects} />
            <Route path="/projects/:name" component={Project} />
            <Route path="/about/" component={About} />
            <NotFoundPage default>404 - Not Found</NotFoundPage>
        </Router>
        <Footer />
    </div>
);

export default App;
