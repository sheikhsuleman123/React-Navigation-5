import React, { Component } from 'react';
import { Text, View,Button,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { connect } from 'react-redux';

import {addTodo, deleteTodo,deleteDoneTodo, addDoneTodo} from '../src/actions/actions';


 class TodoScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
        id:0,
        text:'',
        editId:'',
        editText:'',
    }
}


      addTodo = () => {
        if(this.state.text != "" && this.state.id != ""){
          this.props.addTodo({
            title: this.state.id,
            subtitle: this.state.text
          })
        }
        this.state.text = '',
        this.state.id = ''
      };

      deleteTodo = (index) => {
        this.props.deleteTodo(index)
      }
      
      deleteDoneTodo = (index) => {
        this.props.deleteDoneTodo(index)
      }

      editTodo(index){
        
        if(this.state.id === '' || this.state.text === '') {
        const editItem =  this.props.array1.find((item) => 
        item === this.props.array1[index] );
        console.log('edit',editItem)
        this.setState ({
          id : editItem.title,
          text : editItem.subtitle,
        })
        this.props.deleteTodo(index)
      }
    }

      
     addDone(index,e1,e2) {
       this.props.deleteTodo(index)

        this.props.addDoneTodo({
            title : e1,
            subtitle : e2
        })

     }

    list = () => {
        return this.props.array1.map((element,index) => {
          return (
            <View key={index} style={{backgroundColor:'#42B983',width:390,height:50,flexDirection:'row',justifyContent:'space-between',marginTop:10 }}>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:"#fff",fontSize:20,padding:5}}>{element.title} | </Text> 
                <Text style={{color:"#fff",fontSize:20,padding:5}}>{element.subtitle}</Text>
              </View>
              <View style={styles.threebutton}>
                  <Text onPress={() => this.deleteTodo(index)} style={{fontSize:28,color:'#fff'}}>x</Text>
                  <Text onPress={() => this.editTodo(index)} style={{fontSize:28,color:'#fff'}}>/</Text>
                  <Text onPress={() => this.addDone(index,element.title,element.subtitle)} style={{fontSize:28,color:'#fff'}}>,/</Text>
              </View>
            </View>
          );
        });
      };
      done = () => {
        return this.props.array2.map((element,index) => {
          return (
            <View key={index} style={{backgroundColor:'#B3E3CD',width:390,height:50, padding: 10,flexDirection:'row',marginTop:10,justifyContent:'space-between' }}>
               <View  style={{flexDirection:'row'}}>
                <Text style={{color:"#fff",fontSize:20,textDecorationLine: 'line-through'}}>{element.title} | </Text> 
                <Text style={{color:"#fff",fontSize:20,textDecorationLine: 'line-through'}}>{element.subtitle}</Text>
              </View>
              <View style={styles.endo}>
                  <Text onPress={() => this.deleteDoneTodo(index)} style={{fontSize:35,color:'#fff'}}>x</Text>
              </View>
           
            </View>
          );
        });
      };
    render() {
  
        const {text} = this.props.route.params;
        return (
            <ScrollView>
            <View style={styles.container}>
            <Text style={styles.text}>Reuse Forms Todo</Text>
            <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                <Text style={{fontSize:20,color:'black'}}> Priority </Text>
                <Text style={{fontSize:20,color:'black'}}> Title </Text>
            </View>  
            
            <View style={{flexDirection:'row'}}>
                <TextInput 
                style={styles.input1}
                placeholderTextColor="black"
                keyboardType="numeric"
                onChangeText={(id) => this.setState({id : id})}
                value={this.state.id}
                placeholder="1-10"
                /> 
                <TextInput 
                style={styles.input2}
                onChangeText={(text) => this.setState({text: text})}
                placeholderTextColor="black"
                placeholder="Get milk..."
                value={this.state.text}
                />

                <TouchableOpacity onPress={this.addTodo} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>+</Text>
                </TouchableOpacity>
    
            </View>
       
<Text  style={styles.heading}>Todo</Text>
   
    {/* { this.state.edit ? 
  
    <View style={styles.editContainer}>        
          
            <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                <Text style={styles.title}> Priority </Text>
                <Text style={styles.title}> Title </Text>
            </View>    
                <View style={{flexDirection:'row'}}>
                <TextInput 
                style={styles.input1}
                placeholderTextColor="black"
                keyboardType="numeric"
                onChangeText={(text) => this.setState({editId: text})}
                value={this.state.editId}
                /> 
                <TextInput 
                style={styles.input2}
                placeholderTextColor="black"
                onChangeText={(text) => this.setState({editText: text})}
                value={this.state.editText}
                />
                <TouchableOpacity onPress={this.addEditTodo.bind(this)} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toggle} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>*</Text>
                </TouchableOpacity>
            </View>
    </View>
 :  <Text> </Text> } */}

    <View>{this.list()}</View>

    <Text  style={styles.heading}>Done</Text>

    <View>{this.done()}</View>
        
            </View>
      </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
  console.log("state.array1 ", state.array1)
  return {
    value : state.value,
    array1 : state.array1,
    array2 : state.array2
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addTodo : function(value){
        dispatch(addTodo(value));
      },
      deleteTodo : function(value){
        dispatch(deleteTodo(value));
      },
      deleteDoneTodo : function(value){
        dispatch(deleteDoneTodo(value));
      },
      addDoneTodo : function(value){
        dispatch(addDoneTodo(value));
      }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(TodoScreen)

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff'
    },
    text: {
        fontSize:30,
        marginVertical:10
    },
    input1:{
        top:8,
        color:'black',
        width:70,
        marginRight:10,
        padding:8,
        height:40,
        fontSize:20,
        borderWidth:1,
        backgroundColor:'#fff',
        borderColor:'black'
    },
    input2:{
        top:8,
        color:'black',
        padding:8,
        height:40,
        width:200,
        fontSize:20,
        borderWidth:1,
        backgroundColor:'#fff',
        borderColor:'black'
    },
    appButtonContainer: {
        // position:'absolute',
        top:8,
        marginLeft:'4%',
        borderColor:'black',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        backgroundColor:'#fff',
        height:40,
        width:40,
        borderRadius:25,
      },
      appButtonText: {
        fontSize: 27,
        color: "#42B983",
      },
      editContainer: {
          height:140,
          backgroundColor:'#42B983',
          paddingTop:20,
      
          borderWidth:2,
      },
    endo:{
        marginLeft:"45%"
    },
    threebutton:{
        flexDirection:'row',
        width:100,
        // marginLeft:'25%',
        // borderWidth:1,
        justifyContent:'space-between',
        // borderColor:'red',
    },
    heading: {
      alignSelf:'flex-start',
      fontSize:25,
      left:12,
      fontWeight:'bold',
      marginVertical:"5%"
    },
    title : {
      fontSize:20,
      color:'#fff',
      fontWeight:'bold'
    }
  })