import React, { Component } from 'react';
import { Text, View , Button, TextInput } from 'react-native';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
        }
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:25}}> Welcome on Home Screen </Text>
               <TextInput 
                    placeholder="Enter your name"
                    style={{height:50,
                    width:250,
                    borderWidth:1,borderBottomWidth:1,borderColor:'black',
                    padding:5,
                    marginVertical:10,
                    fontSize:22,
                }}  value={this.state.name}
                    onChangeText={ text => this.setState({name : text})}
                />
            
                <View style={{width:200,flexDirection:'row',justifyContent:'space-between'}}>
                    <Button title="About" onPress={() => { this.props.navigation.navigate('About', {text : this.state.name} )}} />
                    <Button title="Contact" onPress={() => { this.props.navigation.navigate('Contact', {text : this.state.name} )}} />
                    <Button title="Todo" onPress={() => { this.props.navigation.navigate('Todo', {text : this.state.name} )}} />
                </View>
            </View>
        )
    }
}
