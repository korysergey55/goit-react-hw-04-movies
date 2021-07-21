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
  color: white;

  .userScore {
   font-weight: 500;
  }
  .title {
   font-size: 30px;
   font-weight: 700;
   text-decoration: none;
   /* text-shadow: 2px 2px 3px rgba(71, 76, 64, 1); */
   text-shadow: 2px 2px 3px #ecffd1;
   color: black;
  }
  .genres {
   font-size: 30px;
   font-weight: 700;
   text-decoration: none;
   /* text-shadow: 2px 2px 3px rgba(71, 76, 64, 1); */
   text-shadow: 2px 2px 3px #ecffd1;
   color: black;
  }
  .overview {
   font-size: 30px;
   font-weight: 700;
   text-decoration: none;
   /* text-shadow: 2px 2px 3px rgba(71, 76, 64, 1); */
   text-shadow: 2px 2px 3px #ecffd1;
   color: black;
  }
  .genrItem {
   list-style: none;

   .genrName {
    font-weight: 700;
   }
  }
 }

 .movieDetailsAdditionalInformation {
  display: block;
  margin-left: 20px;

  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  /* text-shadow: 2px 2px 3px rgba(71, 76, 64, 1); */
  text-shadow: 2px 2px 3px #ecffd1;
  color: black;
 }
`;
