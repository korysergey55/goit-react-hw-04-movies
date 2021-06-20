import styled from "styled-components";

export const HeaderNavConteinerStyled = styled.nav`
 border-bottom: 3px solid black;

 .NavLinkContainer {
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .NavLink {
  margin-right: 30px;
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  text-shadow: 2px 2px 3px rgba(71, 76, 64, 1);
 }
 .NavLinkActiv {
  color: red;
 }
`;
