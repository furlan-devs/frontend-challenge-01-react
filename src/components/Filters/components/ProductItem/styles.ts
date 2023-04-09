import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);

  padding: 0.875rem;
  width: 12.87rem;
  border-radius: 5px;
  @media (max-width: 657px) {
    width: 16.125rem;
    height: 20.063rem;
  }
`;

export const ImgContainer = styled.div`
  height: 10.25rem;
  width: 10.313rem;
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

export const Name = styled.p`
  margin-top: 5px;
  color: #1e6b4e;
  font-weight: 700;
  font-size: 1rem;
`;

export const Price = styled.p`
  color: #1e6b4e;
  font-weight: 700;
  font-size: 1rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;

  div {
    display: flex;
    align-items: center;

    img {
      margin-left: 0.5rem;
    }
  }
`;
