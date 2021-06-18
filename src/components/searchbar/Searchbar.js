import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Searchbar extends Component {
 state = {
  muvies: [],
  searchWord: "",
 };

//  componentDidUpdate(prevProps, prevState) {
//   if (this.searchWord) {
//    this.getSearchMuvieApi();
//   }
//  }

 getSearchMuvieApi = async () => {
  const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
  const BASE_URL = "https://api.themoviedb.org/3/";

  try {
   const dataSearch = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${this.state.searchWord}&language=en-US&page=1&include_adult=false`
   );
   this.setState({ muvies: dataSearch.data.results });
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
   <>
    <form className="SearchForm" onSubmit={this.hadleSubmit}>
     <input
      onChange={this.seveInputValue}
      className="SearchForm-input"
      type="text"
      name="searchWord"
      autocomplete="off"
      autofocus
      placeholder="Search muvies"
     />
     <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search muvies</span>
     </button>
    </form>
    <ul>
     <h2>Searchbar</h2>
     {this.state.muvies.map((muv) => (
      <li key={muv.id}>
       <p>{muv.title}</p>
       <img
        src={`https://image.tmdb.org/t/p/w200${muv.poster_path} `}
        alt={muv.title}
       />
      </li>
     ))}
    </ul>
   </>
  );
 }
}

export default Searchbar;
