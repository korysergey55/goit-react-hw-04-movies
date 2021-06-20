import React, { Component } from "react";
import axios from "axios";

class Cast extends Component {
 state = {
  casts: [],
 };

 componentDidMount() {
  this.getCastApi();
 }

 getCastApi = async () => {
  const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
  const BASE_URL = "https://api.themoviedb.org/3/";

  try {
   const movieCastsApi = await axios.get(
    `${BASE_URL}movie/717192/credits?api_key=${KEY}&language=en-US`
   );

   this.setState({ casts: movieCastsApi.data.cast });
   
  } catch (error) {
   console.log(error);
  }
 };
 render() {
  return (
   <>
    <p>CastComponent</p>
    {this.state.casts.map((cast) => (
     <li key={cast.id}>
      <p>{cast.character}</p>
      <img src={`https://image.tmdb.org/t/p/w300${cast.avatar_path}`}></img>
     </li>
    ))}
   </>
  );
 }
}

export default Cast;
