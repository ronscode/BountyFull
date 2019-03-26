import React from "react";
//import { connect } from 'redux'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { Button } from "react-native-elements";
import { WebBrowser } from "expo";
import FetchLocation from "../components/FetchLocation";
import UsersMap from "../components/UsersMap";
import CameraExample from "../components/CameraExample";
import { MonoText } from "../components/StyledText";
<<<<<<< HEAD
//import { connect } from "tls";
=======
import AuthScreen from "../components/AuthScreen";
>>>>>>> master

class HomeScreen extends React.Component {
  // Get Location button handler
  state = {
    userLocation: null
  };
  getUserLocationHandler = () => {
    console.log("Get location button pressed.");
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }
        });
        console.log(position);
      },
      err => console.log(err)
    );
  };

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Text style={styles.headerTopText}>BountyFull WELCOMES YOU!</Text>
            <Text />
            <Image
              source={require("../assets/images/bin.png")}
              style={styles.welcomeImage}
            />
            <Text />
            <Text style={styles.getStartedText}>
              💰Clean litter for bounties : ⛳ Track Litter Cleanups
            </Text>

            <Text />

            <Text />
            <View style={styles.homeButton}>
              <Button
                type={"outline"}
                raised={true}
                onPress={this._buttonPostBounty}
                title="Post Bounty For Cleanup"
              />
            </View>
            <Text />
            <View style={styles.homeButton}>
              <Button
                type={"outline"}
                raised={true}
                onPress={this._buttonFindOpenBounty}
                title="Find Litter Bounty"
              />
            </View>
            <Text />
            <View style={styles.homeButton}>
              <Button
                type={"outline"}
                raised={true}
                onPress={this._buttonTrackCleanUp}
                title="Track Litter Cleanup"
              />
            </View>
            <Text />
            <FetchLocation onGetLocation={this.getUserLocationHandler} />
            <Text />
            <AuthScreen />
            <UsersMap userLocation={this.state.userLocation} />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <View>
          <Text style={styles.developmentModeText}>
            -Map loads here with bounties? (we are in dev mode)
          </Text>
          <Text style={styles.developmentModeText}>
            -Light on style for now, heavy on fun(ction)
          </Text>
        </View>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          (not dev mode full speed)
        </Text>
      );
    }
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
    backgroundColor: "#fff"
  },
  homeButtons: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  homeButton: {
    flex: 1,
    width: "85%",
    fontSize: 15,
    height: 32,
    marginTop: 10
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
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
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
  headerTopText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 2
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


export default HomeScreen
// const mapStateToProps = (state) => {
//     return{
      
//     }
// }


// export default connect(
//   mapStateToProps(),
//   null
// )(HomeScreen)
