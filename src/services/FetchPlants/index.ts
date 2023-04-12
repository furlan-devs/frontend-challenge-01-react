import axios, { AxiosResponse } from "axios";

export interface Plant {
  id: number;
  name: string;
  sun: string;
  water: string;
  url: string;
  price: number;
  toxicity: boolean;
  staff_favorite: boolean;
}

export async function fetchPlants(
  sunOption: string,
  waterOption: string,
  petOption: string
): Promise<Plant[]> {
  const apiUrl = import.meta.env.VITE_REACT_API_URL;

  try {
    const response: AxiosResponse<Plant[]> = await axios.get(
      `${apiUrl}?sun=${sunOption}&water=${waterOption}&pets=${petOption}`
    );
    return response.data;
  } catch (error) {
    console.error(error, "API erro");
    return [];
  }
}
