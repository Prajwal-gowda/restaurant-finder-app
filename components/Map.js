import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const Map = ({ selectedLocation }) => {
  const [region, setRegion] = useState({
    latitude: 47.606,
    longitude: -122.349358,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    if (selectedLocation && selectedLocation.latitude) {
      setRegion((prevRegion) => ({
        ...prevRegion,
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
      }));
    }
  }, [selectedLocation]);

  return (
    <MapView region={region} style={styles.mapView} zoomControlEnabled>
      <Marker
        coordinate={{
          latitude: region.latitude,
          longitude: region.longitude,
        }}
        title="Picked location"
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});
