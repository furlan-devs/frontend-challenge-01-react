import styled from "styled-components";

export const FilterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13.75rem;

  p {
    font-size: 0.875rem;
    line-height: 22px;
    margin-bottom: 1.5rem;
    margin-top: 0.25rem;
    color: #848484;
  }

  select {
    color: #333;
    border: 1px solid #a8a8a8;
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    :focus {
      outline: none;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 75px;

  img {
    height: 75px;
  }
`;
