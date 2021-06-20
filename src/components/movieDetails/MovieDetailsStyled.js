import styled from "styled-components";

export const MovieDetailsContainerStyled = styled.div`
 .buttonGoback {
  display: block;
  width: 100px;
  height: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 500;

  &:hover {
   cursor: pointer;
   background-color: springgreen;
  }
 }

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

 .movieDetailsAdditionalInformation {
  display: block;
  margin-left: 20px;
 }
`;
