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
  max-width: 56.25rem;
  width: 56.25rem;
  margin-top: 3.651rem;
  margin-bottom: 3.375rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 900px) {
    width: 45rem;
  }

  @media (min-width: 658px) and (max-width: 740px) {
    width: 40rem;
  }

  @media (max-width: 657px) {
    width: 14rem;
  }

  h1 {
    color: var(--white);
    margin-top: 2.563rem;
    margin-bottom: 1.625rem;
    width: 25rem;
    font-weight: 700;
    font-size: 4.375rem;
    line-height: 85px;

    @media (max-width: 657px) {
      font-size: 2.5rem;
      line-height: 49px;
      width: 15rem;
    }
  }

  img:nth-child(3) {
    width: 35px;
    height: 39px;
    margin-left: 0px;
  }
`;
