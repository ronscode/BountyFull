import React, { Component } from "react";
import {
  Text,
  ListItem,
  ListView,
  SectionList,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  View
} from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import axios from "axios";
import { List, Button, Card } from "react-native-elements";
// import AppNavigator from "./navigation/AppNavigator";

// Reference URL
const proxyUrl = require("../proxyUrl.js");

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
    };
    this.state = initialState;
  }
  componentDidMount() {
    axios
      .get("http://192.168.1.76:3001/find/")
      .then(res => this.setState({ bounties: res.data }))
      .catch(err => console.log(err));
    axios
      .get(proxyUrl.url + "/find/")
      .then(res => {
        console.log(res.data);
        this.setState({ bounties: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <ScrollView>
        {this.state.bounties.reverse().map((bounty, i) => {
          return (
            <Card
              key={i}
              title={bounty.bountyTitle}
              image={{ uri: bounty.pictures.post }}
            >
              <View>
                <Text>POSTED BY: {bounty.bountyPoster}</Text>
                <Text>AMOUNT: ${bounty.bountyAmount}</Text>
                <Text>Pre-Clean Notes:</Text>
                <Text>{bounty.bountyNotes}</Text>

                <Button title="Start Clean" />
              </View>
            </Card>
          );
        })}

        {/* 
        {this.state.bounties.reverse().map(bounty => {
          return (
            <View>
              <Text>{bounty.bountyTitle}</Text>
              <Text>POSTED BY: {bounty.bountyPoster}</Text>
              <Text>AMOUNT: ${bounty.bountyAmount}</Text>
              <Text>Notes for cleaner:</Text>
              <Text>{bounty.bountyNotes}</Text>

              <Image
                style={styles.listBountyImage}
                source={{ uri: bounty.pictures.post }}
              />
              <Button title={"Start Bounty"}>Start Bounty</Button>
            </View>
          );
        })} */}
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
  listBountyImage: {
    width: 100,
    height: 100
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
