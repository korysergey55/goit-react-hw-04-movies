import styled from "styled-components";

export const MovieDetailsContainerStyled = styled.div`
 .movieDetailsImg {
  display: inline-block;
  border-radius: 5px;
  margin-left: 20px;
  margin-right: 20px;
 }
 .movieDetailsLi {
  display: inline-block;
  width: 700px;

  .userScore {
   font-weight: 500;
  }
 }
 .genrItem {
  list-style: none;

  .genrName {
   font-weight: 500;
   color: green;
  }
 }
 .movieDetailsAdditionalInformation {
  display: block;
  margin-left: 20px;
 }
`;
