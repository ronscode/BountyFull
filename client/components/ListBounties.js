import React, { Component, View } from "react";
import { Text, ListItem, ListView, FlatList } from "react-native";
import { List } from "react-native-elements";

const demoData = [
  [
    {
      _id: "5c964b3f149db56a643704bf",
      claimer: "John Smith",
      isStarted: false,
      isCleaned: false,
      isVerified: false,
      isPaid: false,
      isComplete: false,
      timeStarted: "",
      timeEnded: "",
      poster: "jakethesnake",
      bountyAmount: 20,
      location: "1111111111",
      pictures: { post: "urlofpostpicture", start: "blank", end: "blank" },
      __v: 0
    },
    {
      _id: "5c9653cfec0bd97372ae7ef5",
      claimer: "",
      isComplete: false,
      isVerified: false,
      isStarted: false,
      isPaid: false,
      timeStarted: "",
      timeEnded: "",
      poster: "rake man 2",
      bountyAmount: 20,
      location: "1111111111",
      pictures: { post: "urlofpostpicture", start: "", end: "" },
      __v: 0
    },
    {
      _id: "5c9653dbec0bd97372ae7ef6",
      claimer: "",
      isComplete: false,
      isVerified: false,
      isStarted: false,
      isPaid: false,
      timeStarted: "",
      timeEnded: "",
      poster: "final cleanination",
      bountyAmount: 20,
      location: "1111111111",
      pictures: { post: "urlofpostpicture", start: "", end: "" },
      __v: 0
    },
    {
      _id: "5c9654803c954e744c66f622",
      claimer: "",
      isComplete: false,
      isVerified: false,
      isStarted: false,
      isPaid: false,
      timeStarted: "",
      timeEnded: "",
      poster: "final cleanination",
      bountyAmount: 20,
      location: "1111111111",
      pictures: { post: "urlofpostpicture", start: "", end: "" },
      __v: 0
    }
  ]
];

const list = [
  {
    name: "Amy Farha",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  }
];

export default class ListBounties extends Component {
  //   constructor(props) {
  //     super(props);
  //     let initialState = {
  //       bounties: []
  //     };
  //     this.state = initialState;
  //   }
  //   componentDidMount() {
  //     async function listAllBounties() {
  //       try {
  //         let response = await fetch("http://localhost:3001/find");
  //         let responseJson = await response.json();
  //         return responseJson;
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   }
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <FlatList
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
    />
  );

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={list}
        renderItem={this.renderItem}
      />
    );
  }
}
