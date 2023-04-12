import React from "react";
import * as S from "./styles";
import { FavoriteItemProps } from "./types";
import noSun from "../../../../../assets/icons/no-sun.svg";
import lowSun from "../../../../../assets/icons/low-sun.svg";
import pet from "../../../../../assets/icons/pet.svg";
import drop1 from "../../../../../assets/icons/1-drop.svg";
import drops2 from "../../../../../assets/icons/2-drops.svg";
import drops3 from "../../../../../assets/icons/3-drops.svg";
import toxic from "../../../../../assets/icons/toxic.svg";
import favorite from "../../../../../assets/icons/star.png";

export const FavoriteItem: React.FC<FavoriteItemProps> = ({
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
      <S.FavoriteHighlight>
        <p>
          <img src={favorite}></img>Staff favorite
        </p>
      </S.FavoriteHighlight>
      <S.ImgContainer>
        <S.Image src={imageUrl} alt={name} data-testid="product-item-image" />
      </S.ImgContainer>
      <S.DetailsContainer>
        <S.Name data-testid="product-item-name">{name}</S.Name>
        <S.PriceAndIconsContainer>
          <S.Price data-testid="product-item-price">$ {price}</S.Price>
          <S.Icons data-testid="product-item-icons">
            {icons.map((icon, index) => (
              <img key={index} src={renderIcon(icon)}></img>
            ))}
          </S.Icons>
        </S.PriceAndIconsContainer>
      </S.DetailsContainer>
    </S.Container>
  );
};
