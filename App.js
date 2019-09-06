import React from "react";

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import * as Font from 'expo-font'
//Screen Imports
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen"
import OnMeScreen from "./screens/OnMeScreen"
import WalletScreen from "./screens/WalletScreen"

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  }

  loadFonts = () =>{
    return Font.loadAsync({
      "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf")
    });
  }

  async componentWillMount() {
    await this.loadFonts();
    this.setState({ fontsLoaded: true });
  }
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStack = createStackNavigator({ Home: HomeScreen, OnMe: OnMeScreen, Wallet: WalletScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen });

// const AppStackNavigator =  createStackNavigator({
//   Login: LoginScreen,
//   Home: HomeScreen
// })


const AppStackNavigator = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
);


//
