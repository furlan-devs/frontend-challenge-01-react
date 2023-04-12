import styled from "styled-components";

export const SpinnerContainer = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  display: flex;
`;

export const LoadingSpinner = styled.div`
  width: 65px;
  height: 65px;
  border: 10px solid lightgray;
  border-top: 10px solid var(--green-700);
  border-radius: 50%;
  animation: spinner 1s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
