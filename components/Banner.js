import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../utils/colors";

const Banner = ({ address }) => {
  return (
    <View style={styles.addressContainer}>
      <Text style={styles.address}>{address}</Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  addressContainer: {
    position: "absolute",
    top: 0,
    zIndex: 2,
    height: 200,
    width: "100%",
    opacity: 0.95,
    padding: 6,
    backgroundColor: Colors.primary800,
    justifyContent: "center",
    alignItems: "center",
  },
  address: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
