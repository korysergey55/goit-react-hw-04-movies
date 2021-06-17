import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Searchbar extends Component {
 state = {
  muvies: [],
  searchWord: "",
 };

 hadleSubmit = (evt) => {
  evt.preventDefault();
 };
 seveInputValue = (evt) => {
     this.setState({[evt.target.name]: evt.target.value})
 }
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
      <span className="SearchForm-button-label">Search</span>
     </button>
    </form>
   </>
  );
 }
}

export default Searchbar;
