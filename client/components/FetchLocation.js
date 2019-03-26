import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
const fetchLocation = props => {
  return (
    <View
      style={{ flex: 1, width: "85%", fontSize: 15, height: 32, margin: 10 }}
    >
      <Button
        type={"outline"}
        raised={true}
        title="Find Litter Bounties Near You"
        onPress={props.onGetLocation}
      />
    </View>
  );
};

export default fetchLocation;
