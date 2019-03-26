// Formik x React Native example
import React, { Component } from "react";
import { Image, Button, TextInput, View, Text } from "react-native";
import { FormLabel, FormInputs, Divider } from "react-native-elements";
import { ImagePicker } from "expo";

import { Formik } from "formik";
import BountyFirstImage from "./BountyFirstImage";
import StartBountyImagePicker from "./StartBountyImagePicker";

var nbi = "";
export default class PostBountyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: "" };
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
              title="Pick an image from camera roll"
              onPress={this._pickImage}
              onBlur={props.handleBlur("BountyFirstImage")}
              value={props.values.BountyFirstImage}
            />
            <Text />
            <Text>GIVE YOUR BOUNTY A TITLE:</Text>
            <TextInput
              style={{
                borderColor: "lightgrey",
                borderWidth: 1
              }}
              onChangeText={props.handleChange("BountyTitle")}
              onBlur={props.handleBlur("BountyTitle")}
              value={props.values.BountyTitle}
            />
            <Text>AMOUNT:</Text>
            <TextInput
              style={{
                borderColor: "lightgrey",
                borderWidth: 1,
                width: 42
              }}
              keyboardType="numeric"
              onChangeText={props.handleChange("BountyAmount")}
              onBlur={props.handleBlur("BountyAmount")}
              value={props.values.BountyAmount}
            />
            <Text>EXTRA NOTES:</Text>
            <TextInput
              style={{
                borderColor: "lightgrey",
                borderWidth: 1,
                height: 120
              }}
              onChangeText={props.handleChange("BountyNotes")}
              onBlur={props.handleBlur("BountyNotes")}
              value={props.values.BountyNotes}
            />
            <Button onPress={props.handleSubmit} title="Submit" />
            <Text />
            <Text>NEW BOUNTY DETAILS:</Text>
            <Text>Bounty Poster is: (render username) </Text>

            <Image source={this.state.image} />
            <Text>Your Bounty Title:{props.values.BountyTitle}</Text>
            <Text>Bounty Amount: ${props.values.BountyAmount}</Text>
            <Text>Extra Notes:{props.values.BountyNotes}</Text>
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
