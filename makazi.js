import React, { Component } from 'react';
import { View } from 'react-native';
import { Tile, List, ListItem, Button, colors } from 'react-native-elements';
import {createMaterialTopTabNavigator,TabBar, createBottomTabNavigator, StackNavigator } from 'react-navigation';
import hotel from '../screens/hotel';
import chumba from '../screens/chumba';
import nyumba from '../screens/nyumba';

 
export const HCN =createMaterialTopTabNavigator({
  
  nyumba: {
    screen: nyumba,
  },

 // hotel: {
   // screen: hotel,
  //},
  chumba: {
    screen: chumba,
  },
 

}, 
{
  tabBarOptions: {
    style: {
     backgroundColor:'transparent',
    
    },
    indicatorStyle: {
      backgroundColor: '#13b1e1',
      borderLeftColor: 'black',
      borderColor:'red',
     // rgba(255, 255,255,0.2)
    
    },
  },
},
{
  mode: 'card',
  headerMode: 'none',
  
});


class makazi extends Component {

  render() {
    return  <HCN />;
  }
}

export default makazi;
