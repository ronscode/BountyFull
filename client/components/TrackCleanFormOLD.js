// Formik x React Native example
import React, { Component } from "react";
import {
  Image,
  Button,
  View,
  TextInput,
  Platform,
  StyleSheet
} from "react-native";
import { FormLabel, FormInputs, Divider, Text } from "react-native-elements";
import { ImagePicker } from "expo";

import { Formik } from "formik";
import BountyFirstImage from "../components/BountyFirstImage";
import StartBountyImagePicker from "../components/StartBountyImagePicker";

// const _pickCleanImage = async handleChange => {
//   let result = await ImagePicker.launchImageLibraryAsync({
//     allowsEditing: true,
//     aspect: [4, 3]
//   });
//   console.log(result);
//   if (!result.cancelled) {
//     handleChange(result.uri);
//   }
// };

export default class TrackCleanForm extends React.Component {
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
      <Formik
        initialValues={{ BountyTitle: "" }}
        onSubmit={values => console.log(values)}
      >
        {props => (
          <View>
            <Button
              title="Add a Form pic"
              icon="add-a-photo"
              mode="contained"
              style={styles.button}
              onPress={() => {
                this._pickImage(handleChange("image"));
              }}
            />
            <Text>HOW DID THE CLEANUP GO?</Text>
            <TextInput
              style={styles.inputBox}
              onChangeText={props.handleChange("TrackCleanNotes")}
              onBlur={props.handleBlur("TrackCleanNotes")}
              value={props.values.TrackCleanNotes}
              placeholder="Let us know how the cleanup went"
            />
            <Text />
            <Text>ESTIMATED WEIGHT OF TRASH:</Text>
            <TextInput
              style={styles.inputBox}
              keyboardType="numeric"
              onChangeText={props.handleChange("TrashWeight")}
              onBlur={props.handleBlur("TrashWeight")}
              value={props.values.BountyAmount}
            />
            <Text />

            <Text />
            <Text>Ready for inspection? Submit clean up for review</Text>
            <Button onPress={props.handleSubmit} title="Submit" />
            <Text />
            <Text style={styles.trackCleanHeader}>FINAL CLEAN UP DETAILS:</Text>
            <Text>
              A new cleanup by "Render Username" was completed for "Render
              Poster"{" "}
            </Text>
            <Text />
            <Text>
              An estimated {props.values.TrashWeight} lbs of trash collected
            </Text>
            <Text>Notes from the cleaner: {props.values.TrackCleanNotes}</Text>
            <Text />
            <Text style={styles.thanksBox}>
              Thank you for helping clean up the world! Keep up the good work
              and tell a friend!
            </Text>
          </View>
        )}
      </Formik>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [4, 3],
      exif: true
    });

    console.log(result);

    if (!result.cancelled) {
      console.log(result.uri);
      var nbi = result.uri;
      console.log(result.exif);
      console.log("the new bounty image is " + nbi);
      this.setState({ image: result.uri });
      console.log("the state image string is " + this.state.image);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  inputBox: {
    borderColor: "lightgrey",
    borderWidth: 1
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
  homeButtons: {
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10
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
  trackCleanHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "rgba(96,100,109, 1)",
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

/* <ScrollView>
              <Text>NEW BOUNTY DETAILS:</Text>
              <Text>{props.values.BountyTitle}</Text>
              <Text>{props.values.BountyAmount}</Text>
              <Text>{props.values.BountyNotes}</Text>
            </ScrollView> */

// import React from "react";
// import { Button, Image, View } from "react-native";
// import { ImagePicker } from "expo";

// export default class StartBountyImagePicker extends React.Component {
//   state = {
//     image: null
//   };

//   render() {
//     let { image } = this.state;

//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Button
//           title="Pick Your Starting Picture from the camera roll"
//           onPress={this._pickImage}
//         />
//         {image && (
//           <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
//         )}
//       </View>
//     );
//   }

//   _pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing: true,
//       aspect: [4, 3]
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       console.log({ image: result.uri });
//       this.setState({ image: result.uri });
//     }
//   };
// }
