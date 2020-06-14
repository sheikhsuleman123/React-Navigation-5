import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'

export default class ContactScreen extends Component {
    render() {
        const {text} = this.props.route.params;
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:25}}> Welcome {text} on About Screen </Text>
            <View style={{width:350,flexDirection:'row',justifyContent:'space-between'}}>
                <Button title="Home" onPress={() => { this.props.navigation.navigate('Home')}} />
                <Button title="About" onPress={() => { this.props.navigation.navigate('About')}} />
                <Button title="Back" onPress={() => { this.props.navigation.goBack()}} />
                <Button title="Back To Home" onPress={() => { this.props.navigation.popToTop()}} />
            </View>
        </View>
        )
    }
}
