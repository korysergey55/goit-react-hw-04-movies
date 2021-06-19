import React from "react";
import MovieDetails from "../components/movieDetails/MovieDetails";
import { detailRoute } from "../routs/datailsRouter";
import { NavLink, Switch, Route } from "react-router-dom";

const MovieDetailsPage = ({match}) => {
 const { movieId } = match.params;
 
 console.log(match);

 return (
  <>
   <MovieDetails id={movieId} />

   <h2 className="MovieDetailsAdditionalInformation">
    Additional information
   </h2>
   {detailRoute.map(({ name, exact, path }) => (
    <li key={path}>
     <NavLink to={match.url + path} exact={exact}>
      {name}
     </NavLink>
    </li>
   ))}

   <Switch>
    {detailRoute.map(({ component, exact, path }) => (
     <Route
      to={match.path + path}
      exact={exact}
      component={component}
      key={path}
     />
    ))}
   </Switch>
  </>
 );
};

export default MovieDetailsPage;
