import React from 'react';
import { ScrollView ,TouchableOpacity, View, Text} from 'react-native';
import { TabNavigator, createBottomTabNavigator, StackNavigator } from 'react-navigation';
import Icon  from 'react-native-vector-icons/Ionicons';


import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import Buy from '../screens/Buy';
import Motor from '../screens/Motor';
import Register from '../screens/Register';
import Login from '../screens/Login';
import CarForm from '../screens/CarForm';
import Comprehensive from '../screens/Comprehensive';
import Prem from '../screens/Prem'
import Prem2 from '../screens/Prem2'
import nyumba from '../screens/nyumba'
import makazi from '../screens/makazi'
import chumba from '../screens/chumba'
import hotel from '../screens/hotel'
import biashara from '../screens/biashara'
import shughuli from '../screens/shughuli'


export const hcnstack = StackNavigator({
  makazi: {
    screen: makazi,
    navigationOptions: {
      //title: 'Makazi',
    },
  },
  chumba: {
    screen: chumba,
    navigationOptions: {
     // title: 'Prem',
    },
  }, 
  nyumba: {
    screen: nyumba,
    navigationOptions: {
     //title: 'Prem2',
    },
  },

  hotel: {
    screen: hotel,
    navigationOptions: {
     // title: 'Prem2',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
},
{
  headerMode: 'screen',
}
);



export const Tabs =  createBottomTabNavigator({

  makazi: {
    screen: makazi,
    navigationOptions: {
      tabBarLabel: 'MAKAZI',
      //tabBarIcon: ({ tintColor }) => <Icon size={25} color={tintColor} />
    },
  },  

  //shughuli: {
   // screen: shughuli,
   // navigationOptions: {
   //   tabBarLabel: 'SHUGHULI',
     // tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={25} color={tintColor} />
   /// },
 // },

//biashara: {
  //screen: biashara,
  //navigationOptions: {
   // tabBarLabel: 'BIASHARA',
   // tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
 // },
//},

 
});





export const RegisterStack = StackNavigator({
  Register: {
    screen: Register,
    navigationOptions: {
    title: 'Register',
    },
  },
});

export const LoginStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
    title: 'Login',
    },
  },
});




export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,    
  },
  hcnstack: {
    screen: hcnstack,
  },

  Login: {
    screen: LoginStack,
  },
 // Settings: {
  //  screen: SettingsStack,
 // },
  
  Register: {
    screen: RegisterStack,
  }
    
}, {
  mode: 'card',
  headerMode: 'none',
});


