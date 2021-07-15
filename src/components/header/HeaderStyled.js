import styled from "styled-components";

export const HeaderNavConteinerStyled = styled.nav`
 padding: 7px;
 border-bottom: 3px solid black;
 background-color: rgb(175, 114, 86);

 .NavLinkContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0;
 }
 .NavLink {
  margin-right: 30px;
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  text-shadow: 2px 2px 3px #ecffd1;
 }
 .NavLinkActiv {
  color: red;
 }
`;
