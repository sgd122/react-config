import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import LogIn from '@pages/LogIn';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact path={'/'} to={'/login'} />
        <Route path={'/login'} component={LogIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
