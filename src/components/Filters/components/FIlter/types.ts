import { ChangeEvent, ReactNode } from "react";

export type Options = {
  value: string;
  label: string;
};

export type FilterProps = {
  imgUrl: string;
  textLabel: ReactNode;
  selectOptions: Options[];
  placeholder: string;
  selectValue: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};
