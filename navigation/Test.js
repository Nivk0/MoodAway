import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Test = () => {
    return (
      <><View>
        <Text style={styles.heading}>Please answer the following questions about your mood</Text>
       <Text style={styles.q1}>1. Do you feel more happy than usual?</Text>
       <Yes1/><No1/>
       <Text style={styles.q2}>2. aad efuh asfiuw?</Text>
       <Yes2/><No2/>
       <Text style={styles.q3}>3. aad efuh asfiuw?</Text>
       <Yes3/><No3/>
    <AppButton />
    
      </View></>
 
       );
  }
  const AppButton = ({ onPress }) => {
    const title = "Generate Analysis";
    return(
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
    )
   };
  const Yes1 = ({ onPress }) => {
    const title = "Yes";
    return(
    <TouchableOpacity onPress={onPress} style={styles.Button}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
    )
   };
   const No1 = ({ onPress }) => {
    const title = "No";
    return(
    <TouchableOpacity onPress={onPress} style={styles.Button}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
    )
   };
   const Yes2 = ({ onPress }) => {
    const title = "Yes";
    return(
    <TouchableOpacity onPress={onPress} style={styles.Button2}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
    )
   };
   const No2 = ({ onPress }) => {
    const title = "No";
    return(
    <TouchableOpacity onPress={onPress} style={styles.Button2}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
    )
   };
   const Yes3 = ({ onPress }) => {
    const title = "Yes";
    return(
    <TouchableOpacity onPress={onPress} style={styles.Button3}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
    )
   };
   const No3 = ({ onPress }) => {
    const title = "No";
    return(
    <TouchableOpacity onPress={onPress} style={styles.Button3}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
    )
   };
   

const styles = StyleSheet.create({
    
    heading: {
        top: 30,
        alignSelf: 'center',
        fontFamily: 'LexendExa-Regular',
        color: '00352F',
        fontSize: 16,
        marginLeft: 10,
        marginRight: 10,
    },
    
    q1: {
     top: 80,
     alignSelf: 'center',
     fontFamily: 'LexendExa-Regular',
     color: '00352F',
     fontSize: 14,
     marginLeft: 10,
     marginRight: 10,
 },
 q2: {
    top: 100,
    alignSelf: 'center',
    fontFamily: 'LexendExa-Regular',
    color: '00352F',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10,
},
q3: {
    top: 120,
    alignSelf: 'center',
    fontFamily: 'LexendExa-Regular',
    color: '00352F',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10,
},

    Button: {
      elevation: 4,
      backgroundColor: "#00352F",
      borderRadius: 100,
      paddingVertical: 13,
      paddingHorizontal: 30,
      alignSelf: 'center',
      marginTop:10,
      top: 85
    },
    Button2: {
        elevation: 4,
        backgroundColor: "#00352F",
        borderRadius: 100,
        paddingVertical: 13,
        paddingHorizontal: 30,
        alignSelf: 'center',
        marginTop:10,
        top: 105
      },
      Button3: {
        elevation: 4,
        backgroundColor: "#00352F",
        borderRadius: 100,
        paddingVertical: 13,
        paddingHorizontal: 30,
        alignSelf: 'center',
        marginTop:10,
        top: 125
      },
    
                
    appButtonText: {
      fontSize: 14,
      color: "white",
      fontWeight: "bold",
      fontFamily: 'LexendExa-Regular',
      alignSelf: "center",
      
    },
  
    
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#00352F",
        borderRadius: 50,
        paddingVertical: 13,
        paddingHorizontal: 20,
        marginLeft: 10,
        marginRight: 10,
        top: 185
      },
 });
  
  export default Test;