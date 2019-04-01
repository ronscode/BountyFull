import React, { Component } from "react";
import { connect } from "react-redux";
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
import { Button, List, Card } from "react-native-elements";
// import AppNavigator from "./navigation/AppNavigator";

// Reference URL
const proxyUrl = require("../proxyUrl.js");

let ListBounties2 = ({ bounty, getBounties }) => {
  // constructor(props) {
  //   super(props);
  //   // let initialState = {
  //   //   bounties: []
  //   // };
  //   // this.state = initialState;
  // }
  (function componentDidMount() {
    axios
      .get(proxyUrl.url + "/find")
      .then(res => {
        // console.log(res.data)
        getBounties(res.data);
        //this.setState({ bounties: res.data })
      })
      .catch(err => console.log(err));
  })();

  // render() {
  // console.log(bounty)
  return (
    <ScrollView>
      {bounty.reverse().map((bounty, i) => {
        return (
          <View style={styles.listBountyCard} key={i}>
            <View style={styles.bountyBoxHeader}>
              <Text style={styles.bountyBoxTitle}>{bounty.bountyTitle}</Text>
              <Text style={styles.bountyBoxAmount}>${bounty.bountyAmount}</Text>
            </View>
            <View style={styles.bountyBox}>
              <Image
                style={styles.listBountyImage}
                source={{ uri: bounty.pictures.post }}
              />
              <View style={styles.bountyBoxColumn}>
                <Text>
                  POSTED BY: {bounty.bountyPoster} {bounty.poster}
                </Text>
                <Text>AMOUNT: ${bounty.bountyAmount}</Text>
                <Text>Pre-Clean Notes:</Text>
                <Text>{bounty.bountyNotes}</Text>
                <Button containerStyle={{ width: "50%" }} title="Start Clean" />
              </View>
            </View>
          </View>
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
  // }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  bountyBox: { flex: 1, flexDirection: "row", padding: 1 },
  bountyBoxColumn: {
    flex: 1,
    flexDirection: "column",
    padding: 1
  },
  bountyBoxTitle: {
    marginLeft: 2,
    width: 308,
    marginBottom: 1,
    color: "rgba(0,0,0,0.9)",
    fontSize: 22
  },
  bountyBoxAmount: {
    paddingRight: 2,
    width: 62,
    color: "rgba(33,108,42,1)",
    fontSize: 22,
    textAlign: "right"
  },

  listBountyCard: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
    borderColor: "grey",
    borderWidth: 1,
    padding: 1,
    marginBottom: 15,
    backgroundColor: "#ffffff"
  },
  bountyBoxHeader: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  bountyText: {
    color: "rgba(33,108,42,1)",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18
  },
  listBountyImage: {
    width: 140,
    height: 120
  },

  bountyAmount: {
    marginBottom: 10,
    color: "rgba(33,108,42,1)",
    fontSize: 22
  },
  bountyButton: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.9)",
    fontSize: 22
  }
});

const mapStateToProps = state => {
  return {
    bounty: state.bounty
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBounties: bounties =>
      dispatch({ type: "GET_BOUNTY", bounties: bounties })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBounties2);
