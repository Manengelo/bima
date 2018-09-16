import React, { Component } from 'react';
import {
 StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { Card ,CheckBox,SearchBar, Button, colors} from 'react-native-elements';
class nyumba extends Component {

constructor(props){
    super(props)
    this.state={
        isloading:true,
        dataSource:null,
    }
}
componentDidMount(){
    return fetch('http://192.168.43.236/php_restmyblog/api/post/read.php')
    .then ((response) => response.json())
    .then ((responseJson)=> {
this.setState({
    isloading:false,
    dataSource: responseJson.data,
    })
    })
    .catch((error)=>{
        console.error(error)
    })
    
}
 
    render() {
        if( this.state.isloading){
            return(
                <View>
                <ActivityIndicator/>
                </View>
            )
        }
         return(   
            <ScrollView  >
            {this.state.dataSource.map((val,key) => (
        <Card
            key={key}
            imageProps={{ height:200, borderTopLeftRadius:15, borderTopRightRadius:15 , resizeMethod:'resize' }}
            image={{uri:"https://randomuser.me/api/portraits/men/17.jpg"}}
            containerStyle={{backgroundColor:'transparent',borderRadius: 15,}}>
                <View >            
                <View style={{ flex: 1, flexDirection:'row' }}>
                        <View  style={{ flex: 1, paddingHorizontal: 1,alignItems: 'center' }} >
                        <Text style={{ color: 'grey', fontSize: 11 }}>{val.title}</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>hasan</Text>                    
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
        )
    }
  }

  const style = StyleSheet.create({
      item:{
          flex:1,
          color:'black'
      }
  });

export default nyumba;
