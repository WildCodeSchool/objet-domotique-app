import React from 'react'
import { TextInput } from 'react-native'
import { render } from 'react-dom'

export default class Home extends React.Component{

    render(){
        return(
            <TextInput style={{height:40, borderColor:'gray', borderWidth:1}}
            />
        )
    }
}
