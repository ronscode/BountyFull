import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
const fetchBountyLocation = props => {
  return (
    <Button
      type={"outline"}
      raised={true}
      title="Click to Mark Cleanup Location"
      onPress={props.onGetLocation}
    />
  );
};

export default fetchBountyLocation;
