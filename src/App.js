import React, { Component } from "react";
import { mainRouts } from "./routs/mainRouters";
import { Route } from "react-router-dom";
import Header from "./components/header/Header";

class App extends Component {
 state = {};
 render() {
  return (
   <>
    <Header />

    {mainRouts.map((rout) => (
     <Route
      path={rout.path}
      exact={rout.exact}
      component={rout.component}
      key={rout.path}
     />
    ))}
   </>
  );
 }
}

export default App;
