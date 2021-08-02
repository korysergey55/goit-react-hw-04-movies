import React, { Component } from "react";
import { SearchBarConteinerStyled } from "./SearchbarStyled";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import defaultImgTranding from "../../images/defaultfoto.jpg";

class Searchbar extends Component {
 state = {
  muvies: [],
  searchWord: "",
 };

 componentDidMount() {
  const params = new URLSearchParams(this.props.location.search);
  const searchQuery = params.get("query");
  if (searchQuery) {
   this.setState({ searchWord: searchQuery });
  }
 }

 componentDidUpdate(prevProps, prevState) {
  if (this.state.searchWord !== prevState.searchWord) {
   this.getSearchMuvieApi();
  }
 }

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
  if (this.state.muvies.length < 1) {
   alert("There are no films with that name");
  }
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
      value={this.state.searchWord}
      autoComplete="off"
      autoFocus
      placeholder=" Enter movie "
     />
     <button type="submit" className="SearchFormButton">
      <span className="SearchForm-button-label">Search</span>
     </button>
    </form>
    <ul className="searchFilmContainer">
     {this.state.muvies.map((muv) => (
      <Link
       to={{
        pathname: `/movies/${muv.id}`,
        from: this.props.location.pathname,
        search: `?query=${this.state.searchWord}`,
        // state: this.props.location.state,
       }}
       key={muv.id}
      >
       <li className="searchFilmLi">
        <img
         className="filmSearchImg"
         src={
          muv.poster_path
           ? `https://image.tmdb.org/t/p/w300${muv.poster_path} `
           : defaultImgTranding
         }
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

export default withRouter(Searchbar);
