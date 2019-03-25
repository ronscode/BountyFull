// Formik x React Native example
import React, { Component } from "react";
import { Image, Button, TextInput, View, Text } from "react-native";
import { FormLabel, FormInputs, Divider } from "react-native-elements";
import { ImagePicker } from "expo";

import { Formik } from "formik";
import BountyFirstImage from "../components/BountyFirstImage";
import StartBountyImagePicker from "../components/StartBountyImagePicker";

var nbi = "";
export default class BasicForm extends React.Component {
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
            <Text>GIVE YOUR BOUNTY A TITLE:</Text>
            <TextInput
              onChangeText={props.handleChange("BountyTitle")}
              onBlur={props.handleBlur("BountyTitle")}
              value={props.values.BountyTitle}
            />
            <Text>AMOUNT:</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={props.handleChange("BountyAmount")}
              onBlur={props.handleBlur("BountyAmount")}
              value={props.values.BountyAmount}
            />
            <Text>EXTRA NOTES:</Text>
            <TextInput
              onChangeText={props.handleChange("BountyNotes")}
              onBlur={props.handleBlur("BountyNotes")}
              value={props.values.BountyNotes}
            />
            <Button onPress={props.handleSubmit} title="Submit" />
            <Text>-----</Text>
            <Text />
            <Text>NEW BOUNTY DETAILS:</Text>
            <Text>Bounty Poster is: (render username) </Text>

            <Image source={this.state.image} />
            <Text>Your Bounty Title:{props.values.BountyTitle}</Text>
            <Text>Bounty Amount:{props.values.BountyAmount}</Text>
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
