import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import PostBountyScreen from "../screens/PostBountyScreen";
import FindBountyScreen from "../screens/FindBountyScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-home${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

const PostBountyStack = createStackNavigator({
  tabBarLabel: PostBountyScreen
});

PostBountyStack.navigationOptions = {
  tabBarLabel: "Post Bounty",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-bulb" : "md-paper-plane"}
    />
  )
};

const FindBountyStack = createStackNavigator({
  tabBarLabel: FindBountyScreen
});

FindBountyStack.navigationOptions = {
  tabBarLabel: "Find Bounty",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

// const LinksStack = createStackNavigator({
//   Links: LinksScreen
// });

// LinksStack.navigationOptions = {
//   tabBarLabel: "Links",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-link" : "md-link"}
//     />
//   )
// };

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-cog"}
    />
  )
};

const ProfileStack = createStackNavigator({
  tabBarLabel: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-happy" : "md-person"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  FindBountyStack,
  PostBountyStack,
  ProfileStack,
  SettingsStack
});
