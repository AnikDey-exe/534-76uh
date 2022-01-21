import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen.js';
import PopularScreen from './screens/PopularScreen.js';
import RecScreen from './screens/RecScreen.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TopTabNavigator = createMaterialTopTabNavigator({
  Recommended: {screen: RecScreen,  navigationOptions: {
    /* tabBarIcon: 
     <Icon name='plus' type='font-awesome' style={{width: 20, height: 20}} color='grey'/>,*/
     tabBarLabel: "Recommended",
    //  tabBarIcon: ({ focused }) => <Icon name='plus' type='font-awesome' style={{width: 20, height: 20}} focused={focused} color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}/>,
    tabBarOptions: {
      activeTintColor: 'white',
    inactiveTintColor: 'grey',
      tabStyle: {
        backgroundColor: '#036ffc',
        color: 'white'
      }
    }
 }},
  Popular: {screen: PopularScreen, navigationOptions: {

    /* tabBarIcon: 
     <Icon name='plus' type='font-awesome' style={{width: 20, height: 20}} color='grey'/>,*/
     tabBarLabel: "Popular",
    //  tabBarIcon: ({ focused }) => <Icon name='plus' type='font-awesome' style={{width: 20, height: 20}} focused={focused} color={focused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR}/>,
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'grey',
      tabStyle: {
        backgroundColor: '#036ffc',
        color: 'white'
      }}, 
    }
  }
})

const StackNavigator = createStackNavigator({
  Home: {screen: HomeScreen, navigationOptions: {
    headerShown:false
  }},
  TopTab: {screen:TopTabNavigator, navigationOptions: {
    headerShown:false,
    
      activeTintColor: 'white',
      inactiveTintColor: 'grey',
   
  }}
})

const AppContainer =  createAppContainer(StackNavigator);


