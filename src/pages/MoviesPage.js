import React from "react";
import Searchbar from "../components/searchbar/Searchbar";
import styles from "../pages/MoviesPageStyled.module.css";
const MoviesPage = () => {
 return (
  <>
   <div className={styles.MoviesPageContainer}>
    <Searchbar />
   </div>
  </>
 );
};

export default MoviesPage;
