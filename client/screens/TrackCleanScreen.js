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
import { Button } from "react-native-elements";
import FetchLocation from "../components/FetchLocation";
import { MonoText } from "../components/StyledText";
import PostBountyInputTitle from "../components/PostBountyInputTitle";
import TrackCleanForm from "../components/TrackCleanForm";
import TestImageUpload from "../components/TestImageUpload";

export default class TrackCleanScreen extends React.Component {
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
          <Text style={styles.headerTopText}>TRACK YOUR CLEAN UP</Text>
          <Text style={styles.subTitleText}>CURRENTLY CLEANING:</Text>
          <View style={styles.trackCleanContainer}>
            <Text />

            <Text style={styles.trackBountyTitle}>
              Hiking Trail is Trashed! Please Help!
            </Text>
            <Text />
            <Text style={styles.trackBountyTitle}>
              POSTED BY: Zaphod Beeblbrox
            </Text>

            <TrackCleanForm />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: "#4eba7e"
  },
  trackBountyTitle: {
    fontSize: 16
  },
  headerTopText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
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
