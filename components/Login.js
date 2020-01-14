import React from 'react';
import{StyleSheet,Text,View,TextInput,KeyboardAvoidingView,TouchableOpacity,AsyncStorage,} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state ={
            username:'',
            password:'',
        }

    }
    componentDidMount(){
        this._loadInitialState().done();

    }
    _loadInitialState = async () => {

    const value = await AsyncStorage.getItem('user');
    if (value !== null) {
        this.props.navigation.navigate('Profile');
    }
}
   
    render(){
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <view style={styles.container}>
                    <Text style={styles.header}>CONNEXION</Text>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder='Identifiant'
                        onChangeText={(username) => this.setState({username})}
                        underlineColorAndroid= 'transparent'
                        />

                    <TextInput 
                        style={styles.textInput} 
                        placeholder='Mot de passe'
                        onChangeText={(password) => this.setState({password})}
                        underlineColorAndroid= 'transparent'
                        />

                    <TouchableOpacity
                        style={Styles.btn}
                        onPress={this.login}>
                        <Text>CONNEXION</Text>
                    </TouchableOpacity>
                </view>

            </KeyboardAvoidingView>

        );
    }
login = () => {
    alert('test');
}
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        paddingLeft:40,
        paddingRight:40,
    },
    header:{
        fontSize:24,
        marginBottom:60,
        color:'#fff',
        fontWeight:'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        padding:16,
        marginBottom:20,
        backgroundColor:'#fff',
    },
    btn:{
        alignSelf:'stretch',
        padding:20,
        backgroundColor:'#2F6776',
        alignItems:'center',
    },
    
});
        


        