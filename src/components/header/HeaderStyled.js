import styled from "styled-components";

export const HeaderNavConteinerStyled = styled.nav`
 padding: 7px;
 border-bottom: 3px solid white;
 background-image: url("./images/cinemaBG.jpg");
 background-repeat: no-repeat;
 background-size: cover;

 .NavLinkContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
 }
 .NavLink {
  margin-right: 25px;
  font-size: 25px;
  font-weight: 700;
  text-decoration: none;
  text-shadow: 2px 2px 3px #ecffd1;
 }
 .NavLinkActiv {
  color: red;
 }

 @media screen and (min-width: 768px) {
  .NavLink {
   margin-right: 30px;
   font-size: 30px;
  }
 }
 @media screen and (min-width: 1200px) {
  .NavLink {
   margin-right: 35px;
   font-size: 35px;
  }
 }
`;
