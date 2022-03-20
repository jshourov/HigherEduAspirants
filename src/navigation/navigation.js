import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PostScreen from '../screens/PostScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        
        <Tab.Navigator
        
        screenOptions={({route}) => ({
            tabBarShowLabel: true,
            headerShown: false,
            tabBarStyle: {
                bottom: 34,
                paddingVertical: 20,
                marginHorizontal: 15,
                elevation: 0,
                backgroundColor: '#808080',
                borderRadius: 20,
                height: 90,
                ...styles.shadow
                
            }, tabBarIcon: ({focused, size, color}) => {
                let iconName;
                if (route.name === 'Home'){
                    iconName= "home";
                    size = focused ? 28 : 20;
                    //color= focused ? '#99CCFF' : '#000000';
                } else if(route.name==='Profile'){
                    iconName= "grin-tongue-squint";
                    //color= focused ? '#99CCFF' : '#000000';
                    size = focused ? 28 : 20;
                }else if(route.name === 'Search'){
                    iconName= "search";
                    size = focused ? 28 : 20;
                    //color= focused ? '#99CCFF' : '#000000';
                }else if(route.name === 'Settings'){
                    iconName= "tools";
                    size = focused ? 28 : 20;
                    //color= focused ? '#99CCFF' : '#000000';
                    
                }else if (route.name==='Post'){
                    iconName='plus';
                    size=focused? 28:20;
                }
                return (
                    <FontAwesome5 
                    name={iconName}
                    size={size}
                    color='#000000'
                    />
                )

            }, tabBarLabelStyle:({color:'#000000', top:8})
        })}
        
        >
                 <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Search' component={SearchScreen} />
                
                <Tab.Screen name='Post' component={PostScreen} />
                <Tab.Screen name='Profile' component={ProfileScreen} />
                <Tab.Screen name='Settings' component={SettingsScreen} />
            </Tab.Navigator>
    

    )
}

const styles =StyleSheet.create({
    shadow:{
        shadowColor: 'rgb(192,192,192)',
        shadowOffset:{
            width: 0,
            height: 10
        }, shadowOpacity: 0.5,
        shadowRadius: 3.5,
        elevation: 5
    }, text: {
        color:'black'
    }
})

export default Tabs;