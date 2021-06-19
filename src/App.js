import React, { Component } from "react";
import { mainRouts } from "./routs/mainRouters";
import { NavLink, Route } from "react-router-dom";

class App extends Component {
 state = {
   
 };
 render() {
  return (
   <>
    <ul className="NavLinkContainer">
     {mainRouts.map(
      (rout) =>
       rout.isLink && (
        <li key={rout.path}>
         <NavLink
          to={rout.path}
          exact={rout.exact}
          className="NavLink"
          activeClassName="NavLinkActiv"
         >
          {rout.name}
         </NavLink>
        </li>
       )
     )}
    </ul>

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
