import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View , FlatList, Image} from 'react-native'
import { auth } from '../../firebase'
import {  signOut } from "firebase/auth";
import { db } from '../../firebase';
import {   getDatabase,ref, onValue ,set} from "firebase/database";
import { useState, useEffect } from "react";

const Details=({route})=>{
  
    const [value, setvalue] = useState([]);
    const  dbs = getDatabase();
    var array=[];
    var a;
  const id=route.params.key;
  useEffect(()=>{

    onValue(ref(dbs,'/users/'+ id), (snapshot) => {
       
   
       const name1=snapshot.child("name").val();
       const IELTS1=snapshot.child("IELTS").val();
       const imageUrl=snapshot.child("imageUrl").val();
       array.push({name : name1,IELTS: IELTS1,image1:imageUrl});
       
      
    /*  snapshot.forEach((childSnapshot) => {
       
        const IELTS=childSnapshot.child("IELTS").val();
        const name=childSnapshot.child("name").val();
        const childkey=childSnapshot.key;
        array.push({name : name,IELTS: IELTS,key:childkey});
      
      // const childData = childSnapshot.child("name").val();
       
     
    //   array.push({key:childKey});
   //  array.push({name:childSnapshot.child("name").val()});
    // array.push({IELTS:childSnapshot.child("IELTS").val()});
   //    array.push({IELTS:childSnapshot.child("IELTS").val()});
     
      //  array.push({childData});
        
       
      });
     
  */
   
      const data = snapshot.val();
      if (data !== null) {
        
        setvalue(array);
      }
     
    });
  },[]); 
  console.log(id);
    return (
        <View style={styles.container}>
         
          <FlatList
         data={value}     
         
         keyExtractor={(item) => item.key}
      //   renderItem={renderItemupdated}
      renderItem={({ item }) => {
        // return <Text>{item.name}</Text>;
  
          return(
            <TouchableOpacity onPress={()=>navigation.navigate('Details',{key:item.key})}>
                  <Image style={styles.image} source={{ uri: item.image1 }} />
            <Text>
            Name : {item.name}
           </Text>
           <Text>
            IELTS Score : {item.IELTS}
           </Text>
           
     
           
           
            </TouchableOpacity>
            
           )
        }}
          
      />
       
     
      
      </View>
      )

 
 }
 
 export default Details;
 const styles = StyleSheet.create({
    container: {
      marginTop:30,
      padding:2,
    },
     button: {
      backgroundColor: '#0782F9',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    item: {
      backgroundColor: '#f5f520',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    image :{
     height :200,
     width : 300
   }
  })