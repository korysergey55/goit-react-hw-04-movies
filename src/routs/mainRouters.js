import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";

export const mainRouts = [
 {
  name: "Home",
  path: "/",
  exact: true,
  component: HomePage,
  isLink: true,
 },
 {
  name: "Movies",
  path: "/movies",
  exact: true,
  component: MoviesPage,
  isLink: true,
 },
 {
  name: "MoviesDetailsPage",
  path: "/movies/:movieId",
  exact: true,
  component: MovieDetailsPage,
  isLink: false,
 },
];