import React from "react";
import styled from "styled-components";

export interface ProductItemProps {
  name: string;
  price: number;
  imageUrl: string;
}

const Container = styled.div`
  background-color: var(--white);
  padding: 14px;
  width: 206px;
  border-radius: 5px;
`;

const ImgContainer = styled.div`
  background-color: coral;
  height: 164px;
  width: 165px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Name = styled.p`
  margin-top: 5px;
  color: #1e6b4e;
  font-weight: 700;
  font-size: 16px;
`;

const Price = styled.p`
  color: #1e6b4e;
  font-weight: 700;
  font-size: 16px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  div {
    img {
      margin-left: 8px;
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
