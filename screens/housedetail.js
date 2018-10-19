import React, { Component, } from 'react';
import { ScrollView,View,FlatList ,Text,StyleSheet,Dimensions,Image,CheckBox} from 'react-native';
import { Tile,Divider,Rating } from 'react-native-elements';
import Swiper from 'react-native-swiper';
class housedetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
       visibleSwiper: false
    };
 }
 
 componentDidMount() {
    setTimeout(() => {
       this.setState({
         visibleSwiper: true
       });
    }, 100);
 }
 
  render() {
   const { ward,region,district,imagehouse3,imagehouse1,imagehouse2,imagehouse4,imagehouse5,phone,price,room,bathroom,pathhouse,firstname,lastname,rating,kitchen,furnished,water,
  gatefence,electricity,compound,parking,period} = this.props.navigation.state.params;
   let swiper = null;
   if (this.state.visibleSwiper) {
      swiper = <Swiper dotColor={'white'} 
         activeDotColor={'#FF0A0A'} 
         height={250} horizontal={true} 
         loop={true} bounces={true} 
         removeClippedSubviews={false}>
         <View>
            <Image resizeMode='cover' style={{ width: Dimensions.get('window').width, height: 250}} source={{uri:`${pathhouse}${imagehouse1}`}} />
         </View>
         <View>
            <Image resizeMode='cover'  style={{ width: Dimensions.get('window').width, height: 250}} source={{uri:`${pathhouse}${imagehouse2}`}} />
         </View>
         <View>
            <Image resizeMode='cover'  style={{ width: Dimensions.get('window').width, height: 250}} source={{uri:`${pathhouse}${imagehouse3}`}} />
         </View>
         <View>
            <Image resizeMode='cover'  style={{ width: Dimensions.get('window').width, height: 250}} source={{uri:`${pathhouse}${imagehouse4}`}} />
         </View>
         <View>
            <Image resizeMode='cover'  style={{ width: Dimensions.get('window').width, height: 250}} source={{uri:`${pathhouse}${imagehouse5}`}} />
         </View>
      </Swiper>

   } else {
      swiper = <View>
        <Tile
          Image={{uri:`${pathhouse}${imagehouse1}`}}
          contentContainerStyle={{ height:250 }}
        />
      </View>;
   }
    return (
       
      <ScrollView style={{ backgroundColor: 'white'}}>
    
    {swiper}
              
           <View style={{ flex: 1,paddingTop:1,paddingBottom:0,paddingLeft:10  }} >
                                    <Text style={{ color: 'black', fontSize: 17,fontWeight: 'bold' }}>{region}, {district}, {ward}</Text>
                                </View>
                                <View style={{ flex: 1,paddingLeft:10 , flexDirection:'row'  }} >
                                    <Text style={{ color: 'black', fontSize: 15,fontWeight: 'bold',paddingVertical:5 }}>{price}
                                    <Text style={{ color: 'black', fontSize: 14,fontWeight: '300',fontStyle:"italic",paddingVertical:5 }}> per Month/{period} 
                                     </Text>
                                     </Text>
                                     <Rating 
                                     readonly type="star" fractions={1} startingValue={rating} imageSize={14} style={{ flex: 1,alignItems: 'center',paddingVertical:10 }}
                                       />
                                        </View>
                                     
                                     <Divider style={{ backgroundColor: 'grey' }} />
         
               <View style={{ flex: 1,paddingVertical:2, flexDirection:'row' }} >
                        <View  style={{ flex: 1, paddingHorizontal: 0,alignItems: 'center' }} >
                        <Text style={{ color: 'black', fontSize: 12 }}>Rooms</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>{room}</Text>                    
                        </View> 
                        <View  style={{ flex: 1, paddingHorizontal: 0,alignItems: 'center' }} >
                        <Text style={{ color: 'black', fontSize: 12 }}>Bathroom</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>{bathroom}</Text>                    
                        </View> 
                        <View  style={{ flex: 1, paddingHorizontal: 1,alignItems: 'center' }} >
                        <Text style={{ color: 'black', fontSize: 12 }}>Kitchen</Text>
                        <View style={{ padding: 0}}>
                        <CheckBox value={kitchen} style={{height: 17 }} disabled
                         />
                         </View>                   
                        </View> 
                        <View  style={{ flex: 1, paddingHorizontal: 0,alignItems: 'center' }} >
                        <Text style={{ color: 'black', fontSize: 12 }}>Furnished</Text>
                        <View style={{ padding: 0}}>
                        <CheckBox 
                        value={furnished} style={{height: 17 }} disabled
                         />
                         </View>                     
                        </View>
                       
                </View>
                
                <View style={{ flex: 1,paddingVertical:1, flexDirection:'row' }} >
                <View  style={{ flex: 1, paddingHorizontal: 0,alignItems: 'center' }} >
                        <Text style={{ color: 'black', fontSize: 12, padding:0}}>Gate & Fence</Text>
                        <View style={{ padding: 0}}>
                        <CheckBox 
                        value={gatefence} style={{height: 17 }} disabled 
                        />
                        </View>                   
                        </View> 
                        <View  style={{ flex: 1, paddingHorizontal: 0,alignItems: 'center' }} >
                        <Text style={{ color: 'black', fontSize: 12 }}>Parking</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>{parking}</Text>                    
                        </View>
                        <View  style={{ flex: 1, paddingHorizontal: 1,alignItems: 'center' }} >
                        <Text style={{ color: 'black', fontSize: 12 }}>Compound</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>{compound}</Text>                    
                        </View> 
                       
                </View>

                <View style={{ flex: 1,paddingVertical:2, flexDirection:'row' }} >
                <View  style={{ flex: 1, paddingHorizontal: 1,alignItems: 'center' }} >
                        <Text style={{ color: 'black', fontSize: 12 }}>Electricty</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>{electricity}</Text>                    
                        </View> 
                        
                         <View  style={{ flex: 1, paddingHorizontal: 1,alignItems: 'center' }} >
                        <Text style={{ color: 'black', fontSize: 12 }}>Water</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>{water}</Text>                    
                        </View> 
                </View>

                
<View style={{ flex: 1,paddingVertical:2, flexDirection:'row' }} >
                    
                     
                </View>
                <Divider style={{ backgroundColor: 'grey' }} />


 <View style={{ flex: 1,paddingTop:1,paddingBottom:0,paddingLeft:10  }} >
                                    <Text style={{ color: 'black', fontSize: 14,fontWeight: 'bold' }}></Text>
                                </View>


                                   <Divider style={{ backgroundColor: 'grey' }} />
                                   <View style={{ flex: 1,paddingVertical:2, flexDirection:'row' }} >
                        <View  style={{ flex: 1, paddingHorizontal: 0,alignItems: 'center' }} >
                        <Text style={{ color: 'black', fontSize: 12 }}>Contact Person</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>{`${firstname.toUpperCase()} ${lastname.toUpperCase()}`}</Text>  
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>{phone}</Text>                    
                        </View>                       
                                 </View>

      </ScrollView>
   
    );
  }
}


export default housedetail;
