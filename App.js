import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import PlacesContextProvider from "./context/PlacesContextProvider";
import Places from "./screens/Places";

export default function App() {
  return (
    <PlacesContextProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Places />
      </View>
    </PlacesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
