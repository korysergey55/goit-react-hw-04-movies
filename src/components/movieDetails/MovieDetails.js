import React, { Component } from "react";
import { MovieDetailsContainerStyled } from "./MovieDetailsStyled";
import axios from "axios";

class MovieDetails extends Component {
 state = {
  muvies: {},
  id: null,
 };

 componentDidMount() {
  this.getMovieDetailsApi();
 }

 getMovieDetailsApi = async () => {
  const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
  const BASE_URL = "https://api.themoviedb.org/3/";

  try {
   const movieDetailsApi = await axios.get(
    `${BASE_URL}movie/${this.props.filmId}?api_key=${KEY}&language=en-US`
   );
  this.setState({ muvies: movieDetailsApi.data });
  } catch (error) {
   console.log(error);
  }
 };

 render() {
  //  const genr = this.state.muvies.genres;

  return (
   <MovieDetailsContainerStyled>
    <button type="button" className="buttonGoback">
     Go back
    </button>
    <img
     className="movieDetailsImg"
     src={`https://image.tmdb.org/t/p/w300${this.state.muvies.poster_path} `}
     alt={this.state.muvies.title}
    />
    <li className="movieDetailsLi">
     <h2>
      {this.state.muvies.title} ({this.state.muvies.release_date})
     </h2>
     <p className="userScore">
      User score: {this.state.muvies.vote_average * 10} %
     </p>
     <h2>Overview</h2>
     <p>{this.state.muvies.overview}</p>
     <h2>Genres</h2>
     <p>{this.state.muvies.tagline}</p>
     {/* {genr.map((g) => (
      <li key={g.id}>
       <p>{g.name}</p>
      </li>
     ))} */}
    </li>
     <h2 className="movieDetailsAdditionalInformation">
      Additional information
     </h2>
   </MovieDetailsContainerStyled>
  );
 }
}

export default MovieDetails;
