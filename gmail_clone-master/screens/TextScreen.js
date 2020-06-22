import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';

export default function TextScreen(){
    return(
        <View style={styles.page}>
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:15}}>

                <View style={{flexDirection:'row'}}>
                
                  <Text style={{fontSize:20}}>    Compose </Text>

                </View>

                <View  style={{flexDirection:'row'}}>
                
                <TouchableOpacity style={{paddingRight:10}}><Image source={require('../assets/clip.png')}  
                    style={{width:22, height:19}}/>
                </TouchableOpacity>


                <TouchableOpacity><Image source={require('../assets/send.png')}  
                    style={{width:22, height:19}}/>
                </TouchableOpacity>
                
                <TouchableOpacity><Image source={require('../assets/3dots.png')}  
                    style={{width:30, height:19}}/>
                </TouchableOpacity>
                
                </View>



            </View> 

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',borderBottomWidth:2,borderBottomColor:'#fafafa'}}>  
                <Text> From</Text>
                <TextInput style={{height: 40,width:'70%',fontSize:20}}
                 placeholder=""/>
                
                <TouchableOpacity>
                <Image source={require('../assets/drop.png')}  
                style={{width:18, height:10}}
                /> 
                </TouchableOpacity>
            </View> 

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',borderBottomWidth:2,borderBottomColor:'#fafafa'}}>  
                <Text> To</Text>
                <TextInput style={{height: 40,width:'70%',fontSize:20}}
                 placeholder=""/>
                
                <TouchableOpacity>
                <Image source={require('../assets/drop.png')}  
                style={{width:18, height:10}}
                /> 
                </TouchableOpacity>
            </View>        

            <View style={styles.space}>
                <View style={{borderBottomWidth:2,borderBottomColor:'#fafafa'}}>
                <TextInput
                 style={{height: 30,width:'100%',fontSize:18}}
                 placeholder="Subject"/>
                </View>
                <TextInput
                 style={{height: 700,width:'100%',textAlignVertical:'top',fontSize:20}}
                 placeholder="Compose email"/> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1
    },
    space:{
        paddingVertical:10,
        paddingHorizontal:10
    }
});