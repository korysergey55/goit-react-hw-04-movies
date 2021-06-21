import React, { Component } from "react";
import { SearchBarConteinerStyled } from "./SearchbarStyled";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import defaultImgTranding from "../../images/defaultfoto.jpg";

class Searchbar extends Component {
 state = {
  muvies: [],
  searchWord: "",
 };

 getSearchMuvieApi = async () => {
  const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
  const BASE_URL = "https://api.themoviedb.org/3/";

  try {
   const searchApi = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${this.state.searchWord}&language=en-US&page=1&include_adult=false`
   );
   this.setState({ muvies: searchApi.data.results });
  } catch (error) {
   console.log(error);
  }
 };

 hadleSubmit = (evt) => {
  evt.preventDefault();
  this.getSearchMuvieApi();
 };

 seveInputValue = (evt) => {
  this.setState({ [evt.target.name]: evt.target.value });
 };

 render() {
  return (
   <SearchBarConteinerStyled>
    <form className="SearchForm" onSubmit={this.hadleSubmit}>
     <input
      onChange={this.seveInputValue}
      className="SearchFormInput"
      type="text"
      name="searchWord"
      autocomplete="off"
      autofocus
      placeholder=" Enter movie heare"
     />
     <button type="submit" className="SearchFormButton">
      <span className="SearchForm-button-label">Search</span>
     </button>
    </form>
    <ul className="searchFilmContainer">
     {this.state.muvies.map((muv) => (
      <Link to={`/movies/${muv.id}`}>
       <li key={muv.id} className="searchFilmLi">
        <img
         className="filmSearchImg"
         src={muv.poster_path ? `https://image.tmdb.org/t/p/w300${muv.poster_path} ` : defaultImgTranding}
         alt={muv.title}
        />
       </li>
      </Link>
     ))}
    </ul>
   </SearchBarConteinerStyled>
  );
 }
}


export default Searchbar;
