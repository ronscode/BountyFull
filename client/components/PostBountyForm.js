import * as React from "react";
import { ImagePicker } from "expo";
import { Formik } from "formik";
import { TextInput, Divider } from "react-native-paper";
import {
  Alert,
  Keyboard,
  Image,
  View,
  StyleSheet,
  Text,
  Button
} from "react-native";
import UsersMap from "../components/UsersMap";
import FetchBountyLocation from "../components/FetchBountyLocation";
import axios from 'axios';


// Reference URL
const proxyUrl = require('../proxyUrl.js');

const initialValues = {
  image: ""
};

export default class App extends React.Component {
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
  async onSubmit(values) {
    //List of form values to be inserted here
    let body = {
        poster: 'Fred',
        amount: 25,
        location: '22232323232',
        picture: 'URL HERE',
        title: 'Fancy fancy title'
    };
    let message = 'Thank you! Your bounty {values.BountyTitle} for {values.BountyAmount} has been posted.';
    await axios.post(proxyUrl.url + '/post/', body)
        .then(res => this.props.saveBounty(res.data))
        .catch(err => console.log(err));
    Alert.alert(message)
    Keyboard.dismiss();
  }

  async _pickImage(handleChange) {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    console.log("Thank you for the bounty submission!" + result);
    if (!result.cancelled) {
      handleChange(result.uri);
    }
  }

  render() {
    return (
      <View style={[styles.container, styles.content]}>
        <Formik
          initialValues={initialValues}
          onSubmit={this.onSubmit.bind(this)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <View>
              {/* <TextInput
                onChangeText={handleChange("title")}
                value={values.title}
                label="Title"
                placeholder="e.g My Awesome Selfie"
              /> */}

              <Text style={styles.trackCleanSubHeader}>NAME YOUR CLEANUP:</Text>

              <TextInput
                onChangeText={handleChange("BountyTitle")}
                style={styles.inputBox}
                value={values.BountyTitle}
                label="BountyTitle"
                placeholder="Use A Catchy Title for Terrific Trash Cleanup!"
              />
              <Text />

              <FetchBountyLocation
                onGetLocation={this.getUserLocationHandler}
              />
              <Text />

              <Text style={styles.trackCleanSubHeader}>SET BOUNTY AMOUNT:</Text>

              <TextInput
                onChangeText={handleChange("BountyAmount")}
                style={styles.inputBoxAmount}
                value={values.BountyAmount}
                label="BountyAmount"
                placeholder="$"
                keyboardType="numeric"
              />
              <Text />

              <Button
                title="PICTURE OF THE LITTER"
                icon="add-a-photo"
                mode="contained"
                style={styles.button}
                onPress={() => {
                  this._pickImage(handleChange("image"));
                }}
              />
              <Text />
              <Text style={styles.trackCleanSubHeader}>NOTES FOR CLEANER:</Text>
              <TextInput
                onChangeText={handleChange("bountyNotes")}
                style={styles.inputBoxNotes}
                value={values.bountyNotes}
                label="bountyNotes"
                placeholder="Notes about cleanup"
              />

              <Text />
              <Text>
                Ready to post your litter cleanup bounty? Review the cleanup
                details below before submitting.
              </Text>
              <Text />
              <Button
                onPress={handleSubmit}
                title={"submit"}
                style={styles.button}
              >
                Submit
              </Button>
              <Text />
              <Text />
              <Text />
              <Divider />
              <Text />
              <Text style={styles.trackCleanHeader}>YOUR CLEANUP DETAILS:</Text>
              <Text style={styles.bountyReviewTitle}>TITLE:</Text>
              <Text style={styles.bountyReviewTitleInput}>
                {values.BountyTitle}
              </Text>

              <Text style={styles.trackCleanSubHeader}>
                BEFORE CLEANUP PICTURE:
              </Text>
              {values.image && values.image.length > 0 ? (
                <Image
                  style={styles.bountyBeforeImage}
                  source={{ uri: values.image }}
                />
              ) : (
                <Image
                  source={require("../assets/images/demo/uploadImage.png")}
                  style={{ width: 150, height: 150 }}
                />
              )}
              <Text style={styles.trackCleanSubHeader}>
                Notes About The Cleanup
              </Text>
              <Text />
              <Text style={styles.bountyReviewText}>{values.bountyNotes}</Text>

              <Text />

              <Text style={styles.thanksBox}>
                Thank you for helping clean up the world! Keep up the good work
                and tell a friend!
              </Text>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bountyReviewTitle: {},
  bountyReviewTitleInput: {},
  inputBox: {
    borderColor: "lightgrey",
    borderWidth: 1
  },
  inputBoxAmount: {
    borderColor: "lightgrey",
    borderWidth: 1
  },
  inputBoxNotes: {
    borderColor: "lightgrey",
    borderWidth: 1,
    height: 80
  },
  inputBoxWeight: {
    borderColor: "lightgrey",
    borderWidth: 1,
    width: 42
  },
  bountyBeforeImage: {
    width: 150,
    height: 150
  },
  trackCleanNotes: {
    height: 80,
    marginTop: 2,
    marginBottom: 2,
    borderColor: "lightgrey",
    borderWidth: 1
  },
  trackCleanHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 2,
    paddingTop: 2,
    paddingBottom: 2
  },
  trackCleanSubHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(96,100,109, 1)",
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 2
  },
  bountyReviewText: {
    fontSize: 14,
    lineHeight: 18,
    marginTop: 2,
    marginBottom: 2,
    paddingTop: 2,
    paddingBottom: 2
  },
  thanksBox: {
    borderColor: "lightgrey",
    borderWidth: 1,
    backgroundColor: "black",
    color: "lightblue",
    fontSize: 15,
    padding: 3,
    textAlign: "center"
  },
  content: {
    paddingTop: 40,
    padding: 16
  },
  button: {
    marginTop: 16
  }
});
