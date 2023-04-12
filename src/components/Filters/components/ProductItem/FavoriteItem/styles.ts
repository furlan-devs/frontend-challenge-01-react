import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  width: 437px;
  height: 510px;
  border-radius: 5px;
  padding: 1.75rem;
  grid-row: span 2;
  grid-column: span 2;

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 657px) {
    width: 16.125rem;
    height: 20.063rem;
    padding: 1rem;
  }
`;

export const FavoriteHighlight = styled.div`
  p {
    position: relative;
    left: -28px;
    width: 190px;
    height: 43px;
    background-color: var(--green-400);
    color: white;
    font-weight: 700;
    font-size: 21px;
    border-radius: 0px 50px 50px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    @media (max-width: 657px) {
      font-size: 1rem;
      left: -16px;
      top: 35px;
      width: 150px;
      height: 33px;
      opacity: 0.8;
    }

    img {
      width: 20px;
    }
  }
`;

export const ImgContainer = styled.div`
  margin: 0 auto;

  @media (max-width: 657px) {
    height: 13.25rem;
    width: 13.568rem;
    margin-bottom: 2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;

  @media (max-width: 657px) {
    margin-bottom: 30px;
  }

  div {
    display: flex;
    align-items: center;

    img {
      margin-left: 0.5rem;
    }
  }
`;

export const Name = styled.p`
  color: #1e6b4e;
  font-weight: 700;
  font-size: 2.1875rem;
  line-height: 37px;

  @media (max-width: 657px) {
    font-size: 1.2rem;
    line-height: 25px;
  }
`;

export const PriceAndIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.p`
  color: #1e6b4e;
  font-weight: 700;
  font-size: 1.5rem;
  margin-left: auto;
  margin-bottom: 16px;

  @media (max-width: 657px) {
    font-weight: 700;
    font-size: 1rem;
    margin-left: auto;
    margin-bottom: 10px;
  }
`;

export const Icons = styled.div`
  img {
    height: 28px;

    @media (max-width: 657px) {
      height: 18px;
    }
  }
`;
