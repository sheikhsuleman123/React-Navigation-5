import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:25}}> Welcome on Home Screen </Text>
                <View style={{width:200,flexDirection:'row',justifyContent:'space-between'}}>
                    <Button title="About" onPress={() => { this.props.navigation.navigate('About')}} />
                    <Button title="Contact" onPress={() => { this.props.navigation.navigate('Contact')}} />
                </View>
            </View>
        )
    }
}
