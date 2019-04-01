import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Google from "expo";
import { Button } from "react-native-elements";
import axios from "axios";
import { connect } from "react-redux";

// Reference URL
const proxyUrl = require("../proxyUrl.js");
class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  signIn = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId:
          "990631818883-q2jq7nd4agsl7nn5f3c0s2puo4r62fdk.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      });
      if (result.type === "success") {
        await axios
          .post(proxyUrl.url + "/users/login/", result)
          .then(res => {
            this.props.saveUser(res.data);
          })
          .catch(err => console.log(err));
      } else {
        console.log("cancelled");
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.email ? (
          <LoggedInPage
            name={this.props.firstName}
            photoUrl={this.props.profilePic}
          />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
      </View>
    );
  }
}

let mapStateToProps = state => {
  return {
    email: state.user.email,
    firstName: state.user.firstName,
    profilePic: state.user.profilePic
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
)(AuthScreen);

const LoginPage = props => {
  return (
    <View>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  );
};

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 26,
    fontFamily: "pittsbrook-sans",
    color: "white"
  },
  image: {
    marginTop: 15,
    width: 100,
    height: 100,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
});
