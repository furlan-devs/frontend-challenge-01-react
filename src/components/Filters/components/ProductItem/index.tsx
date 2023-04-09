import React from "react";
import * as S from "./styles";
import { ProductItemProps } from "./types";

export const ProductItem: React.FC<ProductItemProps> = ({
  name,
  price,
  imageUrl,
}) => {
  return (
    <S.Container>
      <S.ImgContainer>
        <S.Image src={imageUrl} alt={name} />
      </S.ImgContainer>
      <S.Name>{name}</S.Name>
      <S.DetailsContainer>
        <S.Price>$ {price}</S.Price>
        <div>
          <img src="\src\assets\icons\pet.svg" alt="" />
          <img src="\src\assets\icons\toxic.svg" alt="" />
          <img src="\src\assets\icons\no-sun.svg" alt="" />
        </div>
      </S.DetailsContainer>
    </S.Container>
  );
};
