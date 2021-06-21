import React, { Component } from "react";
import { MovieDetailsContainerStyled } from "./MovieDetailsStyled";
import defaultImgTranding from "../../images/defaultfoto.jpg";
import axios from "axios";

class MovieDetails extends Component {
 state = {
  muvies: {},

  from: "",
 };

 componentDidMount() {
  this.getMovieDetailsApi();
//   if (this.props.location.state) {
//    this.setState({ from: this.props.props.location.state });
//   }
    this.setState({ from: this.props.props.location.state });
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

 goBack = () => {
  this.props.props.history.push({ pathname: this.state.from });
 };

 render() {
  //   const genr = this.state.muvies.genres;
  //   console.log(genr);
  console.log(this.props);

  return (
   <MovieDetailsContainerStyled>
    <button type="button" className="buttonGoback" onClick={this.goBack}>
     Go back
    </button>
    <img
     className="movieDetailsImg"
     src={this.state.muvies.poster_path ? `https://image.tmdb.org/t/p/w300${this.state.muvies.poster_path} ` : defaultImgTranding}
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
