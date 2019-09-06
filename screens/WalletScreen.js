import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import { createStackNavigator } from "react-navigation";

export default class OnMeScreen extends React.Component {
  static navigationOptions = { header: null, headerMode: 'none' }
  render() {
    return (
      <View style={styles.container}>
        <Text>Wallet Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

