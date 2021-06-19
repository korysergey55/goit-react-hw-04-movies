import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

class Tranding extends Component {
 state = {
  muvies: [],
 };

 componentDidMount() {
  this.getTrandingMuvieApi();
 }

 getTrandingMuvieApi = async () => {
  const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
  const BASE_URL = "https://api.themoviedb.org/3/";

  try {
   const trandingApi = await axios.get(
    `${BASE_URL}movie/popular?api_key=${KEY}&language=en-US&page=1`
   );
   this.setState({ muvies: trandingApi.data.results });
  } catch (error) {
   console.log(error);
  }
 };
 render() {
  return (
   <>
    <h2 className="trandingTodayTitle">Tranding today</h2>
    <ul className="trandingTodayFilmContainer">
     {this.state.muvies.map((muv) => (
      <Link to={`/movies/${muv.id}`}>
       <li key={muv.id} className="trandingTodayFilmLi">
        <img
         className="filmTrandingTodayImg"
         src={`https://image.tmdb.org/t/p/w300${muv.poster_path} `}
         alt={muv.title}
        />
       </li>
      </Link>
     ))}
    </ul>
   </>
  );
 }
}

export default Tranding;
