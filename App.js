import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import BookTransactionScreen from "./screens/BookTransactionScreen";
import SearchScreen from "./screens/SearchScreen";
import { createBottomTabNavigator } from "react-navigation-tabs";
import "react-native-vector-icons";
import { Icon } from "react-native-elements";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const BottomTab = createBottomTabNavigator(
  {
    BookTransactionScreen: { screen: BookTransactionScreen },
    SearchScreen: { screen: SearchScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({}) => {
        const routeName = navigation.state.routeName;
        if (routeName === "BookTransactionScreen") {
          return <Icon name="gitlab" type="ant-design" />;
        } else if (routeName === "SearchScreen") {
          return <Icon name="file-markdown" type="ant-design" />;
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(BottomTab);
