import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert,
    ActivityIndicator,
    TouchableWithoutFeedback,
    CheckBox
} from 'react-native';
import { Card, SearchBar, Button, } from 'react-native-elements';


class hostel extends Component {

    constructor(props) {
 
        super(props)
      
        this.state = {
      
          gatefence: '',
          furnished: '',
          electricity: '',
          kata: '',
          water: '',
          parking: '',
          roomsize: '',
          selfcontain: '',
          kitchen: '',
          rating: '',
          price: '',
          pepo: '',
          region: '',
          maarufu: '',
          desdo: '',
        }
      
      }
      
      InsertStudentRecordsToServer = () =>{
      
           fetch(`http://192.168.43.236/api/product/create_room.php`, {
           method: 'POST',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             gatefence : this.state.gatefence,
             furnished : this.state.furnished,
             electricity : this.state.electricity,
             kata: this.state.kata,
             water : this.state.water,
             parking : this.state.parking,
             roomsize : this.state.roomsize,
             selfcontain: this.state.selfcontain,
             kitchen : this.state.kitchen,
             rating : this.state.rating,
             price : this.state.price,
             pepo : this.state.pepo,
             region : this.state.region,
             maarufu : this.state.maarufu,
             desdo: this.state.desdo,
           })
      
           }).then((response) => response.json())
               .then((responseJson) => {
      
                 // Showing response message coming from server after inserting records.
                 Alert.alert(JSON.stringify(responseJson.message));
      
               }).catch((error) => {
                 console.error(error);
               });
      
     }
      
      GoTo_Show_StudentList_Activity_Function = () =>
       {
         this.props.navigation.navigate('Second');
         
       }
      
      render() {
        return (
      
     <ScrollView >
      
      
            <Text > Student Registration Form </Text>
      
            <TextInput
              placeholder="gatefence"
              onChangeText={ TextInputValue => this.setState({ gatefence : TextInputValue }) }
              underlineColorAndroid='transparent'
            />
            
         
           <TextInput
              placeholder="furnished"
              onChangeText={ TextInputValue => this.setState({ furnished : TextInputValue }) }
              underlineColorAndroid='transparent'
            />
           <TextInput  
              placeholder="electricity"
              onChangeText={ TextInputValue => this.setState({ electricity : TextInputValue }) }
              underlineColorAndroid='transparent'
            />
            <TextInput
              placeholder="kata"
              onChangeText={ TextInputValue => this.setState({ kata : TextInputValue }) }
              underlineColorAndroid='transparent'
            />
             <TextInput
              placeholder="water"
              onChangeText={ TextInputValue => this.setState({ water : TextInputValue }) }
              underlineColorAndroid='transparent'
            />
             <TextInput
              placeholder="parking"
              onChangeText={ TextInputValue => this.setState({ parking : TextInputValue }) }
              underlineColorAndroid='transparent'
            /> 
             <TextInput
              placeholder="roomsize"
              onChangeText={ TextInputValue => this.setState({ roomsize : TextInputValue }) }
              underlineColorAndroid='transparent'
            />
              <TextInput
              placeholder="selfcontain"
              onChangeText={ TextInputValue => this.setState({ selfcontain : TextInputValue }) }
              underlineColorAndroid='transparent'
            />
           <TextInput
              placeholder="kitchen"
              onChangeText={ TextInputValue => this.setState({ kitchen : TextInputValue }) }
              underlineColorAndroid='transparent'
            />
                <TextInput
              placeholder="rating"
              onChangeText={ TextInputValue => this.setState({ rating : TextInputValue }) }
              underlineColorAndroid='transparent'
            />
            <TextInput  
              placeholder="price"
              onChangeText={ TextInputValue => this.setState({ price : TextInputValue }) }
              underlineColorAndroid='transparent'
            />
             <TextInput  
              placeholder="pepo"
              onChangeText={ TextInputValue => this.setState({ pepo : TextInputValue }) }
              underlineColorAndroid='transparent'
            />
              <TextInput
              placeholder="region"
              onChangeText={ TextInputValue => this.setState({ region : TextInputValue }) }
              underlineColorAndroid='transparent'
            />      
          
                 <TextInput
              placeholder="maarufu"
              onChangeText={ TextInputValue => this.setState({ maarufu : TextInputValue }) }
              underlineColorAndroid='transparent'
            />
              <TextInput
              placeholder="desdo"
              onChangeText={ TextInputValue => this.setState({ desdo : TextInputValue }) }
              underlineColorAndroid='transparent'
            />
             
       
           <TouchableOpacity activeOpacity = { .4 } onPress={this.InsertStudentRecordsToServer} >
             <Text> INSERT STUDENT RECORD TO SERVER </Text>
           </TouchableOpacity>
           <TouchableOpacity activeOpacity = { .4 }  onPress={this.GoTo_Show_StudentList_Activity_Function} >
             <Text > SHOW ALL INSERTED STUDENT RECORDS IN LISTVIEW </Text>
           </TouchableOpacity>      
     </ScrollView>
                
        );
      }
     }


export default hostel;
