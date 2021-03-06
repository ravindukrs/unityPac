import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback, FlatList, StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

import OnMeScreen from "./OnMeScreen";
import WalletScreen from "./WalletScreen";
import HandShakeScreen from "./HandShakeScreen";
import LogoutScreen from "./LogoutScreen";
<<<<<<< HEAD
import getDirections from 'react-native-google-maps-directions'
Geocoder.init("AIzaSyCPaudKWSvsWVrhth6Io1oPvC5aB7AwxM8");
=======

Geocoder.init("HIDDEN KEY");
>>>>>>> e094952eb73a4b7ee34c097be96fc51a0c24fc4d


const { height, width } = Dimensions.get('screen');
const parcels = [
  {
    id: 1,
    title: "12.30PM",
    type: "Envelope",
    weight: 1.12,
    fragile: "No",
    customer: "Ravindu",
    contact: "071 7503812",
    rating: 3.3,
    location: {
      latitude: 6.9734998,
      longitude: 79.9164169,
    },
    price: 120.50,
    address: null

  },
  {
    id: 2,
    title: "2.15PM",
    type: "Box",
    weight: 2.12,
    fragile: "Yes",
    customer: "Hasitha",
    contact: "071 7503812",
    rating: 3.4,
    location: {
      latitude: 6.9671388,
      longitude: 79.9142919,
    },
    price: 150.50,
    address: null
  },
  {
    id: 3,
    title: "1.45PM",
    type: "Bag",
    weight: 1.5,
    fragile: "No",
    customer: "Kasun",
    contact: "071 7503812",
    rating: 4.8,
    location: {
      latitude: 6.9685184,
      longitude: 79.9085285,
    },
    price: 60.24,
    address: null
  },
  {
    id: 4,
    title: "6.15PM",
    type: "Box",
    weight: 2.5,
    fragile: "No",
    customer: "Shirantha",
    contact: "071 7503812",
    rating: 3.3,
    location: {
      latitude: 6.981979,
      longitude: 79.9008464,
    },
    price: 120.50,
    address: null
  },

];
var addPart = null;
export class HomeScreen extends React.Component {
  state = {
    mapRegion: { latitude: 6.9752, longitude: 79.9207, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    addressesLoaded: false,
    active: null
  };

  handleGetDirections = (parcel) => {
    console.log("Touched and Fired");
    const data = {
       source: {
        latitude: 6.9734998,
        longitude: 79.9164169
      },
      destination: {
        latitude: parcel.location.latitude,
        longitude: parcel.location.longitude
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      waypoints: [
      
      ]
    }
 
    getDirections(data)
  }

  async componentDidMount() {
    await this.populateAddresses();
    await console.log(`Current State 2: ${this.state.addressesLoaded}`);
    await this.setState({addressesLoaded: true });
    await console.log(`Current State 3: ${this.state.addressesLoaded}`);
    await this.setState({addressesLoaded: true });
    for (let parcel of parcels) {
      console.log(`Test Parcel Address: ${parcel.address}`);
    }
    this.setState({addressesLoaded: true });
  }

  // getAddress = (parcel) => {
  //   Geocoder.from(parcel.location.latitude, parcel.location.longitude)
  //     .then(json => {
  //       var addressComponent = json.results[0].address_components[0];    
  //       addPart = addressComponent.long_name;
  //       console.log(`From Adpart: ${addPart}`);
  //       return;
  //     })
  //     .catch(error => console.warn(`Ravindu's Error: ${error}`));
  // };

  populateAddresses = () =>{
    for (let parcel of parcels) {
      Geocoder.from(parcel.location.latitude, parcel.location.longitude)
      .then(json=>{
        var addressComponent = json.results[0].address_components[0];    
        addPart = addressComponent.long_name;
      }).then(parcel.address = addPart).then(console.log(parcel.address));
      // await console.log("Execute Function");
      // await this.getAddress(parcel);
      // parcel.address = addPart;
      // await console.log(`Parcel Address: ${parcel.address}`);
  }

   console.log(`Current State 1: ${this.state.addressesLoaded}`);
  }

  renderPackage = (item) => {
    return (
      <TouchableWithoutFeedback key={`parcel-${item.id}`} onPress={() => this.setState({ active: item.id })}>
        <View style={styles.parcel}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Icon
                name={"md-clock"}
                size={20}
                color={"rgba(225,225,225,0.85)"}
                style={{ paddingRight: 9 }}
              />
              <Text>{item.title}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Icon
                name={"ios-mail"}
                size={20}
                color={"rgba(225,225,225,0.85)"}
                style={{ paddingRight: 9 }}
              />

              <Text>{item.type}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Icon
                name={"ios-water"}
                size={20}
                color={"rgba(225,225,225,0.85)"}
                style={{ paddingRight: 9 }}
              />
              <Text>{item.fragile}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Icon
                name={"ios-download"}
                size={20}
                color={"rgba(225,225,225,0.85)"}
                style={{ paddingRight: 9 }}
              />
              <Text>{item.weight}KG</Text>
            </View>
          </View>
          <View style={{ flex: 1, }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
              <Icon
                name={"md-clock"}
                size={20}
                color={"rgba(225,225,225,0.85)"}
                style={{ paddingRight: 9 }}
              />
              <Text>{item.address}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Icon
                name={"ios-person"}
                size={20}
                color={"rgba(225,225,225,0.85)"}
                style={{ paddingRight: 9 }}
              />
              <Text>{item.customer}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Icon
                name={"ios-call"}
                size={20}
                color={"rgba(225,225,225,0.85)"}
                style={{ paddingRight: 9 }}
              />
              <Text>{item.contact}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Icon
                name={"ios-star"}
                size={20}
                color={"rgba(225,225,225,0.85)"}
                style={{ paddingRight: 9 }}
              />
              <Text>{item.rating}</Text>
            </View>

          </View>
          <View style={{ flex: 0.9, }}>
            <TouchableWithoutFeedback>
              <View style={styles.commit}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, color: "white" }}>{item.price}/=</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', }}>
                  <Text style={{ fontSize: 18, color: "white" }}>Commit</Text>
                </View>

              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  //
  renderNearbyPackageView = () => {
    return (
      <FlatList
        horizontal
        pagingEnabled
        style={styles.parcelsNearby}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        centerContent={true}
        snapToAlignment={"center"}
        data={parcels}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => this.renderPackage(item)}
      />
      // <ScrollView

      // //contentOffset={{ x: 0, y: 0 }}
      // //onScroll = {props => console.log('onScroll', props)}
      // >
      //   {parcels.map(parcel => this.renderPackage(parcel))}
      // </ScrollView>
    )
  }
  static navigationOptions = { header: null, headerMode: "none" };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={MapView.PROVIDER_GOOGLE}
          region={this.state.mapRegion}
          followsUserLocation={true}
          mapType="standard"
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          showsBuildings={true}
          showsTraffic={true}
          showsIndoors={true}
          zoomEnabled={true}
          pitchEnabled={true}
          //onRegionChange={this._handleMapRegionChange}
          initialRegion={
            this.state.mapRegion
          }
        >
          {parcels.map(parcel => (
            <Marker
              key={`marker-${parcel.id}`}
              coordinate={parcel.location}
              onPress={() => this.handleGetDirections(parcel)}
            >
              
              <View style={[styles.marker, this.state.active === parcel.id ? styles.active : null]}>
                <Text style={{ color: "red", fontWeight: "bold" }}>Rs.{parcel.price}</Text><Text style={{ color: "#7D818A", fontWeight: "bold" }}>  ({parcel.weight}KG)</Text>
              </View>
              
            </Marker>
          ))}

        </MapView>
        {this.renderNearbyPackageView()}

      </View>
    );
  }
}

export default (tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Pickup",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-pin" size={24} color={"rgba(76,64,155,0.9)"} />
        )
      }
    },
    OnMe: {
      screen: OnMeScreen,
      navigationOptions: {
        tabBarLabel: "On Me",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-gift" size={24} color={"rgba(76,64,155,0.9)"} />
        )
      }
    },
    Wallet: {
      screen: WalletScreen,
      navigationOptions: {
        tabBarLabel: "Wallet",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-wallet" size={24} color={"rgba(76,64,155,0.9)"} />
        )
      }
    },
    HandShake: {
      screen: HandShakeScreen,
      navigationOptions: {
        tabBarLabel: "Handshake",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="ios-finger-print"
            size={24}
            color={"rgba(76,64,155,0.9)"}
          />
        )
      }
    },
    Logout: {
      screen: LogoutScreen,
      navigationOptions: {
        tabBarLabel: "Logout",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-log-out" size={24} color={"red"} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "orange",
      inactiveTintColor: "grey"
    }
  }
));

tabNavigator.navigationOptions = {
  // Hide the header from AppNavigator stack
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center"
  },
  map: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  parcelsNearby: {
    flex: 1,
    position: "absolute",
    right: 5,
    left: 5,
    bottom: 70,
    height: "22%"
  },
  parcel: {
    flexDirection: 'row',
    backgroundColor: '#FFFEFB',
    borderRadius: 10,
    padding: 12,
    marginBottom: 5,
    marginHorizontal: 12,
    width: width - 24,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  commit: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#50C879',
    padding: 5,
    borderRadius: 12,
    height: 150,
    alignContent: "center",
  },
  marker: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 5,
    paddingVertical: 12,
    borderWidth: 0.5,
  },
  active: {
    borderColor: "red",
    borderWidth: 1.2,
  }
});

