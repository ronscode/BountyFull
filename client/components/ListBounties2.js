import React, { Component} from "react";
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
import axios from 'axios';
import { List, Button } from "react-native-elements";
// import AppNavigator from "./navigation/AppNavigator";

const demoData = [
  {
    _id: "5c964b3f149db56a643704bf",
    claimer: "John Smith",
    poster: "jakethesnake",
    bountyAmount: 20,
    location: "1111111111",
    pictures: { post: "urlofpostpicture", start: "blank", end: "blank" },
    __v: 0
  },
  {
    _id: "5c9653cfec0bd97372ae7ef5",
    claimer: "Bob",
    poster: "rake man 2",
    bountyAmount: 20,
    location: "1111111111",
    pictures: { post: "urlofpostpicture", start: "", end: "" },
    __v: 0
  },
  {
    _id: "5c9653dbec0bd97372ae7ef6",
    claimer: "",
    poster: "final cleanination",
    bountyAmount: 20,
    location: "1111111111",
    pictures: { post: "urlofpostpicture", start: "", end: "" },
    __v: 0
  }
];

export default class ListBounties2 extends Component {
  constructor(props) {
    super(props);
    let initialState = {
      bounties: []
    }
    this.state = initialState;
  }
  componentDidMount() {
    axios.get('http://10.150.40.230:3001/find/')
        .then(res => this.setState({ bounties: res.data }))
        .catch(err => console.log(err));
  }
  render() {
    return (
      <ScrollView>
        {this.state.bounties.map(bounty => {
          return (
            <View>
              <Text>Bounty Title Goes Here</Text>
              <Text>{bounty.poster}</Text>
              <Text>{bounty.bountyAmount}</Text>
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

//  <View>
//         {list.map((l, i) => (
//           <ListItem
//             key={i}
//             leftAvatar={{ source: { uri: l.avatar_url } }}
//             title={l.name}
//             subtitle={l.subtitle}
//           />
//         ))}
//       </View>
