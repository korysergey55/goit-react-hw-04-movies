import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class Tranding extends Component {
 state = {
  muvies: [],
};

 componentDidMount() {
  this.getTrandingMuvieApi();
 }
//  componentDidUpdate(prevProps, prevState) {
//   this.handleTrandingMuvie();
//  }

 getTrandingMuvieApi = async () => {
  const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
  const BASE_URL = "https://api.themoviedb.org/3/";

  try {
   const { data } = await axios.get(
    `${BASE_URL}movie/popular?api_key=${KEY}&language=en-US&page=1`
   );
   this.setState({ muvies: data.results });
  } catch (error) {
   console.log(error);
  }
 };
 render() {
  return (
   <ul>
    <h2>Trending-Day</h2>
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
  );
 }
}

export default Tranding;
