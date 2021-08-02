import styled from "styled-components";

export const ReviewdConteinerStyled = styled.ul`
 padding-left: 10px;
 padding-right: 10px;
 .reviewItem {
  margin-bottom: 25px;
 }
 .reviewAuthor {
  font-size: 20px;
  font-weight: 500;
  text-shadow: 2px 2px 3px #ecffd1;
  color: black;
 }
 .reviewText {
  font-size: 14px;
  color: white;
 }

 @media screen and (min-width: 768px) {
  padding-left: 15px;
  padding-right: 15px;
 }
 
 @media screen and (min-width: 768px) {
  padding-left: 20px;
  padding-right: 20px;
  .reviewItem {
   margin-right: 20px;
   margin-bottom: 30px;
  }
  .reviewAuthor {
   font-size: 25px;
   font-weight: 500;
  }
 }
`;
