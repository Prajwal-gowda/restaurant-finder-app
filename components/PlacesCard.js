import { View, Text, StyleSheet, Pressable, Image } from "react-native";

const PlacesCard = ({ name, geocodes, placeCardClickHandler, location }) => {
  const placeCardPressHandler = () => {
    placeCardClickHandler(geocodes.main);
  };

  return (
    <Pressable onPress={placeCardPressHandler}>
      <View style={styles.placeCard}>
        <Image
          style={styles.image}
          source={{
            uri: "https://user-images.githubusercontent.com/56022055/203319263-28225ff1-da05-490b-b718-6a13f26f8e79.jpg",
          }}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.address}>{location.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlacesCard;

const styles = StyleSheet.create({
  placeCard: {
    width: 200,
    height: 200,
    backgroundColor: "white",
    marginHorizontal: 4,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 125,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },

  address: {
    fontSize: 14,
  },
});
