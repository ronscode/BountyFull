import React, { Component } from "react";
import { AppRegistry, TextInput } from "react-native";

export default class PostBountyInputTitle extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Name a quest for the bounty!" };
  }

  render() {
    return (
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
      />
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent("Post Bounty Title", () => PostBountyInputTitle);
