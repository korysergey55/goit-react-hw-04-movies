import React, { Component } from "react";
import { TrandingContainerStyled } from "./TrandingStyled";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";

class Tranding extends Component {
 state = {
  muvies: [],
  page: 1,
 };

 componentDidMount() {
  this.getTrandingMuvieApi();
 }
//   componentDidUpdate(prevProps, prevState) {
//    this.getTrandingMuvieApi();
//   }

 getTrandingMuvieApi = async () => {
  const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
  const BASE_URL = "https://api.themoviedb.org/3/";

  try {
   const trandingApi = await axios.get(
    `${BASE_URL}movie/popular?api_key=${KEY}&language=en-US&page=${this.state.page}`
   );
   this.setState({ muvies: trandingApi.data.results });
  } catch (error) {
   console.log(error);
  }
 };
 
//  getShowMore = () => {
//   this.setState((prevState) => ({
//    page: prevState.page + 1,
//    muvies: [...prevState.muvies, this.state.muvies],
//   }));
//  };

 render() {
  return (
   <TrandingContainerStyled>
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
    <button type="button" className="showMore" onClick={this.getShowMore}>
     Show more
    </button>
   </TrandingContainerStyled>
  );
 }
}

export default Tranding;
