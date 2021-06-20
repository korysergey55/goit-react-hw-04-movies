import React, { Component } from "react";
import axios from "axios";

class Reviews extends Component {
 state = {
  casts: [],
 };
 componentDidMount() {
  this.getReviewsApi();
 }

 getReviewsApi = async () => {
  const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
  const BASE_URL = "https://api.themoviedb.org/3/";

  try {
   const movieReviewsApi = await axios.get(
    `${BASE_URL}movie/717192/reviews?api_key=${KEY}&language=en-US&page=1`
   );
   this.setState({ casts: movieReviewsApi.data });
  } catch (error) {
   console.log(error);
  }
 };
 render() {
  return (
   <>
    <p>Reviews</p>
   </>
  );
 }
}

export default Reviews;
