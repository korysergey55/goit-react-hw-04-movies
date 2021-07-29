import styled from "styled-components";

export const TrandingContainerStyled = styled.div`
 .trandingTodayTitle {
  margin-top: 0;
  margin-bottom: 25px;
  color: #b8d3f8;
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  text-shadow: 2px 2px 3px rgba(71, 76, 64, 1);
 }
 .trandingTodayFilmContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .trandingTodayFilmLi {
   margin-bottom: 20px;
   box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.12),
    0px 4px 4px rgba(255, 252, 252, 0.06), 1px 4px 6px rgba(255, 251, 251, 0.16);
   border-radius: 5px;

   .filmTrandingTodayImg {
    border-radius: 5px;
   }
  }
 }
 .showMore {
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 150px;
  height: 40px;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 700;
  background-color: #0227fa;
  background-color: #33fd00;

  &:hover {
   cursor: pointer;
  }
 }
`;
