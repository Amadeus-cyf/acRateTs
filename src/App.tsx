import React from'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import BangumisView from './containers/bangumis';
import Login from './containers/login';

function App() {
  return (
    <Provider store = {store}>
        <div>
            <Router>
              <Switch>
                <Route exact path = '/login' component = { Login }/>
                <Route exact path = '/' component = { Home }/>
                <Route exact path = '/bangumi' component = { BangumisView }/>
              </Switch>      
            </Router>
        </div>
    </Provider>
  );
}

export default App;