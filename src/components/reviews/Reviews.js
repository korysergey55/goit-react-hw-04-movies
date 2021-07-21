import React, { Component } from "react";
import axios from "axios";
import { ReviewdConteinerStyled } from "./ReviewsStyled";

class Reviews extends Component {
 state = {
  reviews: [],
 };
 componentDidMount() {
  this.getReviewsApi();
 }

 getReviewsApi = async () => {
  const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
  const BASE_URL = "https://api.themoviedb.org/3/";

  try {
   const movieReviewsApi = await axios.get(
    `${BASE_URL}movie/${this.props.match.params.movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
   );
   this.setState({ reviews: movieReviewsApi.data.results });
  } catch (error) {
   console.log(error);
  }
 };
 render() {
  return (
   <ReviewdConteinerStyled>
    {this.state.reviews.map((review) =>
     review ? (
      <li className="reviewItem" key={review.id}>
       <p className="reviewAuthor">Author: {review.author}</p>
       <p className="reviewText">{review.content}</p>
      </li>
     ) : (
      "We dont hawe any reviws for this muvie"
     )
    )}
   </ReviewdConteinerStyled>
  );
 }
}

export default Reviews;
