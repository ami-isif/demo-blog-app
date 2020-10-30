import React from 'react';
import {BrowserRouter , Switch, Route} from 'react-router-dom';
import ArticlePage from './ArticlePage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import NewPostPage from './NewPostPage';

function Router () {
  return(
    <BrowserRouter>

       <Switch>
         <Route path="/new-post" component={NewPostPage}/>
         <Route path="/login" component={LoginPage} />
         <Route path="/article" component={ArticlePage} />
         <Route path="/" component={HomePage} />
        </Switch>

        </BrowserRouter>
    );
}

export default Router;