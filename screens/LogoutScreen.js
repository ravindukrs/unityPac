import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
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

export default class LogoutScreen extends React.Component {
  static navigationOptions = { header: null, headerMode: 'none' }
  render() {
    return (
      <View style={styles.container}>
        <Text>Logout Screen</Text>
        <Button
          title="Log Out"
          onPress={() => this.props.navigation.navigate("Auth")}
        />
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
//Nothing
