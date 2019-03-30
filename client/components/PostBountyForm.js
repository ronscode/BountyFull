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
import axios from "axios";

// Reference URL
const proxyUrl = require("../proxyUrl.js");

const initialValues = {
  image: ""
};
export default class App extends React.Component {
  //Posts new bounty to DB. Also has the thankyou message that pops up after submission

  async onSubmit(values) {
    //List of form values to be inserted here
    let body = {
      poster: "Zaphod",
      amount: values.BountyAmount,
      location: "22232323232 NW",
      picture: values.image,
      title: values.BountyTitle
    };

    let message =
      "Thank you! Your bounty " +
      values.BountyTitle +
      " for $" +
      values.BountyAmount +
      " has been posted.";
    await axios
      .post(proxyUrl.url + "/post/", body)
      .then(res => this.props.saveBounty(res.data))
      .then(res => this.setState({ bounties: res.data }))
      .catch(err => console.log(err));
    console.log(values.bountyNotes);
    Alert.alert(message);

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
              <View>
                <Button
                  title="PICTURE OF CLEANUP"
                  rightIcon={{ name: "add-a-photo" }}
                  onPress={() => {
                    this._pickImage(handleChange("image"));
                  }}
                />
                <Text style={styles.postBountyText}>
                  Share a starting picture for the cleaner
                </Text>
              </View>
              <Text />
              <TextInput
                onChangeText={handleChange("BountyTitle")}
                style={styles.inputBox}
                value={values.BountyTitle}
                label="Bounty Title"
                placeholder="Catchy Title for Terrific Trash Take Away!"
              />
              <Text />

              <TextInput
                onChangeText={handleChange("BountyAmount")}
                style={styles.inputBoxAmount}
                value={values.BountyAmount}
                label="Bounty Amount"
                placeholder="$"
                keyboardType="numeric"
              />
              <Text />

              <Text style={styles.postBountySubHeader}>NOTES FOR CLEANER:</Text>
              <TextInput
                onChangeText={handleChange("bountyNotes")}
                style={styles.inputBoxNotes}
                value={values.bountyNotes}
                label="Notes for cleaner. Gloves? Big or Small? Dangerous?"
                placeholder="Notes about cleanup"
              />

              <Text />
              <Text>Review the cleanup details below and then submit.</Text>
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

              {/* 
              // This is the preview before submission section  */}
              <Text style={styles.postBountySubHeader}>
                YOUR CLEANUP DETAILS:
              </Text>
              <Text style={styles.bountyReviewTitle}>TITLE:</Text>
              <Text style={styles.bountyReviewTitleInput}>
                {values.BountyTitle}
              </Text>

              <Text style={styles.postBountySubHeader}>
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
                  style={{ width: 120, height: 120 }}
                />
              )}
              <Text style={styles.postBountySubHeader}>
                Notes About The Cleanup
              </Text>
              <Text />
              <Text style={styles.bountyReviewText}>{values.bountyNotes}</Text>

              <Text />
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
  postBountyText: {
    textAlign: "center",
    paddingTop: 10,
    marginBottom: 2
  },
  homeButton: {
    width: "42%",
    fontSize: 15,
    height: "10%",
    marginBottom: 15,
    textAlign: "center"
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
    width: 120,
    height: 120
  },
  postBountyNotes: {
    height: 80,
    marginTop: 2,
    marginBottom: 2,
    borderColor: "lightgrey",
    borderWidth: 1
  },
  postBountyHeader: {
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
  postBountySubHeader: {
    fontSize: 18,
    marginBottom: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    textShadowColor: "rgba(0,0,0, 1)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3
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
