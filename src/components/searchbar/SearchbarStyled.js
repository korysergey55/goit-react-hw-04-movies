import styled from "styled-components";

export const SearchBarConteinerStyled = styled.div`
 .SearchFormInput {
  display: block;
  min-width: 100px;
  min-height: 30px;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 20px;
  padding-left: 20px;

  font-size: 15px;
  font-weight: 500;
  border-radius: 12px;
  outline: none;
 }
 .SearchFormButton {
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 30px;
  border-radius: 7px;
  font-size: 15px;
  font-weight: 700;
  background-color: #006eff;
  color: white;

  &:hover {
   cursor: pointer;
   background-color: #7bff00;
   color: black;
  }
 }
 .searchFilmContainer {
  padding-left: 5px;
  padding-right: 5px;

  .searchFilmLi {
   margin: 0 auto;
   width: 250px;
   margin-bottom: 20px;
   box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.12),
    0px 4px 4px rgba(255, 252, 252, 0.06), 1px 4px 6px rgba(255, 251, 251, 0.16);
   border-radius: 5px;
  }
  .filmSearchImg {
   width: 100%;
   border-radius: 5px;
  }
 }

 @media screen and (min-width: 768px) {
  .SearchFormInput {
   display: inline-block;
   margin-top: 15px;
   margin-left: 25%;
   margin-right: 10px;
   min-width: 150px;
   min-height: 35px;
  }
  .SearchFormButton {
   display: inline-block;
   min-width: 150px;
   min-height: 40px;
  }
  .searchFilmContainer {
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-wrap: wrap;
   padding-right: 15px;
   padding-left: 15px;

   .searchFilmLi {
    width: 280px;
    margin-bottom: 20px;
   }
  }
 }
 @media screen and (min-width: 1200px) {
  .SearchFormInput {
   display: inline-block;
   margin-top: 15px;
   margin-left: 35%;
   margin-right: 10px;
   width: 300px;
   height: 40px;
   padding-left: 30px;
   font-size: 20px;
  }
  .SearchFormButton {
   display: inline-block;
   min-width: 150px;
   min-height: 40px;
   font-size: 20px;
  }
  .searchFilmContainer {
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;

   .searchFilmLi {
    margin-bottom: 20px;
   }
  }
 }
`;
