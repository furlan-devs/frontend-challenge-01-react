import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./styles";
import { FiltersProps } from "./types";
import { ProductItem } from "./components/ProductItem";
import { Filter } from "./components/FIlter";
import { Plant, fetchPlants } from "../../services/FetchPlants";
import { Loading } from "../Loading";

export const Filters: React.FC<FiltersProps> = ({}) => {
  const [plantas, setPlantas] = useState<Plant[]>([]);
  const [sunOption, setSunOption] = useState<string>("");
  const [waterOption, setWaterOption] = useState<string>("");
  const [petOption, setPetOption] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const apiUrl = import.meta.env.VITE_REACT_API_URL;

  useEffect(() => {
    async function getPlants() {
      if (sunOption && waterOption && petOption) {
        setLoading(true);
        const fetchedPlants = await fetchPlants(
          sunOption,
          waterOption,
          petOption
        );
        setLoading(false);
        setPlantas(fetchedPlants);
      }
    }
    getPlants();
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
    console.log(plantas);
  };

  const sunlightSelectOption = [
    { value: "no", label: "No sun" },
    { value: "low", label: "Low" },
    { value: "high", label: "High" },
  ];

  const waterSelectOptions = [
    { value: "regularly", label: "Regularly" },
    { value: "daily", label: "Daily" },
    { value: "rarely", label: "Rarely" },
  ];

  const petsSelectOptions = [
    { value: "true", label: "Yes" },
    { value: "false", label: "No" },
  ];

  const textLabelforSunlight = (
    <>
      <strong>1.</strong> Set the amount of <strong>sunlight</strong> your plant
      will get.
    </>
  );

  const textLabelforWater = (
    <>
      <strong>2.</strong> How often do you want to <strong>water</strong> your
      plant?
    </>
  );
  const textLabelforPets = (
    <>
      <strong>3.</strong> Do you have pets? Do they <strong>chew</strong>{" "}
      plants?
    </>
  );

  return (
    <>
      {loading && <Loading />}
      <S.FiltersContainer>
        <S.FiltersContent>
          <Filter
            imgUrl="\src\assets\illustrations\sun.png"
            textLabel={textLabelforSunlight}
            selectOptions={sunlightSelectOption}
            placeholder="Select..."
            onChange={handleSunOptionChange}
            selectValue={sunOption}
          />
          <Filter
            imgUrl="\src\assets\illustrations\wateringcan.png"
            textLabel={textLabelforWater}
            selectOptions={waterSelectOptions}
            placeholder="Select..."
            onChange={handleWaterOptionChange}
            selectValue={waterOption}
          />

          <Filter
            imgUrl="\src\assets\illustrations\dog.png"
            textLabel={textLabelforPets}
            selectOptions={petsSelectOptions}
            placeholder="Select..."
            onChange={handlePetOptionChange}
            selectValue={petOption}
          />
        </S.FiltersContent>
      </S.FiltersContainer>
      <S.ResultsContainer>
        <S.ResultsContent>
          {!plantas.length ? (
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
                    icons={[item.sun, item.water, item.toxicity]}
                  ></ProductItem>
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
