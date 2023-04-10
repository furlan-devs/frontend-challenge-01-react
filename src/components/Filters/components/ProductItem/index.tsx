import React from "react";
import * as S from "./styles";
import { ProductItemProps } from "./types";

export const ProductItem: React.FC<ProductItemProps> = ({
  name,
  price,
  imageUrl,
}) => {
  return (
    <S.Container data-testid="product-item-container">
      <S.ImgContainer>
        <S.Image src={imageUrl} alt={name} data-testid="product-item-image" />
      </S.ImgContainer>
      <S.Name data-testid="product-item-name">{name}</S.Name>
      <S.DetailsContainer>
        <S.Price data-testid="product-item-price">$ {price}</S.Price>
        <div data-testid="product-item-icons">
          <img src="\src\assets\icons\pet.svg" alt="" />
          <img src="\src\assets\icons\toxic.svg" alt="" />
          <img src="\src\assets\icons\no-sun.svg" alt="" />
        </div>
      </S.DetailsContainer>
    </S.Container>
  );
};
