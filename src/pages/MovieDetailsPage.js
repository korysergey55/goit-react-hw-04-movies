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
    <MovieDetails {...this.props} filmId={this.props.match.params.movieId}/>

    <ul>
     {datailsRoute.map(({ name, exact, path }) => (
      <li key={path}>
       <NavLink
        className="linkDetails"
        activeClassName="linkDetailActiv"
        to={this.props.match.url + path}
        exact={exact}
       >
        {name}
       </NavLink>
      </li>
     ))}
    </ul>

    <Switch>
     {datailsRoute.map(({ component, exact, path }) => (
      <Route
       to={this.props.match.url + path}
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
