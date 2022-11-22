import { StyleSheet, FlatList } from "react-native";
import PlacesCard from "./PlacesCard";

const PlacesList = ({ placesListInfo, cardClickHandler }) => {
  const renderPlacesCard = (itemData) => (
    <PlacesCard placeCardClickHandler={cardClickHandler} {...itemData.item} />
  );

  return (
    <FlatList
      horizontal
      data={placesListInfo}
      keyExtractor={(item) => `${item["fsq_id"]}`}
      renderItem={renderPlacesCard}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({});
