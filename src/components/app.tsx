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
            <Route exact path="/projects/" component={Projects} />
            <Route path="/projects/:name" component={Project} />
            <Route path="/about/" component={About} />
            <Route exact path="/" component={Home} />
            <div default><NotFoundPage /></div>
        </Router>
        <Footer /> 
    </div>
);

export default App;
