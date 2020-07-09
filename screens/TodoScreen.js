import React, { Component } from 'react';
import { Text, View,Button,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class AboutScreen extends Component {
    constructor(props){
        super(props);

        // this.removeTodo = this.removeTodo.bind(this);

        this.state = {
        edit : false,
        id:0,
        text:'',
        editText:'',
        editId:'',
        array1: [
            {
                title: "1",
              subtitle: "Breakfast"
            },
            {
              title: "2",
              subtitle: "Lunch"
            },
          ],
          array2: [
            {
                title: "1",
              subtitle: "Beef"
            },
            {
                title: "2",
              subtitle: "Mutton"
            },
            {
                title: "3",
              subtitle: "Chicken"
            },
          ],
    }
}
      addTodo(){
        if(this.state.text != "" && this.state.id != ""){

          let oldArray = this.state.array1;
          oldArray.push({
            title : this.state.id,
            subtitle : this.state.text
          })
          this.setState({
            array1: [...oldArray],
            id:'',
            text:''
          })
          
        }
      }
      addEditTodo(){
        if(this.state.editId != "" && this.state.editText != ""){

          let oldArray = this.state.array1;
          oldArray.push({
            title : this.state.editId,
            subtitle : this.state.editText
          })
          this.setState({
            array1: [...oldArray],
            editId:'',
            editText:'',
            edit : false
          })
          
        }
      }
      addDone(e1,e2){
        let oldArray2 = this.state.array2;
        oldArray2.push({
          title : e1,
          subtitle : e2
        })
        this.setState({
          array2: [...oldArray2]
        })

        const remainder = this.state.array1.filter((todo) => {
          if(todo.title !== e1) return todo;
        });
        this.setState({
          array1: remainder,
        });
      }


     removeTodo = (id) =>{
        const remainder = this.state.array1.filter((todo) => {
          if(todo.title !== id) return todo;
        });
        this.setState({array1: remainder});
      }

      removeDone = (id) =>{
        const remainder2 = this.state.array2.filter((todos) => {
          if(todos.title !== id) return todos;
        });
        this.setState({array2: remainder2});
      }

      editTodo = (id) => {
        this.state.edit = !this.state.edit

        // const remainder = this.state.array1.filter((todo) => {
        //   if(todo.title !== id) return todo;
        // });

        const selectedItem = this.state.array1.find((item) => {
          if(item.title === id) return item;
        });
        console.log(selectedItem.title);
        this.setState({
            // array1 : remainder,
            editId: selectedItem.title,
            editText : selectedItem.subtitle,
          
          })
        
        }
  
    list = () => {
        return this.state.array1.map(element => {
          return (
            <View style={{backgroundColor:'#42B983',width:390,height:50,flexDirection:'row',justifyContent:'space-between',marginTop:10 }}>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:"#fff",fontSize:20,paddingLeft:5}}>{element.title} | </Text> 
                <Text style={{color:"#fff",fontSize:20,paddingLeft:5}}>{element.subtitle}</Text>
              </View>
              <View style={styles.threebutton}>
                  <Text onPress={() => this.removeTodo(element.title)} style={{fontSize:28,color:'#fff'}}>x</Text>
                  <Text onPress={() => this.editTodo(element.title)} style={{fontSize:28,color:'#fff'}}>/</Text>
                  <Text onPress={() => this.addDone(element.title,element.subtitle)} style={{fontSize:28,color:'#fff'}}>,/</Text>
              </View>
            </View>
          );
        });
      };
      done = () => {
        return this.state.array2.map(element => {
          return (
            <View style={{backgroundColor:'#B3E3CD',width:390,height:50, padding: 10,flexDirection:'row',marginTop:10,justifyContent:'space-between' }}>
           
               <View style={{flexDirection:'row'}}>
                <Text style={{color:"#fff",fontSize:20,textDecorationLine: 'line-through'}}>{element.title} | </Text> 
                <Text style={{color:"#fff",fontSize:20,textDecorationLine: 'line-through'}}>{element.subtitle}</Text>
              </View>
           
              <View style={styles.endo}>
                  <Text onPress={() => this.removeDone(element.title)} style={{fontSize:35,color:'#fff'}}>x</Text>
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

                <TouchableOpacity onPress={this.addTodo.bind(this)} style={styles.appButtonContainer}>
                    <Text style={styles.appButtonText}>+</Text>
                </TouchableOpacity>
    
            </View>
       
<Text  style={{alignSelf:'flex-start',fontSize:25,left:12,fontweight:'bold',marginVertical:"5%"}}>Todo</Text>
   
    { this.state.edit ? 
  
    <View style={styles.editContainer}>        
          
            <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}> Priority </Text>
                <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}> Title </Text>
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
 :  <Text> </Text> }

    <View>{this.list()}</View>


    <Text  style={{alignSelf:'flex-start',fontSize:25,left:12,fontweight:'bold',marginVertical:"4%"}}>Done</Text>

    <View>{this.done()}</View>
        
            </View>
            </ScrollView>
        )
    }
}


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
    }
  })