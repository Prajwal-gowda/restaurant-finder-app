import { StyleSheet, View } from "react-native";
import { useContext, useState } from "react";
import { PlacesContext } from "../context/PlacesContext";
import Map from "../components/Map";
import PlacesList from "../components/PlacesList";
import Banner from "../components/Banner";
import { getFormattedAddressFromLocation } from "../utils/utils";

const Places = () => {
  const { places } = useContext(PlacesContext);
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: 47.606,
    longitude: -122.349358,
  });
  const [locationAddress, setLocationAddress] = useState("");

  const cardClickHandler = (locationData) => {
    if (locationData) {
      setSelectedLocation(locationData);
      const cafeAddress = getFormattedAddressFromLocation(places, locationData);
      setLocationAddress(cafeAddress);
    }
  };

  return (
    <View style={styles.mapView}>
      {locationAddress && <Banner address={locationAddress} />}
      <Map selectedLocation={selectedLocation} />
      <View style={styles.cardContainer}>
        <PlacesList
          placesListInfo={places}
          cardClickHandler={cardClickHandler}
        />
      </View>
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    zIndex: 1,
  },
  cardContainer: {
    padding: 12,
    position: "absolute",
    bottom: 10,
  },
});
