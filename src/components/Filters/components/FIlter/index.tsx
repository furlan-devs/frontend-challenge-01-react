import * as S from "./styles";
import { FilterProps } from "./types";

export const Filter: React.FC<FilterProps> = ({
  imgUrl,
  textLabel,
  selectOptions,
  placeholder,
  selectValue,
  onChange,
}) => {
  return (
    <S.FilterContent>
      <S.ImageContainer>
        <img src={imgUrl}></img>
      </S.ImageContainer>
      <p>{textLabel}</p>
      <select value={selectValue} onChange={onChange}>
        <option value="" disabled defaultValue={""}>
          {placeholder}
        </option>
        {selectOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </S.FilterContent>
  );
};
