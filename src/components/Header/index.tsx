import * as S from "./styles";
import logoWhite from "../../assets/icons/logo-white.svg";
import arrowdown from "../../assets/icons/arrow-down.svg";

import left from "../../assets/hero/desktop/left-leaves.png";
import mid from "../../assets/hero/desktop/plantperson.png";
import right from "../../assets/hero/desktop/right-leaves.png";
import { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <S.HeaderContainer>
      {/* <img src={left}></img>
      <img src={mid}></img>
      <img src={right}></img> */}
      <S.HeaderContent>
        <img src={logoWhite} alt="Greenthumb" />

        <h1>Find your next green friend</h1>
        <img src={arrowdown} alt="Arrowdown" />
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
