import React, {Component} from 'react';
import axios from "axios";

class Cast extends Component {
 state = {
  casts: null,
 };

 componentDidMount() {
  this.getCastApi();
 }

 getCastApi = async () => {
  const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
  const BASE_URL = "https://api.themoviedb.org/3/";
//   const { id } = this.props;

  try {
   const movieCastsApi = await axios.get(
    `${BASE_URL}movie/717192/credits?api_key=${KEY}&language=en-US`
   );
//    console.log(this.props.id);
   this.setState({ casts: movieCastsApi.data });
  } catch (error) {
   console.log(error);
  }
 };
 render() {
  return (
   <>
    <p>CastComponent</p>
    {/* {this.state.casts.map((c) => (
   
      <>
      <p>{c.name}</p>
      <p>{c.name}</p>
     </> 
   
    ))} */}
   </>
  );
 }
}

export default Cast;