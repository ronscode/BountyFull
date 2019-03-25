import React from "react";
import { Button } from "react-native";

const fetchLocation = props => {
  return (
    <Button
      title="Find Litter Bounties Near You"
      onPress={props.onGetLocation}
    />
  );
};

export default fetchLocation;
