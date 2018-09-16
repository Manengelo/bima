import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Card ,CheckBox, Button} from 'react-native-elements';
import { users} from '../config/data';
class nyumba extends Component {

    render() {
      return ( 
            <ScrollView  >
                {users.map((user) => (
            <Card
                key={user.login.username}
                imageProps={{ height:200, borderTopLeftRadius:15, borderTopRightRadius:15 , resizeMethod:'resize' }}
                image={{uri:"https://randomuser.me/api/portraits/men/17.jpg"}}
                containerStyle={{backgroundColor:'transparent',borderRadius: 15,}}>
                    <View >            
                    <View style={{ flex: 1, flexDirection:'row' }}>
                            <View  style={{ flex: 1, paddingHorizontal: 1,alignItems: 'center' }} >
                            <Text style={{ color: 'grey', fontSize: 11 }}>{user.benefitname.Windscreen}</Text>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>{user.benefitamount.Windscreen}</Text>                    
                            </View> 
                            <View  style={{ flex: 1, paddingHorizontal: 1,alignItems: 'center' }} >
                            <Text style={{ color: 'grey', fontSize: 11 }}>{user.benefitname.TowingCharges}</Text>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>{user.benefitamount.TowingCharges}</Text>
                            </View> 
                            <View  style={{ flex: 1,   paddingHorizontal: 1,alignItems: 'center' }} >
                            <Text style={{ color: 'grey', fontSize: 11 }}>{user.benefitname.AuthorizedRepair}</Text>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>{user.benefitamount.AuthorizedRepair}</Text>
                            </View> 
                    </View>
                    </View>
                    <Button
                        backgroundColor='transparent'
                        title='VIEW NOW'
                        textStyle={{ color: 'red' }}
                        containerViewStyle={{ height:30}}/>
            </Card>
                ))}
            </ScrollView> 
      );
    }
  }

export default nyumba;
hhh