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
import { MonoText } from "../components/StyledText";
import { connect } from "react-redux";

const homeButton = {
  Button: {
    titleStyle: {
      fontSize: 16,
      color: "#010101"
    }
  }
};

class TrackTopButtons extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    let { bountyTitle, bountyNotes, poster, isStarted } = this.props;
    const isTitle = bountyTitle;
    if (bountyTitle < 1) {
      topButtons = (
        <View style={styles.trackChooseButtons}>
          <Button
            onPress={() => {
              console.log("Navigate to find an open bounty");
              navigation.navigate("FindBountyStack");
            }}
            title="FIND BOUNTY"
          />
          <Button title={"TRACK CLEAN"} />
        </View>
      );
    } else topButtons = null;

    return <View>{topButtons}</View>;
    // Navigates to find open bounties
    _buttonFindOpenBounty = () => {
      console.log("Navigate to find an open bounty");
      navigation.navigate("FindBountyStack");
    };
  }
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
)(TrackTopButtons);

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
