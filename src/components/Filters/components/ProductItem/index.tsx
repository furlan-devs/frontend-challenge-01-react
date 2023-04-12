import React from "react";
import * as S from "./styles";
import { ProductItemProps } from "./types";
import noSun from "../../../../assets/icons/no-sun.svg";
import lowSun from "../../../../assets/icons/low-sun.svg";
import pet from "../../../../assets/icons/pet.svg";
import drop1 from "../../../../assets/icons/1-drop.svg";
import drops2 from "../../../../assets/icons/2-drops.svg";
import drops3 from "../../../../assets/icons/3-drops.svg";
import toxic from "../../../../assets/icons/toxic.svg";

export const ProductItem: React.FC<ProductItemProps> = ({
  name,
  price,
  staff_favorite,
  imageUrl,
  icons,
}) => {
  function renderIcon(icon: string | boolean) {
    switch (icon) {
      case "no":
        return noSun;
      case "low":
        return lowSun;
      case "high":
        return lowSun;
      case "rarely":
        return drop1;
      case "daily":
        return drops2;
      case "regularly":
        return drops3;
      case true:
        return toxic;
      case false:
        return pet;
      default:
        return "";
    }
  }

  return (
    <S.Container data-testid="product-item-container">
      <S.ImgContainer>
        <S.Image src={imageUrl} alt={name} data-testid="product-item-image" />
      </S.ImgContainer>
      <S.Name data-testid="product-item-name">{name}</S.Name>
      <S.DetailsContainer>
        <S.Price data-testid="product-item-price">$ {price}</S.Price>
        <div data-testid="product-item-icons">
          {icons.map((icon, index) => (
            <img key={index} src={renderIcon(icon)}></img>
          ))}
        </div>
      </S.DetailsContainer>
    </S.Container>
  );
};
