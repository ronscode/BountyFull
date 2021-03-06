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

class ListBounties extends Component {
  constructor(props) {
    super(props);
    let initialState = {
        bounties: [],
        currentPostedBounty: ''
    };
    this.state = initialState;
  }
  componentWillMount() {
    axios
      .get(proxyUrl.url + "/find")
      .then(res => this.setState({ bounties: res.data }))
      .catch(err => console.log(err));
  }
  componentDidUpdate() {
    // Typical usage (don't forget to compare props):
    if (this.props.currentPostedBounty !== this.state.currentPostedBounty) {
        axios
          .get(proxyUrl.url + '/find')
          .then(res => this.setState({ bounties: res.data, currentPostedBounty: this.props.currentPostedBounty }))
          .catch(err => console.log(err));
    }
  }
  selectBounty(id) {
    axios.get(proxyUrl.url + '/find/status/' + id)
      .then(res => this.props.checkoutBounty(res.data[0]))
    console.log('REDIRECT USER')
    // PUT REDIRECT HERE TO TRACK BOUNTY PAGE
  }
  render() {
    if (this.props.isStarted) {
      // PUT REDIRECT HERE TO TRACK BOUNTY PAGE
      // PUT REDIRECT HERE!
      console.log("isStarted is true");
    }
    return (
      <ScrollView>
        {this.state.bounties.reverse().map((bounty, i) => {
          return (
            <View style={styles.listBountyCard} key={i}>
              <View style={styles.bountyBoxHeader}>
                <Text style={styles.bountyBoxTitle}>{bounty.bountyTitle}</Text>
                <Text style={styles.bountyBoxAmount}>
                  ${bounty.bountyAmount}
                </Text>
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
                  <Button
                    containerStyle={{ width: "50%" }}
                    onPress={() => this.selectBounty(bounty._id)}
                    title="Start Clean"
                  />
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
    return {
        currentPostedBounty: state.user.currentPostedBounty,
        isStarted: state.bounties.isStarted,
        potentialBounty: state.potentialBounty
    };
};

const mapDispatchToProps = dispatch => {
    return {
        checkoutBounty: bounties => dispatch({ type: 'CHECKOUT_BOUNTY', bounties }),
        getBounties: bounties => dispatch({ type: 'GET_BOUNTY', bounties: bounties })
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListBounties);

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


