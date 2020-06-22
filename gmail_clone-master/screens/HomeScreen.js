import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,TextInput,ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export default function HomeScreen({navigation}) {
    return (
        <View style={styles.page}>


          <View style={styles.head}> 
               
                <TouchableOpacity >
                <Image source={require('../assets/drawer.png')}  
                style={{width:30, height:30}}
                /> 
                </TouchableOpacity>
                <TextInput style={{height: 40,width:'70%',fontSize:20}}
                 placeholder="Search in emails "/>

                <Image source={require('../assets/circle.png')}  
                style={{width:30, height:30}}
                /> 

      
          </View>

          <Text> INBOX</Text>
        <ScrollView>
        <View style={styles.display}>
          <Image source={require('../assets/circle.png')}  
                style={{width:38, height:38}}
          /> 
          <View style={{paddingLeft:10,paddingRight:60}}>
          <Text style={{fontSize:14,fontWeight:'bold'}}>  Project Title</Text> 
          <Text style={{fontSize:12,fontWeight:'bold'}}>  See all things about your project,stuff,...</Text>
          <Text style={{fontSize:12}}>  See all things about your project,stuff,...</Text> 
          </View>
          <TouchableOpacity  style={{justifyContent:'center'}} >
                <Image source={require('../assets/star.png')}  
                style={{width:20, height:20}}
                /> 
          </TouchableOpacity>

          
        </View>

        <View style={styles.display}>
          <Image source={require('../assets/Link.png')}  
                style={{width:38, height:38}}
          /> 
          <View style={{paddingLeft:10,paddingRight:5}}>
          <Text style={{fontSize:14,fontWeight:'bold'}}>  LinkedIn Job Alerts</Text> 
          <Text style={{fontSize:12,fontWeight:'bold'}}>  Darko: 1 new job for 'software engineer in Ghana'</Text>
          <Text style={{fontSize:12}}>  See results for your search query 'software engineer'</Text> 
          </View>
          <TouchableOpacity   style={{justifyContent:'center'}} >
                <Image source={require('../assets/star.png')}  
                style={{width:20, height:20}}
                /> 
          </TouchableOpacity>

          
        </View>

        <View style={styles.display}>
          <Image source={require('../assets/circle.png')}  
                style={{width:38, height:38}}
          /> 
          <View style={{paddingLeft:10,paddingRight:60}}>
          <Text style={{fontSize:14,fontWeight:'bold'}}>  Project Title</Text> 
          <Text style={{fontSize:12,fontWeight:'bold'}}>  See all things about your project,stuff,...</Text>
          <Text style={{fontSize:12}}>  See all things about your project,stuff,...</Text> 
          </View>
          <TouchableOpacity  style={{justifyContent:'center'}}  >
                <Image source={require('../assets/star.png')}  
                style={{width:20, height:20}}
                /> 
          </TouchableOpacity>

          
        </View>
        

        <View style={styles.display}>
          <Image source={require('../assets/Link.png')}  
                style={{width:38, height:38}}
          /> 
          <View style={{paddingLeft:10,paddingRight:5}}>
          <Text style={{fontSize:14,fontWeight:'bold'}}>  LinkedIn Job Alerts</Text> 
          <Text style={{fontSize:12,fontWeight:'bold'}}>  Darko: 1 new job for 'software engineer in Ghana'</Text>
          <Text style={{fontSize:12}}>  See results for your search query 'software engineer'</Text> 
          </View>
          <TouchableOpacity   style={{justifyContent:'center'}} >
                <Image source={require('../assets/star.png')}  
                style={{width:20, height:20}}
                /> 
          </TouchableOpacity>

          
        </View>

        <View style={styles.display}>
          <Image source={require('../assets/circle.png')}  
                style={{width:38, height:38}}
          /> 
          <View style={{paddingLeft:10,paddingRight:60}}>
          <Text style={{fontSize:14,fontWeight:'bold'}}>  Project Title</Text> 
          <Text style={{fontSize:12,fontWeight:'bold'}}>  See all things about your project,stuff,...</Text>
          <Text style={{fontSize:12}}>  See all things about your project,stuff,...</Text> 
          </View>
          <TouchableOpacity style={{justifyContent:'center'}} >
                <Image source={require('../assets/star.png')}  
                style={{width:20, height:20}}
                /> 
          </TouchableOpacity>

          
        </View>

        <View style={styles.display}>
          <Image source={require('../assets/Link.png')}  
                style={{width:38, height:38}}
          /> 
          <View style={{paddingLeft:10,paddingRight:5}}>
          <Text style={{fontSize:14,fontWeight:'bold'}}>  LinkedIn Job Alerts</Text> 
          <Text style={{fontSize:12,fontWeight:'bold'}}>  Darko: 1 new job for 'software engineer in Ghana'</Text>
          <Text style={{fontSize:12}}>  See results for your search query 'software engineer'</Text> 
          </View>
          <TouchableOpacity   style={{justifyContent:'center'}} >
                <Image source={require('../assets/star.png')}  
                style={{width:20, height:20}}
                /> 
          </TouchableOpacity>

          
        </View>

        <View style={styles.display}>
          <Image source={require('../assets/Link.png')}  
                style={{width:38, height:38}}
          /> 
          <View style={{paddingRight:5}}>
          <Text style={{fontSize:14,fontWeight:'bold'}}>  LinkedIn Job Alerts</Text> 
          <Text style={{fontSize:12,fontWeight:'bold'}}>  Darko: 1 new job for 'software engineer in Ghana'</Text>
          <Text style={{fontSize:12}}>  See results for your search query 'software engineer'</Text> 
          </View>
          <TouchableOpacity   style={{justifyContent:'center'}} >
                <Image source={require('../assets/star.png')}  
                style={{width:20, height:20}}
                /> 
          </TouchableOpacity>

          
        </View>

        <View style={styles.display}>
          <Image source={require('../assets/circle.png')}  
                style={{width:38, height:38}}
          /> 
          <View style={{paddingLeft:10,paddingRight:60}}>
          <Text style={{fontSize:14,fontWeight:'bold'}}>  Project Title</Text> 
          <Text style={{fontSize:12,fontWeight:'bold'}}>  See all things about your project,stuff,...</Text>
          <Text style={{fontSize:12}}>  See all things about your project,stuff,...</Text> 
          </View>
          <TouchableOpacity style={{justifyContent:'center'}} >
                <Image source={require('../assets/star.png')}  
                style={{width:20, height:20}}
                /> 
          </TouchableOpacity>

          
        </View>

        
       


        <View style={styles.add}>
        <TouchableOpacity onPress={() => navigation.navigate('Text')}>
        <Image source={require('../assets/com.png')}  
        style={{width:140, height:60}}
        /> 
        </TouchableOpacity>
        </View>
       
        </ScrollView>
        </View>
    );
  };


  const styles = StyleSheet.create({
    page: {
     paddingHorizontal:10,
     paddingTop:35,
     flex:1,
     backgroundColor:'white'
   },
   head:{
     height:30,
     justifyContent:'space-around',
     flexDirection:'row',
     paddingBottom:50,
     borderRadius:3,
     borderColor:'#fafafa'
   },

   add:{
       flex:1,
       flexDirection:'row',
       justifyContent:'flex-end',
       marginTop:20
       
   },
   display:{
     backgroundColor:'#fafafa',
     borderRadius:20,
     height:80,
     justifyContent:'space-around',
     alignItems:'center',
     marginVertical:5,
     flexDirection:'row'
     
   }

 })      