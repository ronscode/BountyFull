import * as React from "react";
import { ImagePicker } from "expo";
import { Formik } from "formik";
import {
  Alert,
  Keyboard,
  Image,
  View,
  StyleSheet,
  Button,
  Text,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import axios from "axios";
const initialValues = {
  image: ""
};

// Reference URL
const proxyUrl = require("../proxyUrl.js");

class TrackCleanForm extends React.Component {
  async onSubmit(values) {
    //List of form values

    let body = {
      _id: this.props._id,
      picUrl: values.image,
      bountyNotes: values.bountyNotes
    };
    let url = proxyUrl.url + "/find/update/";
    await axios
      .put(url, body)
      .then(res => this.props.cleanBounty(values.image))
      .catch(err => console.log(err));
    Alert.alert(JSON.stringify(values));
    Keyboard.dismiss();
  }

  async verifyCleanup() {
    let body = {
      _id: this.props._id
    };
    let url = proxyUrl.url + "/post/update/";
    await axios
      .put(url, body)
      .then(res => this.props.verifyBounty())
      .catch(err => console.log(err));
    Alert.alert("Bounty Verified");
    Keyboard.dismiss();
  }

  async _pickImage(handleChange) {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    console.log(result);
    if (!result.cancelled) {
      handleChange(result.uri);
    }
  }

  async saveStartPic() {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    let body = {
      _id: this.props._id,
      claimer: this.props.email,
      picUrl: result.uri
    };
    let url = proxyUrl.url + "/find/update/";
    await axios
      .put(url, body)
      .then(res => this.props.startBounty(result.uri))
      .catch(err => console.log(err));
  }

  render() {
    let { pictures, firstName, poster, isCleaned, email } = this.props;
    console.log(pictures);
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
              <View style={styles.imageContainer}>
                <View style={styles.beforeImageLeft}>
                  <Text style={styles.trackCleanHeader}>Before Clean</Text>
                  {pictures.post ? (
                    <Image
                      source={{ uri: pictures.post }}
                      style={{ width: 120, height: 120 }}
                    />
                  ) : (
                    <Image
                      source={require("../assets/images/demo/trackStartDefault.png")}
                      style={{ width: 120, height: 120 }}
                    />
                  )}
                </View>
                <View style={styles.afterImageRight}>
                  <Text style={styles.trackCleanHeader}>After Clean</Text>
                  {pictures.start ? (
                    <Image
                      source={{ uri: pictures.start }}
                      style={{ width: 150, height: 150 }}
                    />
                  ) : (
                    <Button
                      title="ADD START PIC"
                      icon="add-a-photo"
                      mode="contained"
                      style={styles.button}
                      onPress={() => this.saveStartPic()}
                    />
                  )}
                </View>
              </View>

              <Text>HOW DID THE CLEANUP GO?</Text>

              <TextInput
                onChangeText={handleChange("bountyNotes")}
                style={styles.bountyNotes}
                value={values.bountyNotes}
                label="bountyNotes"
                placeholder="Notes about cleanup"
              />

              <Button
                title="ADD FINAL CLEANUP PIC"
                icon="add-a-photo"
                mode="contained"
                style={styles.button}
                onPress={() => {
                  this._pickImage(handleChange("image"));
                }}
              />

              <Text />
              <Text>
                Everything clean? Ready for inspection? Submit clean up for
                review!
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
              <Text style={styles.trackCleanHeader}>
                FINAL CLEAN UP DETAILS:
              </Text>
              <Text style={styles.trackCleanSubHeader}>
                AFTER CLEANUP PICTURE:
              </Text>
              {values.image && values.image.length > 0 ? (
                <Image
                  style={styles.trackCleanAfterImage}
                  source={{ uri: values.image }}
                />
              ) : (
                <Image
                  source={require("../assets/images/demo/uploadImage.png")}
                  style={{ width: 150, height: 150 }}
                />
              )}

              <Text>
                A new cleanup by {firstName} was completed for {poster}
              </Text>
              <Text />

              <Text style={styles.trackCleanSubHeader}>
                Notes from the cleaner:{" "}
              </Text>
              <Text />
              <Text>{values.bountyNotes}</Text>
              {isCleaned && email === poster ? (
                <View>
                  <Text>PosterActions</Text>
                  <Button
                    title="VERIFY CLEANUP"
                    icon="add-a-photo"
                    mode="contained"
                    style={styles.button}
                    onPress={() => this.verifyCleanup()}
                  />
                </View>
              ) : email === poster ? (
                <Text>Area not yet cleaned</Text>
              ) : (
                <Text>Once cleaned, bounty poster will verify!</Text>
              )}
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

let mapStateToProps = state => {
  return {
    user: state.user,
    firstName: state.user.firstName,
    email: state.user.email,
    _id: state.bounties._id,
    claimer: state.bounties.claimer,
    poster: state.bounties.poster,
    isCleaned: state.bounties.isCleaned,
    bountyTitle: state.bounties.bountyTitle,
    bountyNotesPoster: state.bounties.bountyNotesPoster,
    bountyPoster: state.bounties.bountyPoster,
    bountyAmount: state.bounties.bountyAmount,
    pictures: state.bounties.pictures
  };
};

let mapDispatchToProps = dispatch => {
  return {
    startBounty: picture => dispatch({ type: "START_BOUNTY", picture }),
    cleanBounty: picture => dispatch({ type: "CLEAN_BOUNTY", picture }),
    verifyBounty: () => dispatch({ type: "VERIFY_BOUNTY" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackCleanForm);

const styles = StyleSheet.create({
  container: {
    flex: 1
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

  inputBox: {
    borderColor: "lightgrey",
    borderWidth: 1
  },
  inputBoxWeight: {
    borderColor: "lightgrey",
    borderWidth: 1,
    width: 42
  },
  trackCleanAfterImage: {
    width: 150,
    height: 150
  },
  bountyNotes: {
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
    marginBottom: 2
  },
  trackCleanSubHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(96,100,109, 1)",
    lineHeight: 21,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 2
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
