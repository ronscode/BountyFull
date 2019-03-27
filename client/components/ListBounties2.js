import React, { Component } from "react";
import {
  Text,
  ListItem,
  ListView,
  SectionList,
  Platform,
  StyleSheet,
  ScrollView,
  View
} from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import axios from "axios";
import { List, Button } from "react-native-elements";
// import AppNavigator from "./navigation/AppNavigator";

export default class ListBounties2 extends Component {
  constructor(props) {
    super(props);
    let initialState = {
      bounties: []
    };
    this.state = initialState;
  }
  componentDidMount() {
    axios
      .get("http://10.150.41.130:3001/find/")
      .then(res => this.setState({ bounties: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <ScrollView>
        {this.state.bounties.map(bounty => {
          return (
            <View>
              <Text>{bounty.bountyTitle}</Text>
              <Text>POSTED BY: {bounty.poster}</Text>
              <Text>AMOUNT: ${bounty.bountyAmount}</Text>
              <Text>Notes for cleaner:</Text>
              <Text>{bounty.bountyNotes}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  bountyText: {
    alignItems: "center",
    color: "rgba(33,108,42,1)",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18
  },
  bountyTitle: {
    marginBottom: 10,
    color: "rgba(0,0,0,0.9)",
    fontSize: 22,
    textAlign: "center"
  },
  bountyAmount: {
    marginBottom: 10,
    color: "rgba(33,108,42,1)",
    fontSize: 22,
    textAlign: "center"
  },
  bountyButton: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.9)",
    fontSize: 22,
    textAlign: "center"
  }
});
