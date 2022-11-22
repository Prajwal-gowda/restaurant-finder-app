import { useEffect, useState } from "react";
import { PlacesContext } from "./PlacesContext";
import axios from "axios";
import { PLACES_API_URL } from "../utils/constants";
import { API_KEY } from "@env";
import { getParamsAndHeaders } from "../utils/utils";

const PlacesContextProvider = ({ children }) => {
  const [placesList, setPlacesList] = useState([]);

  const getPlacesList = async () => {
    const res = await axios.get(PLACES_API_URL, { ...getParamsAndHeaders() });
    const { data } = res;
    return data;
  };

  useEffect(() => {
    (async () => {
      const placesData = await getPlacesList();
      if (placesData && placesData.results && placesData.results.length) {
        setPlacesList(placesData.results);
      }
    })();
  }, []);

  return (
    <PlacesContext.Provider value={{ places: placesList }}>
      {children}
    </PlacesContext.Provider>
  );
};

export default PlacesContextProvider;
