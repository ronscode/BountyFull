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

const initialValues = {
  image: ""
};

export default class App extends React.Component {
  onSubmit(values) {
    //List of form values
    console.log(values);
    Alert.alert(JSON.stringify(values));
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
              <View style={styles.imageContainer}>
                <View style={styles.beforeImageLeft}>
                  <Text style={styles.trackCleanHeader}>BEFORE IMAGE</Text>
                  <Image
                    source={require("../assets/images/demo/before_1.jpg")}
                    style={{ width: 150, height: 150 }}
                  />
                </View>
                <View style={styles.afterImageRight}>
                  <Text style={styles.trackCleanHeader}>AFTER IMAGE</Text>
                  <Image
                    source={require("../assets/images/demo/after_1.jpg")}
                    style={{ width: 150, height: 150 }}
                  />
                </View>
              </View>

              <Text>HOW DID THE CLEANUP GO?</Text>

              <TextInput
                onChangeText={handleChange("TrackCleanNotes")}
                style={styles.trackCleanNotes}
                value={values.TrackCleanNotes}
                label="TrackCleanNotes"
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
                A new cleanup by "Render Username" was completed for "Render
                Poster"{" "}
              </Text>
              <Text />

              <Text style={styles.trackCleanSubHeader}>
                Notes from the cleaner:{" "}
              </Text>
              <Text />
              <Text>{values.TrackCleanNotes}</Text>
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
