import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";
import { Button, ThemeProvider } from "react-native-elements";
import FetchLocation from "../components/FetchLocation";
import { MonoText } from "../components/StyledText";
import PostBountyInputTitle from "../components/PostBountyInputTitle";
import TrackCleanForm from "../components/TrackCleanForm";
import TestImageUpload from "../components/TestImageUpload";
import { connect } from "react-redux";
import TrackTopButtons from "../components/TrackTopButtons";

const homeButton = {
  Button: {
    titleStyle: {
      fontSize: 16,
      color: "#010101"
    }
  }
};

class TrackCleanScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    let { bountyTitle, bountyNotes, poster, isStarted } = this.props;
    if (!isStarted) {
      console.log("NO BOUNTY SELECTED TO START");
      // RENDER BASIC SCREEN
    }
    console.log(this.props.claimer);

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.headerTopText}>TRACK YOUR CLEAN UP</Text>
        </View>

        <TrackTopButtons />

        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.subTitleText}>
            CURRENTLY CLEANING: {bountyTitle}
          </Text>
          <View style={styles.trackCleanContainer}>
            <Text />

            <Text style={styles.trackBountyTitle}>{bountyNotes}</Text>
            <Text />
            <View style={styles.labelRow}>
              <Text style={styles.profileLabel}>POSTED BY: </Text>
              <Text>{poster}</Text>
            </View>

            <TrackCleanForm />
          </View>
        </ScrollView>
      </View>
    );
  }
  // Navigates to find open bounties
  _buttonFindOpenBounty = () => {
    console.log("Navigate to find an open bounty");
    this.props.navigation.navigate("FindBountyStack");
  };
}

let mapStateToProps = state => {
  return {
    firstName: state.user.firstName,
    bountyTitle: state.bounties.bountyTitle,
    bountyNotes: state.bounties.bountyNotes,
    poster: state.bounties.poster,
    bountyAmount: state.bounties.bountyAmount
  };
};

let mapDispatchToProps = dispatch => {
  return {
    saveUser: user => dispatch({ type: "SAVE_USER", user })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackCleanScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: "#4eba7e"
  },
  trackChooseButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 1
  },
  trackButton: {
    width: "30%"
  },
  trackBountyTitle: {
    fontSize: 16
  },
  homeButton: {
    width: "85%",
    fontSize: 15,
    height: "10%",
    marginBottom: 15,
    textAlign: "center"
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  profileLabel: {
    fontWeight: "bold"
  },
  headerTopText: {
    fontSize: 22,
    fontFamily: "sign45",
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 7,
    marginTop: 30,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0, 1)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3
  },
  subTitleText: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    textShadowColor: "rgba(0,0,0, 1)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  beforeImageLeft: {
    margin: 5
  },
  afterImageRight: {
    margin: 5
  },
  homeButton: {
    flex: 1,
    width: "85%",
    fontSize: 15,
    height: 32,
    marginTop: 10
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(96,100,109, 1)",
    lineHeight: 20,
    textAlign: "center",
    marginTop: 2
  },

  trackCleanText: {
    fontSize: 14,
    color: "rgba(96,100,109, 1)",
    lineHeight: 18,
    textAlign: "justify",
    padding: 2
  },
  bountyButton: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.9)",
    fontSize: 14,
    textAlign: "center"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  trackCleanContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#FFFFFF"
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },

  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
