import styled from "styled-components";
export const CastContainerStyled = styled.ul`
 display: flax;
 justify-content: space-between;
 align-items: center;
 flex-wrap: wrap;
 padding-left: 0;
 .castItem {
  width: 150px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  list-style: none;
  font-weight: 500;
  color: white;
 }
 .castFoto {
  display: block;
  width: 100%;
 }

 @media screen and (min-width: 1200px) {
  .castItem {
   margin-bottom: 20px;
   width: 300px;
  }
  .castFoto {
   display: block;
   width: 150px;
  }
 }
`;
