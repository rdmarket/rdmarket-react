import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

// import Home from './home/index';
// import Gallery from './gallery/index';
// import Catch from './catch/index'
// import Studio from './studio/index'
// import Blog from './blog/blog'


export default props => {

    return <Router history={hashHistory}>

        {/* <Route path='/home' component={Home} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/catch' component={Catch} />
        <Route path='/studio' component={Studio} />
        <Route path='/blog' component={Blog} /> */}
        <Redirect from='*' to='/home'/>
    </Router>

}