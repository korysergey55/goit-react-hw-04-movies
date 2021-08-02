import styled from "styled-components";

export const TrandingContainerStyled = styled.div`
 padding-bottom: 15px;
 .trandingTodayTitle {
  margin-top: 0;
  margin-bottom: 15px;

  font-size: 25px;
  font-weight: 700;
  text-align: center;
  color: #b8d3f8;
  text-shadow: 2px 2px 3px rgba(71, 76, 64, 1);
 }
 .trandingTodayFilmContainer {
  padding-left: 5px;
  padding-right: 5px;

  .trandingTodayFilmLi {
   margin: 0 auto;
   width: 250px;
   margin-bottom: 20px;
   box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.12),
    0px 4px 4px rgba(255, 252, 252, 0.06), 1px 4px 6px rgba(255, 251, 251, 0.16);
   border-radius: 5px;

   .filmTrandingTodayImg {
    width: 100%;
    border-radius: 5px;
   }
  }
 }
 .showMore {
  display: block;
  margin: 0 auto;

  min-width: 100px;
  min-height: 40px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  background-color: #0227fa;
  background-color: #33fd00;

  &:hover {
   cursor: pointer;
  }
 }

 @media screen and (min-width: 768px) {
  padding-bottom: 20px;
  .trandingTodayTitle {
   margin-bottom: 25px;
   font-size: 35px;
  }
  .trandingTodayFilmContainer {
   padding-left: 20px;
   padding-right: 20px;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   flex-wrap: wrap;
   .trandingTodayFilmLi {
    width: 280px;
   }
  }
  .showMore {
   min-width: 120px;
   min-height: 40px;
   font-size: 15px;
  }
 }

 @media screen and (min-width: 1200px) {
  padding-bottom: 25px;
  .trandingTodayTitle {
   margin-bottom: 25px;
   font-size: 35px;
  }
  .trandingTodayFilmContainer {
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
  }
  .showMore {
   min-width: 150px;
   min-height: 40px;
   border-radius: 15px;
   font-size: 20px;
   font-weight: 700;
  }
 }
`;
