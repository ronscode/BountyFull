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
import CameraExampleScreen from "../screens/CameraExampleScreen";
import CameraScreen from "../components/CameraScreen";
import TrackCleanScreen from "../screens/TrackCleanScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Camera: CameraExampleScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarOptions: {
    activeTintColor: "#00a86b",
    inactiveTintColor: "#ccc"
  },
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

const CameraExampleStack = createStackNavigator({
  tabBarLabel: CameraExampleScreen
});

CameraExampleStack.navigationOptions = {
  tabBarLabel: "Camera",
  tabBarOptions: {
    activeTintColor: "#00a86b",
    inactiveTintColor: "#ccc"
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-camera" : "md-camera"}
    />
  )
};

const PostBountyStack = createStackNavigator({
  tabBarLabel: PostBountyScreen
});

PostBountyStack.navigationOptions = {
  tabBarLabel: "Post Bounty",
  tabBarOptions: {
    activeTintColor: "#00a86b",
    inactiveTintColor: "#ccc"
  },
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
  tabBarOptions: {
    activeTintColor: "#00a86b",
    inactiveTintColor: "#ccc"
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

const TrackCleanStack = createStackNavigator({
  Settings: TrackCleanScreen
});

TrackCleanStack.navigationOptions = {
  tabBarLabel: "Track Cleanup",
  tabBarOptions: {
    activeTintColor: "#00a86b",
    inactiveTintColor: "#ccc"
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-watch" : "md-watch"}
    />
  )
};

const ProfileStack = createStackNavigator({
  tabBarLabel: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarOptions: {
    activeTintColor: "#00a86b",
    inactiveTintColor: "#ccc"
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      style={{ color: "red" }}
      focused={focused}
      name={Platform.OS === "ios" ? "ios-happy" : "md-person"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  TrackCleanStack,
  FindBountyStack,
  PostBountyStack,
  ProfileStack
});
