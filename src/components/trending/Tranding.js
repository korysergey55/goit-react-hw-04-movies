import React, {Component} from 'react';
import PropTypes from "prop-types";
import axios from "axios";

class Tranding extends Component {
 state = {
  muvies: [],
  searchWord: "",
 };

 componentDidMount() {
  this.handleSearchMuvie();
 }
 componentDidUpdate(prevProps, prevState) {
  this.handleSearchMuvie();
 }

 handleSearchMuvie = async () => {
  const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
  const BASE_URL = "https://api.themoviedb.org/3/";

  try {
   const { data } = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${KEY}`
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
     <li key={muv.id}>{muv.title}</li>
    ))}
   </ul>
  );
 }
}

export default Tranding;