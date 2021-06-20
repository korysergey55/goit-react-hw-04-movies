import styled from "styled-components";

export const SearchBarConteinerStyled = styled.div`
 .SearchFormInput {
  display: inline-block;
  margin-top: 15px;
  margin-left: 35%;
  margin-right: 10px;
  width: 300px;
  height: 40px;
  padding-left: 30px;
  border-radius: 15px;
  outline: none;
  font-size: 20px;
  font-weight: 500;
 }
 .SearchFormButton {
  width: 150px;
  height: 40px;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 700;

  &:hover {
   cursor: pointer;
   background-color: springgreen;
  }
 }
 .searchFilmContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .searchFilmLi {
   margin-bottom: 20px;
   box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.12),
    0px 4px 4px rgba(255, 252, 252, 0.06), 1px 4px 6px rgba(255, 251, 251, 0.16);
   border-radius: 5px;

   .filmSearchImg {
    border-radius: 5px;
   }
  }
 }
`;
