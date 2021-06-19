import React, { Component } from "react";
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
  const { id } = this.props;

  try {
   const movieDetailsApi = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
   );
   console.log(this.props.id);
   this.setState({ muvies: movieDetailsApi.data });
  } catch (error) {
   console.log(error);
  }
 };

 render() {
  //  const genrs = this.state.muvies.genres;

  return (
   <>
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
     {/* {genrs.map((genre) => (
      <li key={genre.id}>
       <p>{genre.name}</p>
      </li>
     ))} */}
    </li>
   </>
  );
 }
}

export default MovieDetails;
