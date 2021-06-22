import React, { Component } from "react";
import { MovieDetailsContainerStyled } from "./MovieDetailsStyled";
import defaultImgTranding from "../../images/defaultfoto.jpg";
import axios from "axios";

class MovieDetails extends Component {
 state = {
  muvies: {},
  genres: [],
  from: "",
  search: ""
 };

 componentDidMount() {
  this.getMovieDetailsApi();

   if (this.props.location.from) {
   this.setState({
    from: this.props.location.from,
    search: this.props.location.search,
    });
  } 
 }

 getMovieDetailsApi = async () => {
  const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
  const BASE_URL = "https://api.themoviedb.org/3/";

  try {
   const movieDetailsApi = await axios.get(
    `${BASE_URL}movie/${this.props.filmId}?api_key=${KEY}&language=en-US`
   );
   this.setState({
    muvies: movieDetailsApi.data,
    genres: movieDetailsApi.data.genres,
   });
  } catch (error) {
   console.log(error);
  }
 };

 goBack = () => {
  
   console.log(this.props.location);
  this.props.history.push({
     pathname: this.props.location.from,
   search: this.props.location.search,
  });
 };

 render() {
 
  return (
   <MovieDetailsContainerStyled>
    <button
     type="button"
     className="buttonGoback"
     onClick={this.goBack}
     disabled={!this.state.from}
    >
     Go back
    </button>
    <img
     className="movieDetailsImg"
     src={
      this.state.muvies.poster_path
       ? `https://image.tmdb.org/t/p/w300${this.state.muvies.poster_path} `
       : defaultImgTranding
     }
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
     {this.state.genres.map((genr) => (
      <li key={genr.id} className="genrItem">
       <p className="genrName">{genr.name}</p>
      </li>
     ))}
    </li>
    <h2 className="movieDetailsAdditionalInformation">
     Additional information
    </h2>
   </MovieDetailsContainerStyled>
  );
 }
}

export default MovieDetails;
