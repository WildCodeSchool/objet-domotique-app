import React from 'react';
import { StyleSheet, Text, View, TextInput,Button,SafeAreaView, Alert, Image,Input,} from 'react-native';
import Constants from 'expo-constants';
import axios from 'react-native-axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: null,
    };
  }
  
  componentDidMount() {
    axios.get('http://www.localhost:5000/api/v1').then(function (response) {
      const greetings = response.data;
      this.setState({ greetings });
      console.log(greetings);
    })
  }

  render() {
    return (
        <View style={styles.container}>
        <Text>{JSON.stringify(this.state.greetings)}</Text>
        </View>
        
    );
  }
}
        
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    marginHorizontal:16,
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

});