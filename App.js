import React from 'react';
import { StyleSheet, Text, View, TextInput,Button,SafeAreaView, Alert, Image,Input} from 'react-native';
import Constants from 'expo-constants';






export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <Image
          style={{width: 150, height: 150, alignItems:'center', marginBottom:100,marginTop: 1,}}
          source={require('./assets/logo-objet-domotique.png')
          }
        />
        
    <View>
    
      <Text style={{color:'#2F6776',marginBottom: 1,
       textAlign: 'left'}}>
        Utilisateur
      </Text>
      <TextInput style = {{height:40, borderColor:'gray', borderWidth:1,marginBottom: 30,}}
      />
      <Text style={{color:'#2F6776',
    textAlign: 'left',marginBottom: 1,}}>
      Mot de passe</Text>
      <TextInput style = {{height:40, borderColor:'gray', borderWidth:1,marginBottom: 40}}
      />
      
      <Button 
        title="CONNEXION" 
        color="#2F6776" 
        onPress={() => Alert.alert('CONNECTÉ')}
        style={{color:'#2F6776',
    textAlign: 'center',marginTop: 50,}}
      />
    </View>
    </SafeAreaView>
  );
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
