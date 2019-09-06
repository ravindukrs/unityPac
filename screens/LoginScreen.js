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

import {createStackNavigator} from 'react-navigation'

//Image imports
import bgImg from "../assets/backImg1.jpg";
import logo from "../assets/logo.png";

//Import Icons
import Icon from "react-native-vector-icons/Ionicons";

//Get Width
const { width: WIDTH } = Dimensions.get("window");



const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class LoginScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      showPass: true,
      press: false
    };
  }

  static navigationOptions = { header: null }

  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true });
    } else {
      this.setState({ showPass: true, press: false });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <DismissKeyboard>
          <ImageBackground source={bgImg} style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo} />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                name={"ios-person"}
                size={28}
                color={"rgba(225,225,225,0.7)"}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder={"Username"}
                placeholderTextColor="rgba(225,225,225,0.5)"
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name={"ios-lock"}
                size={28}
                color={"rgba(225,225,225,0.7)"}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder={"Password"}
                secureTextEntry={this.state.showPass}
                placeholderTextColor="rgba(225,225,225,0.5)"
                underlineColorAndroid="transparent"
              />
              <TouchableOpacity
                style={styles.btnEye}
                onPress={this.showPass.bind(this)} //this.showPass.bind(this)
              >
                <Icon
                  name={this.state.press == false ? "ios-eye" : "ios-eye-off"}
                  size={26}
                  color={"rgba(225,225,225,0.7)"}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
            style={styles.btnLogin}
            onPress={()=>this.props.navigation.navigate('App')}>
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
          </ImageBackground>
        </DismissKeyboard>
      </KeyboardAvoidingView>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: 'white',
      alignItems: "center",
      justifyContent: "center",
      width:WIDTH
    },
    logoContainer: {
      alignItems: "center",
      marginBottom: 70
    },
    logo: {
      width: 200,
      height: 183.8
    },
    input: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 25,
      paddingLeft: 45,
      fontSize: 16,
      backgroundColor: "rgba(0,0,0,0.35)",
      color: "rgba(225,225,225,0.7)",
      marginHorizontal: 25
    },
    inputIcon: {
      position: "absolute",
      top: 8,
      left: 37
    },
    inputContainer: {
      marginTop: 12
    },
    btnEye: {
      position: "absolute",
      top: 8,
      right: 37
    },
    btnLogin: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 25,
      backgroundColor: "rgba(76,64,155,0.8)",
      marginTop: 25,
      justifyContent: "center"
    },
    textLogin: {
      color: "rgba(225,225,225,0.7)",
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold"

    }
  });
  