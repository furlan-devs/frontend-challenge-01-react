import styled from "styled-components";
import arrowup from "../../assets/icons/arrow-up.svg";

export const FiltersContainer = styled.section`
  background-color: var(--white);
  display: flex;
  justify-content: center;
`;

export const ResultsContainer = styled.section`
  background-color: var(--gray-200);
  display: flex;
  justify-content: center;
`;

export const FiltersContent = styled.div`
  max-width: 899px;
  width: 899px;
  margin-top: 57px;
  margin-bottom: 53px;
  display: flex;
  align-items: center;
  background-color: yellow;
  justify-content: space-between;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const ResultsContent = styled.div`
  max-width: 899px;
  width: 899px;

  display: flex;

  min-height: 324px;
`;

export const NoResultsImg = styled.img`
  width: 104.7px;
  height: 203.27px;
  margin-top: 52.84px;
`;

export const Filter1 = styled.div`
  background-color: coral;
  display: flex;
  flex-direction: column;
  width: 219px;

  img {
    width: 75px;
    height: 75px;
  }
  label {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
    margin-top: 6px;
    color: #848484;
  }

  select {
    border: 1px solid #a8a8a8;
    border-radius: 19px;
    padding: 10px;
    :focus {
      outline: none;
    }
  }
`;

export const Filter2 = styled.div`
  background-color: coral;
  display: flex;
  flex-direction: column;
  width: 219px;

  img {
    width: 103px;
    height: 75px;
  }
  label {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
    margin-top: 6px;
    color: #848484;
  }
  select {
    border: 1px solid #a8a8a8;
    border-radius: 19px;
    padding: 10px;

    :focus {
      outline: none;
    }
  }
`;
export const Filter3 = styled.div`
  background-color: coral;
  display: flex;
  flex-direction: column;
  width: 219px;

  img {
    margin-top: 9.5px;
    width: 75px;
    height: 62px;
  }
  label {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
    margin-top: 9.5px;
    color: #848484;
  }
  select {
    border: 1px solid #a8a8a8;
    border-radius: 19px;
    padding: 10px;

    :focus {
      outline: none;
    }
  }
`;

export const TextContent = styled.div`
  color: #a9a9a9;
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  background-color: green;

  h1 {
    font-size: 45px;
    font-weight: 700;
    line-height: 54.86px;
  }

  p {
    width: 219px;
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    margin-right: 331px;
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
    margin-top: 37px;
  }
  h1 {
    font-weight: 700;
    font-size: 55px;
    line-height: 67px;
    color: #0c261c;
    margin-top: 20px;
    margin-bottom: 54px;
  }
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(206px, 1fr));
  gap: 20px 25px;
  max-width: 100%;
`;

export const BackToTheTopButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 899px;
  height: 50px;
  border: 1px solid #15573f;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 59px;
  margin-bottom: 128px;

  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #196146;

  ::before {
    content: "";
    width: 22px;
    height: 17px;
    background-image: url(${arrowup});
    background-repeat: no-repeat;
    margin-right: 17.5px;
  }
`;
