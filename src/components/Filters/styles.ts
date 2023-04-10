import styled from "styled-components";
import arrowup from "../../assets/icons/arrow-up.svg";

export const FiltersContainer = styled.section`
  background-color: var(--white);
  display: flex;
  justify-content: center;
`;

export const FiltersContent = styled.div`
  max-width: 56.25rem;
  width: 56.25rem;
  margin-top: 3.56rem;
  margin-bottom: 3.31rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 657px) {
    flex-direction: column;
    gap: 3.125rem;
  }

  @media (max-width: 900px) {
    width: 45.25rem;
  }
`;

export const Filter1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 13.68rem;

  img {
    width: 75px;
    height: 75px;
  }

  label {
    font-size: 0.875rem;
    line-height: 22px;
    margin-bottom: 1.5rem;
    margin-top: 0.25rem;
    color: #848484;
  }

  select {
    border: 1px solid #a8a8a8;
    border-radius: 1.187rem;
    padding: 10px;
    :focus {
      outline: none;
    }
  }
`;

export const Filter2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 13.68rem;

  img {
    width: 103px;
    height: 75px;
  }
  label {
    font-size: 0.875rem;
    line-height: 22px;
    margin-bottom: 1.5rem;
    margin-top: 0.25rem;
    color: #848484;
  }
  select {
    border: 1px solid #a8a8a8;
    border-radius: 19px;
    padding: 0.625rem;

    :focus {
      outline: none;
    }
  }
`;

export const Filter3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 13.68rem;

  img {
    margin-top: 9.5px;
    width: 4.68rem;
    height: 3.875rem;
  }

  label {
    font-size: 0.875rem;
    line-height: 22px;
    margin-bottom: 1.5rem;
    margin-top: 0.593rem;
    color: #848484;
  }

  select {
    border: 1px solid #a8a8a8;
    border-radius: 19px;
    padding: 0.625rem;

    :focus {
      outline: none;
    }
  }
`;

export const ResultsContainer = styled.section`
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
`;

export const ResultsContent = styled.div`
  max-width: 56.25rem;
  width: 56.25rem;
  min-height: 20.25rem;
`;

export const NoResultsContainer = styled.div`
  display: flex;

  @media (max-width: 657px) {
    display: block;
    margin: 0 auto;
  }

  @media (min-width: 658px) and (max-width: 900px) {
    padding-left: 5.5rem;
  }
`;

export const TextContent = styled.div`
  color: #a9a9a9;
  margin-top: 4.625rem;
  display: flex;
  flex-direction: column;
  width: 23.5rem;
  margin-right: 11rem;

  h1 {
    font-size: 2.8125rem;
    font-weight: 700;
    line-height: 54.86px;
  }

  p {
    width: 13.68rem;
    margin-top: 0.3rem;

    font-size: 1rem;
    font-weight: 400;
    line-height: 27px;
    margin-right: 20.687rem;
  }

  @media (max-width: 657px) {
    width: 15.5rem;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const NoResultsImg = styled.div`
  margin-top: 3.3rem;

  img {
    width: 104px;
    height: 203px;

    @media (max-width: 657px) {
      width: 85px;
      height: 164px;
    }
  }

  @media (max-width: 657px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.3rem;
    margin-bottom: 2rem;
  }
`;

export const ResultsFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultsHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  img {
    width: 158px;
    height: 78px;
    margin-top: 2.3125rem;
  }

  h1 {
    font-weight: 700;
    font-size: 3.4375rem;
    line-height: 67px;
    color: #0c261c;
    margin-top: 1.25rem;
    margin-bottom: 3.375rem;

    @media (max-width: 657px) {
      font-size: 2.5rem;
      line-height: 49px;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 657px) {
    width: 15.18rem;
  }

  @media (min-width: 658px) and (max-width: 900px) {
    padding-left: 7rem;
  }
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(206px, 1fr));
  gap: 1.25rem 1.5625rem;
  max-width: 100%;

  @media (max-width: 657px) {
    display: flex;
    overflow-x: auto;
    width: 258px;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background-color: #eaeaea;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 10px;
      width: 100px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #aaa;
    }
  }
`;

export const BackToTheTopButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.125rem;
  border: 1px solid var(--green-700);
  border-radius: 25px;
  cursor: pointer;
  margin-top: 3.68rem;
  margin-bottom: 8rem;
  background-color: transparent;

  font-weight: 300;
  font-size: 1rem;
  line-height: 20px;
  color: #196146;

  ::before {
    content: "";
    width: 1.375rem;
    height: 1.0625rem;
    background-image: url(${arrowup});
    background-repeat: no-repeat;
    margin-right: 1.09rem;
  }

  @media (max-width: 900px) {
    width: 92%;
  }
`;
