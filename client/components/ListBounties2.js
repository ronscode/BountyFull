import React, { Component, View } from "react";
import {
  Text,
  ListItem,
  ListView,
  SectionList,
  Platform,
  StyleSheet
} from "react-native";
import { List, Button } from "react-native-elements";

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
  render() {
    return (
      <SectionList
        renderItem={({ item, index, section }) => (
          <Text style={styles.bountyText} key={index}>
            {item}
          </Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.bountyTitle}>{title}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.bountyTitle}>{title}</Text>
        )}
        sections={[
          { title: "Banana on Sidewalk", data: ["Posted by: Zaphod", "$25"] },
          { title: "Pile of napkins", data: ["Posted by: Mario", "$10"] },
          { title: "Hiking trail trashed!", data: ["MasterChief", "$42"] }
        ]}
        keyExtractor={(item, index) => item + index}
      />
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
