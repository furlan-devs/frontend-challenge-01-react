import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { FiltersProps, Plantas } from "./types";
import axios, { AxiosResponse } from "axios";
import { ProductItem } from "./components/ProductItem";

export const Filters: React.FC<FiltersProps> = ({}) => {
  const [plantas, setPlantas] = useState<Plantas[]>([]);
  const [sunOption, setSunOption] = useState<string>("");
  const [waterOption, setWaterOption] = useState<string>("");
  const [petOption, setPetOption] = useState<string>("");
  const [resultado, setResultado] = useState<boolean>(false);
  const apiUrl = import.meta.env.VITE_REACT_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}?sun=${sunOption}&water=${waterOption}&pets=${petOption}`)
      .then((response: AxiosResponse<Plantas[]>) => {
        setPlantas(response.data);
        setResultado(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sunOption, waterOption, petOption]);

  const handleSunOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSunOption(event.target.value);
  };

  const handleWaterOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setWaterOption(event.target.value);
  };

  const handlePetOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPetOption(event.target.value);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <S.FiltersContainer>
        <S.FiltersContent>
          <S.Filter1>
            <img src="\src\assets\illustrations\sun.png"></img>
            <label htmlFor="">
              <strong>1.</strong> Set the amount of <strong>sunlight</strong>{" "}
              your plant will get.
            </label>
            <select value={sunOption} onChange={handleSunOptionChange}>
              <option value="" disabled selected>
                Select...
              </option>
              <option value="no">No sun</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </S.Filter1>
          <S.Filter2>
            <img src="\src\assets\illustrations\wateringcan.png"></img>
            <label htmlFor="">
              <strong>2.</strong> How often do you want to{" "}
              <strong>water</strong> your plant?
            </label>
            <select value={waterOption} onChange={handleWaterOptionChange}>
              <option value="" disabled selected>
                Select...
              </option>
              <option value="regularly">Regularly</option>
              <option value="daily">Daily</option>
              <option value="rarely">Rarely</option>
            </select>
          </S.Filter2>

          <S.Filter3>
            <img src="\src\assets\illustrations\dog.png"></img>
            <label htmlFor="">
              <strong>3.</strong> Do you have pets? Do they{" "}
              <strong>chew</strong> plants?
            </label>
            <select value={petOption} onChange={handlePetOptionChange}>
              <option value="" disabled selected>
                Select...
              </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </S.Filter3>
        </S.FiltersContent>
      </S.FiltersContainer>

      <S.ResultsContainer>
        <S.ResultsContent>
          {!resultado ? (
            <S.NoResultsContainer>
              <S.TextContent>
                <h1>No results yet...</h1>
                <p>
                  Use the filters above to find the plant that best fits your
                  environment :)
                </p>
              </S.TextContent>
              <S.NoResultsImg>
                <img src="\src\assets\illustrations\no-results.png"></img>
              </S.NoResultsImg>
            </S.NoResultsContainer>
          ) : (
            <S.ResultsFound>
              <S.ResultsHeader>
                <img src="\src\assets\illustrations\pick.png"></img>
                <h1> Our picks for you</h1>
              </S.ResultsHeader>

              <S.ProductsWrapper>
                {plantas.map((item, index) => (
                  <ProductItem
                    key={item.id}
                    imageUrl={item.url}
                    name={item.name}
                    price={item.price}
                  />
                ))}
              </S.ProductsWrapper>

              <S.BackToTheTopButton onClick={handleClick}>
                Back to the Top
              </S.BackToTheTopButton>
            </S.ResultsFound>
          )}
        </S.ResultsContent>
      </S.ResultsContainer>
    </>
  );
};
