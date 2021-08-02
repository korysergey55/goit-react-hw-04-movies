import styled from "styled-components";

export const MovieDetailsContainerStyled = styled.div`
 .buttonGoback {
  display: block;
  min-width: 70px;
  min-height: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  background-color: rgb(82, 248, 4);
   box-shadow: 2px 2px 3px #ecffd1;
 }
 .buttonGoback:hover {
  background-color: rgb(0, 255, 42);
  cursor: pointer;
 }
 .movieDetailsImg {
  display: block;
  margin: 0 auto;
  
  max-width: 250px;
  border-radius: 5px;
 }

 .movieDetailsLi {
  display: block;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  color: white;

  .userScore {
   font-weight: 500;
   text-shadow: 2px 2px 3px #ecffd1;
  }
  .title {
   margin-bottom: 0;
   margin-top: 10px;
   font-size: 28px;
   font-weight: 700;
   text-decoration: none;
   text-shadow: 2px 2px 3px #ecffd1;
   color: black;
  }
  .genres {
   font-size: 25px;
   font-weight: 700;
   text-decoration: none;
   text-shadow: 2px 2px 3px #ecffd1;
   color: black;
  }
  .overview {
   font-size: 25px;
   font-weight: 700;
   text-decoration: none;
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
  margin-left: 15px;
  margin-bottom: 0;
  font-size: 25px;
  font-weight: 700;
  text-decoration: none;
  text-shadow: 2px 2px 3px #ecffd1;
  color: black;
 }

 @media screen and (min-width: 768px) {
  .buttonGoback {
   min-width: 90px;
   min-height: 20px;
   margin-bottom: 10px;
   margin-top: 10px;
   margin-left: 15px;
   font-size: 18px;
  }
  .movieDetailsImg {
   margin: 0;
   margin-left: 15px;
   max-width: 280px;
  }
  .movieDetailsLi {
   padding-left: 15px;
   padding-right: 15px;

   .title {
    margin-bottom: 0;
    margin-top: 15px;
    font-size: 30px;
   }
  }
 }

 @media screen and (min-width: 1200px) {
  .buttonGoback {
   margin-top: 20px;
   margin-bottom: 0;
   font-size: 20px;
  }
  .movieDetailsImg {
   display: inline-block;
   margin-top: 20px;
   border-radius: 5px;
   margin-left: 20px;
   margin-right: 20px;
  }
  .movieDetailsLi {
   display: inline-block;
   width: 700px;

   .title {
    margin-bottom: 0;
    margin-top: 20px;
    font-size: 35px;
   }
   .genres {
    font-size: 30px;
   }
   .overview {
    font-size: 30px;
   }
  }

  .movieDetailsAdditionalInformation {
   margin-left: 20px;
   font-size: 30px;
  }
 }
`;
