import React, { Component } from "react";
import axios from "axios";
import { CastContainerStyled } from "./CastStyled";
import defaultImg from "../../images/InkedcastDefaultFoto.jpg";

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
    `${BASE_URL}movie/${this.props.match.params.movieId}/credits?api_key=${KEY}&language=en-US`
   );

   this.setState({ casts: movieCastsApi.data.cast });
  } catch (error) {
   console.log(error);
  }
 };
 render() {
  console.log(this.state.casts);

  return (
   <CastContainerStyled>
    {this.state.casts.map((cast) => (
     <li key={cast.id} className="castItem">
      <p className="casActor">{cast.character ? cast.character : "Actor"}</p>
      <img
       src={
        cast.profile_path
         ? `https://image.tmdb.org/t/p/w92/${cast.profile_path}`
         : defaultImg
       }
       alt="castFoto"
       className="castFoto"
      ></img>
     </li>
    ))}
   </CastContainerStyled>
  );
 }
}

export default Cast;
