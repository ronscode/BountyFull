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
import ListUserBounties from "../components/ListUserBounties";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewProfileCard}>
          <View style={styles.profileBoxHeader}>
            <Text style={styles.profileBoxUsername}>Zaphod BeebleBrox</Text>
            <Text style={styles.profileBoxAmount}>🌟</Text>
          </View>
          <View style={styles.profileBox}>
            <Image
              style={styles.listBountyImage}
              source={require("../assets/images/demo/uploadImage.png")}
            />
            <View style={styles.profileBoxColumn}>
              <View style={styles.labelRow}>
                <Text style={styles.profileLabel}>VERIFIED CLEANUPS: </Text>
                <Text>42</Text>
              </View>
              <View style={styles.labelRow}>
                <Text style={styles.profileLabel}>AMOUNT EARNED:</Text>
                <Text> $583</Text>
              </View>

              <Button title={"Tip User"} />
            </View>
          </View>
        </View>
        <ScrollView>
          <Text style={styles.subTitleText}>Verified Cleanups By Zaphod:</Text>
          <ListUserBounties />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4eba7e",
    padding: 2
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
  profileBox: {
    flexDirection: "row",
    padding: 1,
    backgroundColor: "#FFFFFF"
  },
  labelRow: {
    flexDirection: "row"
  },
  profileLabel: {
    fontWeight: "bold"
  },
  profileBoxColumn: {
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

  viewProfileCard: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "grey",
    borderWidth: 1,
    marginTop: 30,
    marginBottom: 15,

    backgroundColor: "#FFFFFF"
  },
  profileBoxHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  profileText: {
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
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  }
});
