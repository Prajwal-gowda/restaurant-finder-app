import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { getRandomCafeImages } from "../utils/utils";
import { Colors } from "../utils/colors";
import { useEffect, useState } from "react";

const PlacesCard = ({ name, geocodes, placeCardClickHandler, location }) => {
  const [cafeImage, setCafeImage] = useState(
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHw%3D&w=1000&q=80"
  );

  const placeCardPressHandler = () => {
    placeCardClickHandler(geocodes.main);
  };

  useEffect(() => {
    setCafeImage(getRandomCafeImages());
  }, []);

  return (
    <Pressable
      onPress={placeCardPressHandler}
      style={({ pressed }) => [pressed && styles.cardPressed]}
    >
      <View style={styles.placeCard}>
        <Image
          style={styles.image}
          source={{
            uri: cafeImage,
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
    width: 250,
    height: 250,
    backgroundColor: "white",
    marginHorizontal: 4,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
  },

  cardPressed: {
    opacity: 0.8,
  },

  image: {
    width: "100%",
    height: 150,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },

  address: {
    fontSize: 14,
    color: Colors.grey700,
  },
});
