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

import { Button } from "react-native-elements";
import { WebBrowser } from "expo";
import FetchLocation from "../components/FetchLocation";
import UsersMap from "../components/UsersMap";
import CameraExample from "../components/CameraExample";
import { MonoText } from "../components/StyledText";
import AuthScreen from "../components/AuthScreen";

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
  //   <View
  //   style={styles.container}
  //   contentContainerStyle={styles.contentContainer}
  // >
  //   <ScrollView style={styles.container}>
  //     <View style={styles.welcomeContainer}>
  // <Text style={styles.headerTopText}>BountyFull WELCOMES YOU!</Text>
  // <Text />
  // <Image
  //   source={require("../assets/images/bin.png")}
  //   style={styles.welcomeImage}
  // />
  // <Text />
  // <Text style={styles.getStartedText}>
  //   💰Clean litter for bounties : ⛳ Track Litter Cleanups
  // </Text>

  // <Text />

  // <Text />

  // <View style={styles.homeButton}>
  //   <Button
  //     type={"outline"}
  //     raised={true}
  //     onPress={this._buttonPostBounty}
  //     title="POST CLEANUP BOUNTY"
  //   />
  // </View>
  // <Text />
  // <View style={styles.homeButton}>
  //   <Button
  //     type={"outline"}
  //     raised={true}
  //     onPress={this._buttonFindOpenBounty}
  //     title="FIND LITTER BOUNTY"
  //   />
  // </View>
  // <Text />
  // <View style={styles.homeButton}>
  //   <Button
  //     type={"outline"}
  //     raised={true}
  //     onPress={this._buttonTrackCleanUp}
  //     title="TRACK CLEANUP"
  //   />
  // </View>
  // <Text />
  // <FetchLocation onGetLocation={this.getUserLocationHandler} />
  // <Text />
  // <AuthScreen />
  //     </View>
  //   </ScrollView>
  // </View>

  render() {
    return (
      <ImageBackground
        source={require("../assets/images/demo/bg.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <View style={styles.headerBg}>
            <Text style={styles.headerTopText}>BountyFull WELCOMES YOU!</Text>
            <Text />

            <Text />
            <Text style={styles.getStartedText}>
              💰Clean litter for bounties : ⛳ Track Litter Cleanups
            </Text>
          </View>
          <Text />

          <Text />

          <View style={styles.homeButton}>
            <Button
              type={"outline"}
              raised={true}
              onPress={this._buttonPostBounty}
              title="POST CLEANUP BOUNTY"
            />
          </View>

          <View style={styles.homeButton}>
            <Button
              type={"outline"}
              raised={true}
              onPress={this._buttonFindOpenBounty}
              title="FIND LITTER BOUNTY"
            />
          </View>

          <View style={styles.homeButton}>
            <Button
              type={"outline"}
              raised={true}
              onPress={this._buttonTrackCleanUp}
              title="TRACK CLEANUP"
            />
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
    backgroundColor: "rgba(0, 255, 0, 0.3)",
    padding: 2,
    margin: 2
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
    color: "white",
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

export default HomeScreen;
