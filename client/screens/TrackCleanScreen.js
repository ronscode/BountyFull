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
          <View style={styles.PostBountyContainer}>
            <Text style={styles.headerTitle}>TRACK YOUR CLEAN UP</Text>
            <Text />
            <Text style={styles.headerTitle}>CURRENTLY CLEANING:</Text>
            <Text>Hiking Trail is Trashed! Please Help!</Text>
            <Text />
            <Text>POSTED BY: Zaphod Beeblbrox</Text>
            <Text style={styles.trackCleanHeader}>BEFORE IMAGE</Text>
            <Image
              source={require("../assets/images/demo/before_1.jpg")}
              style={{ width: 150, height: 150 }}
            />

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
    backgroundColor: "#fff",
    padding: 4,
    margin: 3
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
  PostBountyContainer: {
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
