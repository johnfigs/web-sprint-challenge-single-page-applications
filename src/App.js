import React from "react";

import { Route, Link, Switch, Redirect } from 'react-router-dom'

//importing components
import Home from './Home';



const App = () => {
  return (
    <div className='App'>
      <nav>
      <h1>Lambda Eats</h1>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/help'>Help</Link>
      </div>
      </nav>
      {/*add switch*/}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;