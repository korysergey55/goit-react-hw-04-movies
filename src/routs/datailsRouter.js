import Cast from "../components/cast/Cast";
import Reviews from "../components/reviews/Reviews";

export const datailsRoute = [
 {
  name: "Cast",
  path: "/cast",
  exact: true,
  component: Cast,
 },
 {
  name: "Reviews",
  path: "/reviews",
  exact: true,
  component: Reviews,
 },
];