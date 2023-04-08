import styled from "styled-components";
import left from "../../assets/hero/desktop/left-leaves.png";
import mid from "../../assets/hero/desktop/plantperson.png";
import right from "../../assets/hero/desktop/right-leaves.png";

export const HeaderContainer = styled.header`
  height: 500px;
  background-color: var(--green-400);
  justify-content: center;
  display: flex;

  > img:nth-child(2) {
    height: 428px;
    margin-top: 36px;
  }
`;

export const HeaderContent = styled.div`
  position: absolute;
  max-width: 899px;
  width: 899px;
  margin-top: 58.42px;
  margin-bottom: 54px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    color: var(--white);
    margin-top: 41px;
    margin-bottom: 26px;
    width: 400px;
    font-weight: 700;
    font-size: 70px;
    line-height: 85px;
  }

  img:nth-child(3) {
    width: 35px;
    height: 39px;
    margin-left: 0px;
  }
`;
