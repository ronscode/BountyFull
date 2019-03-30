import React from "react";
//import { connect } from 'redux'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from "react-native";

import { Button, ThemeProvider } from "react-native-elements";
import { WebBrowser } from "expo";
import FetchLocation from "../components/FetchLocation";
import UsersMap from "../components/UsersMap";
import CameraExample from "../components/CameraExample";
import { MonoText } from "../components/StyledText";
import AuthScreen from "../components/AuthScreen";

const homeButton = {
  Button: {
    titleStyle: {
      fontSize: 16,
      color: "#008e4c"
    }
  }
};

class HomeScreen extends React.Component {
  // Get Location button handler

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/images/demo/bgg2.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.headerBg}>
          <Text style={styles.headerTopText}>BountyFull WELCOMES YOU!</Text>
          <Text />

          <Text />
          <Text style={styles.headerText}>💰Clean litter for bounties</Text>
          <Text style={styles.headerText}>⛳ Track Litter Cleanups</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.homeButton}>
            <ThemeProvider theme={homeButton}>
              <Button
                type={"outline"}
                raised={true}
                onPress={this._buttonPostBounty}
                title="POST CLEANUP BOUNTY"
              />
            </ThemeProvider>
          </View>

          <View style={styles.homeButton}>
            <ThemeProvider theme={homeButton}>
              <Button
                type={"outline"}
                raised={true}
                onPress={this._buttonFindOpenBounty}
                title="FIND LITTER BOUNTY"
              />
            </ThemeProvider>
          </View>

          <View style={styles.homeButton}>
            <ThemeProvider theme={homeButton}>
              <Button
                type={"outline"}
                raised={true}
                onPress={this._buttonTrackCleanUp}
                title="TRACK CLEANUP"
              />
            </ThemeProvider>
          </View>
          <AuthScreen />
        </View>
      </ImageBackground>
    );
  }

  // Opens the Camera
  _buttonCameraExample = () => {
    console.log("Camera Example");
    this.props.navigation.navigate("CameraExampleStack");
  };

  // Navigates to the post a bounty page
  _buttonPostBounty = () => {
    console.log("Navigate to post a bounty");
    this.props.navigation.navigate("PostBountyStack");
  };

  // Navigates to find open bounties
  _buttonFindOpenBounty = () => {
    console.log("Navigate to find an open bounty");
    this.props.navigation.navigate("FindBountyStack");
  };

  // Navigates to track clean up
  _buttonTrackCleanUp = () => {
    console.log("Track clean up button pressed");
    this.props.navigation.navigate("TrackCleanStack");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30
  },
  headerBg: {
    paddingTop: 30
  },
  headerTopText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    textShadowColor: "rgba(0,0,0, 1)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3
  },
  headerText: {
    fontSize: 16,
    paddingBottom: 2,
    marginBottom: 3,
    color: "#FFF",
    textAlign: "center",
    textShadowColor: "rgba(0,0,0, 1)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3
  },
  homeButtons: {
    alignItems: "center",
    height: 10

    // paddingTop: 10,
    // paddingBottom: 10
  },
  homeButton: {
    width: "85%",
    fontSize: 15,
    height: "10%",
    marginBottom: 15,
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
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
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
    backgroundColor: "#def2e4",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "#00a86b",
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

export default HomeScreen;
