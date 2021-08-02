import React, { Component } from "react";
import MovieDetails from "../components/movieDetails/MovieDetails";
import { datailsRoute } from "../routs/datailsRouter";
import { NavLink, Switch, Route, withRouter } from "react-router-dom";

class MovieDetailsPage extends Component {
 state = {
  from: "",
 };

 render() {
  return (
   <>
    <MovieDetails {...this.props} />

    <ul className="linkDetailsContainer">
     {datailsRoute.map(({ name, exact, path }) => (
      <li key={path}>
       <NavLink
        to={this.props.match.url + path}
        exact={exact}
        className="linkDetails"
        activeClassName="linkDetailActiv"
       >
        {name}
       </NavLink>
      </li>
     ))}
    </ul>

    <Switch>
     {datailsRoute.map(({ component, exact, path }) => (
      <Route
       path={this.props.match.path + path}
       exact={exact}
       component={component}
       key={path}
      />
     ))}
    </Switch>
   </>
  );
 }
}

export default withRouter(MovieDetailsPage);
