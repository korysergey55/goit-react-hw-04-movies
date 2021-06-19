import CastPage from "../pages/CastPage";
import ReviewsPage from "../pages/ReviewsPage";

export const detailRoute = [
 {
  name: "Cast",
  path: "/movies/:movieId/cast",
  exact: true,
  component: CastPage,
 },
 {
  name: "Reviews",
  path: "/movies/:movieId/reviews",
  exact: true,
  component: ReviewsPage,
 },
];