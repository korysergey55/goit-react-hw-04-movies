import React, { Component } from "react";
import { TrandingContainerStyled } from "./TrandingStyled";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import defaultImgTranding from "../../images/defaultfoto.jpg";

class Tranding extends Component {
 state = {
  muvies: [],
  page: 1,
 };

 componentDidMount() {
  this.getTrandingMuvieApi();
 }
 componentDidUpdate(prevProps, prevState) {
  if (this.state.page !== prevState.page) {
   this.getTrandingMuvieApi();
  }
 }

 getTrandingMuvieApi = async () => {
  const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
  const BASE_URL = "https://api.themoviedb.org/3/";

  try {
   const trandingApi = await axios.get(
    `${BASE_URL}movie/popular?api_key=${KEY}&language=en-US&page=${this.state.page}`
   );
    this.setState(({ muvies }) => ({
     muvies: [...muvies, ...trandingApi.data.results],
    }));
   } catch (error) {
   console.log(error);
  }
 };

  getShowMore = () => {
   this.setState((prevState) => ({
    page: prevState.page + 1,
   }));
  };

 render() {
  return (
   <TrandingContainerStyled>
    <h2 className="trandingTodayTitle">Tranding today</h2>
    <ul className="trandingTodayFilmContainer">
     {this.state.muvies.map((muv) => (
      <Link
       to={{
        pathname: `/movies/${muv.id}`,
        from: this.props.location.pathname,
       }}
      >
       <li key={muv.id} className="trandingTodayFilmLi">
        <img
         className="filmTrandingTodayImg"
         src={
          muv.poster_path
           ? `https://image.tmdb.org/t/p/w300${muv.poster_path}`
           : defaultImgTranding
         }
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

export default withRouter(Tranding);
