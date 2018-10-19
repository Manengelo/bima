import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    TouchableWithoutFeedback,
} from 'react-native';
import { Card, SearchBar, Button,CheckBox } from 'react-native-elements';


class chumba extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isloading: false,
            dataSource: [],
            page: 1,
            refreshing: false,
            searchClearIcon: false,
            search:'Enter location',
            error: ''
        };
        
    }
   

 
    request = (tex) => {
        const { page,search } = this.state;
        const url = `http://192.168.43.236/api/product/search_room.php?page=${page}&search=${search}`;
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isloading: false,
                    dataSource:search === tex ? responseJson.records : [...responseJson.records],
                    refreshing: false,
                    error:null,
                  //  background:'ENTER LOCATION'
                })
                this.arrayholder = responseJson.records;
            })
          
            .catch(() => {
                //alert(error);
                this.setState({error:' NO ROOM AVAILABLE',isloading: false, refreshing: false,dataSource:[]});
            });

    };
    handleRefresh = () => {
        this.setState(
            {   
                page:  1,
                refreshing: true,
            },
            () => {
                this.request();
            });
    };



    renderHeader = () => {
        return <View  style={{ alignItems: 'center',flex: 1,padding:0,backgroundColor:'red' }} >
        <Text>{this.state.error} </Text>
     </View> 
    };

    
    onLearnMore = (item) => {
        this.props.navigation.navigate('roomdetail', { ...item });
    };
    renderFooter = () => {
        if (!this.state.isloading) return null;
    }

 

    handleSearch = (text) => {
        this.setState({
            search:text,
            refreshing: true,
            page: 1,
          }, () => {
            this.request();
          });
      }

   

    render() {
        const { navigate } = this.props.navigation
        if (this.state.isloading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )
        }

        
               
        return (
            <View >
            
            <SearchBar containerStyle={{ backgroundColor: 'transparent',marginTop:0,marginBottom:0 ,height:47,borderBottomColor:'transparent',borderTopColor:'transparent',padding:0}}
           onSubmitEditing ={text => this.handleSearch(text.nativeEvent.text)}   placeholder='Search by location'
            inputStyle={{ backgroundColor: '#d3d3d3',borderBottomColor:'red',borderTopColor:'red',marginTop:3,marginBottom:3,padding:0}} 
         noIcon
            />
         
            <FlatList contentContainerStyle={{paddingBottom:59, paddingTop:0 }}
               automaticallyAdjustContentInsets={false}
                data={this.state.dataSource}
                renderItem={({ item }) => (        
                    <TouchableWithoutFeedback onPress={() => this.onLearnMore(item)}>
                    <Card
                        imageProps={{ height: 200, borderTopLeftRadius: 15, borderTopRightRadius: 15, resizeMethod: 'resize' }}
                        image={{ uri: `${item.pathroom}${item.imageroom1}`}}
                        containerStyle={{ backgroundColor: 'transparent', borderRadius: 15 }}
                       >
         
                        <View >
                        <View style={{ flex: 1, paddingHorizontal: 0, alignItems: 'flex-start' }} >
                                    <Text style={{ color: 'grey', fontSize: 14,fontWeight: 'bold' }}>{item.region}, {item.district}, {item.ward}</Text>
                                </View>
                                <View style={{ flex: 1, paddingHorizontal: 0, alignItems: 'flex-start' }} >
                                    <Text style={{ color: 'grey', fontSize: 14,fontWeight: 'bold' }}>{item.price}/Month</Text>
                                </View>
                            <View style={{ flex: 1, flexDirection: 'row' }} >
                                <View style={{ flex: 1,  alignItems: 'center' }} >
                                    <Text style={{ color: 'grey', fontSize: 12 }}>Roomsize(m2)</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>{item.roomsize}</Text>
                                </View>

                                <View style={{ flex: 1,  alignItems: 'center' }} >
                                    <Text style={{ color: 'grey', fontSize: 12 }}>Self-Contain</Text>
                                    <View style={{ padding: 0 }}>
                        
                         <CheckBox            
                                checked={item.selfcontain}
                                containerStyle={{ margin : 0, marginLeft:35, padding: 0,backgroundColor: 'transparent',borderColor:'transparent'}}
                                size={16}
                                iconType='material'
  checkedIcon='done'
  uncheckedIcon='clear'
  checkedColor='green'
  uncheckedColor='red'
                                />
                         </View>   
                                </View>                          
                            </View>
                        </View>
                    </Card>
            </TouchableWithoutFeedback>
                )}
                keyExtractor={item => item.roomid}
              ListHeaderComponent={this.renderHeader}
                ListFooterComponent={this.renderFooter}
                onRefresh={this.handleRefresh}
                refreshing={this.state.refreshing}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={50}
             
            
            /></View>

        )
    }
}

const style = StyleSheet.create({
    item: {
        flex: 1,
        color: 'black'
    }
});


export default chumba;
