import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './Pages/Main';
import Repository from './Pages/Repository';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'}>/" component={Main}/>
        <Route path={process.env.PUBLIC_URL+"/repository/:repository"} component={Repository}/>
      </Switch>
    </BrowserRouter>
  );
}
