import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { WebBrowser } from "expo";
import AuthScreen from "../components/AuthScreen";

import { MonoText } from "../components/StyledText";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View styles={styles.container}>
        <View style={styles.ViewProfileCard}>
          <View style={styles.profileBoxHeader}>
            <Text style={styles.profileBoxUsername}>
              {" "}
              This dot state . user name{" "}
            </Text>
            <Text style={styles.profileBoxAmount}>Gold Start Cleaner</Text>
          </View>
          <View style={styles.bountyBox}>
            {/* <Image
            style={styles.listBountyImage}
            source={{ uri: bounty.pictures.post }}
          /> */}
            <View style={styles.bountyBoxColumn}>
              <Text>Completed Cleanups: 42</Text>
              <Text>AMOUNT EARNED: $583</Text>
              <Text>Pre-Clean Notes:</Text>
              <Text>COMMENTS</Text>
              <Button containerStyle={{ width: "50%" }} title="Start Clean" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 2
  },
  bountyBox: { flex: 1, flexDirection: "row", padding: 1 },
  bountyBoxColumn: {
    flex: 1,
    flexDirection: "column",
    padding: 1
  },
  profileBoxUsername: {
    marginLeft: 2,
    width: 308,
    marginBottom: 1,
    color: "rgba(0,0,0,0.9)",
    fontSize: 22
  },
  profileBoxAmount: {
    marginRight: 2,
    width: 62,
    color: "rgba(33,108,42,1)",
    fontSize: 22
  },

  profileViewCard: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 15,
    width: 360
  },
  profileBoxHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
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
  },

  container: {
    flex: 1,
    backgroundColor: "#fff"
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
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
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

// <View style={styles.container}>
//   <ScrollView
//     style={styles.container}
//     contentContainerStyle={styles.contentContainer}
//   >
//     <View style={styles.welcomeContainer}>
//       <AuthScreen />
//     </View>

//     <View style={styles.getStartedContainer}>
//       <Text style={styles.getStartedText}>PROFILE PAGE</Text>

//       <View
//         style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
//       />

//       <Text style={styles.getStartedText}>FirstName</Text>
//       <Text style={styles.getStartedText}>LastName</Text>
//       <Text style={styles.getStartedText}>Email</Text>
//       <Text style={styles.getStartedText}>Bounties Cleaned</Text>
//       <Text style={styles.getStartedText}>Bounties Posted</Text>
//       <Text style={styles.getStartedText}>
//         Bio: I love cheesecake tootsie roll topping sweet tootsie roll.
//         Marshmallow dessert donut marzipan sugar plum. Brownie dessert cotton
//         candy sweet roll I love caramels topping pastry.
//       </Text>
//     </View>

//     <View style={styles.helpContainer}>
//       <TouchableOpacity
//         onPress={this._handleHelpPress}
//         style={styles.helpLink}
//       />
//     </View>
//   </ScrollView>

//   <View style={styles.tabBarInfoContainer}>
//     <Text style={styles.tabBarInfoText}>
//       This is a tab bar. You can edit it in:
//     </Text>

//     <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
//       <MonoText style={styles.codeHighlightText}>
//         navigation/MainTabNavigator.js
//       </MonoText>
//     </View>
//   </View>
//   {this._maybeRenderDevelopmentModeWarning()}
// </View>;
