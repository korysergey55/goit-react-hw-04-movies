import React, { Component } from "react";
import MovieDetails from "../components/movieDetails/MovieDetails";
import { datailsRoute } from "../routs/datailsRouter";
import { NavLink, Switch, Route } from "react-router-dom";

class MovieDetailsPage extends Component {
 state = { from: "", movieID: "", film: {}, search: "" };

 render() {
  
  return (
   <>
    <MovieDetails filmId={this.props.match.params.movieId} />

    {datailsRoute.map(({ name, exact, path }) => (
     <li key={path}>
      <NavLink to={this.props.match.url + path} exact={exact}>
       {name}
      </NavLink>
     </li>
    ))}

    <Switch>
     {datailsRoute.map(({ component, exact, path }) => (
      <Route
       to={this.props.match.path + path}
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

export default MovieDetailsPage;


