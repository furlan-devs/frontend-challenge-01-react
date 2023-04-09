import React from "react";
import styled from "styled-components";

export interface ProductItemProps {
  name: string;
  price: number;
  imageUrl: string;
}

const Container = styled.div`
  background-color: var(--white);
  padding: 0.875rem;
  width: 12.87rem;
  border-radius: 5px;
  @media (max-width: 657px) {
    width: 16.125rem;
    height: 20.063rem;
  }
`;

const ImgContainer = styled.div`
  background-color: coral;
  height: 10.25rem;
  width: 10.313rem;
  margin: 0 auto;

  @media (max-width: 657px) {
    height: 13.25rem;
    width: 13.568rem;
    margin-bottom: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Name = styled.p`
  margin-top: 5px;
  color: #1e6b4e;
  font-weight: 700;
  font-size: 1rem;
`;

const Price = styled.p`
  color: #1e6b4e;
  font-weight: 700;
  font-size: 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;

  div {
    img {
      margin-left: 0.5rem;
    }
  }
`;

const Favorite = styled.p``;

export const ProductItem: React.FC<ProductItemProps> = ({
  name,
  price,
  imageUrl,
}) => {
  return (
    <Container>
      <ImgContainer>
        <Image src={imageUrl} alt={name} />
      </ImgContainer>
      <Name>{name}</Name>
      <IconContainer>
        <Price>$ {price}</Price>
        <div>
          <img src="\src\assets\icons\pet.svg" alt="" />
          <img src="\src\assets\icons\pet.svg" alt="" />
          <img src="\src\assets\icons\pet.svg" alt="" />
        </div>
      </IconContainer>
    </Container>
  );
};
