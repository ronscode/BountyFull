import React from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const usersMap = props => {
  let userLocationMarker = null;

  if (props.userLocation) {
    userLocationMarker = <MapView.Marker coordinate={props.userLocation} />;
  }
  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 33.786999,
          longitude: -84.410373,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        region={props.userLocation}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: "50%",
    marginTop: "10%"
  },
  map: {
    width: "100%",
    height: "100%"
  }
});

export default usersMap;
