import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator,
    TouchableWithoutFeedback,
    CheckBox
} from 'react-native';
import { Card, SearchBar, Button, } from 'react-native-elements';


class nyumba extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isloading: false,
            dataSource: [],
            page: 1,
            refreshing: false,
            searchClearIcon: false
        };
    }
    componentDidMount() {
        this.request();
    }

    request = () => {
        const { page } = this.state;
        const url = `http://hamane.co.tz/api/product/read_house.php?page=${page}`;
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isloading: false,
                    dataSource: page === 1 ? responseJson.records : [...this.state.dataSource, ...responseJson.records],
                    refreshing: false,
                })
                this.arrayholder = responseJson.records;
            })
            .catch(error => {
                this.setState({ error, isloading: false });
            });

    };
    handleRefresh = () => {
        this.setState(
            {
                page: 1,
                refreshing: true
            },
            () => {
                this.request();
            });
    };

    renderHeader = () => {
        return <SearchBar containerStyle={{ backgroundColor: 'transparent',borderBottomColor:'white',borderTopColor:'white' }}
            onChangeText={text => this.searchFilterFunction(text)} placeholder="Search by ward" 
            inputStyle={{ backgroundColor: 'white' }} 
            clearIcon={false}
            searchIcon={false}
            />;
    };

    
    onLearnMore = (item) => {
        this.props.navigation.navigate('housedetail', { ...item });
    };
    renderFooter = () => {
        if (!this.state.isloading) return null;
    }

    searchFilterFunction = text => {
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.ward.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.toUpperCase().indexOf(textData) > -1;
        });
        this.setState({ dataSource: newData });
    };

    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.request();
        })
    };





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
           
            <FlatList
            contentContainerStyle={{paddingBottom:56, paddingTop:0}}
                data={this.state.dataSource}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={() => this.onLearnMore(item)}>
          
                    <Card
                        imageProps={{ height: 200, borderTopLeftRadius: 15, borderTopRightRadius: 15, resizeMethod: 'resize' }}
                        image={{ uri: `${item.pathhouse}${item.imagehouse1}`}}
                        containerStyle={{ backgroundColor: 'transparent', borderRadius: 15, }}
                       >
                  
                        <View >
   
                        <View style={{ flex: 1, paddingHorizontal: 0, alignItems: 'flex-start' }} >
                                    <Text style={{ color: 'black', fontSize: 14,fontWeight: 'bold' }}>{item.region}, {item.district}, {item.ward}</Text>
                                </View>
                                <View style={{ flex: 1, paddingHorizontal: 0, alignItems: 'flex-start' }} >
                                    <Text style={{ color: 'black', fontSize: 14,fontWeight: 'bold' }}>{item.price}/Month</Text>
                                </View>
                            <View style={{ flex: 1, flexDirection: 'row' }} >
                                <View style={{ flex: 1,  alignItems: 'center' }} >
                                    <Text style={{ color: 'grey', fontSize: 12,paddingBottom:0 }}>Room(s)</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>{item.room}</Text>
                                </View>

                                <View style={{ flex: 1,  alignItems: 'center' }} >
                                    <Text style={{ color: 'grey', fontSize: 12 }}>BathRoom</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>{item.bathroom}</Text>
                                </View>
                                
                                <View style={{ flex: 1,  alignItems: 'center' }} >
                                    <Text style={{ color: 'grey', fontSize: 12 }}>Compound</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'black' }}>{item.compound}</Text>
                                </View>
                             
                            </View>

                        </View>

                    </Card>
            </TouchableWithoutFeedback>
                )}
                keyExtractor={item => item.houseid}
                ListHeaderComponent={this.renderHeader}
                ListFooterComponent={this.renderFooter}
                onRefresh={this.handleRefresh}
                refreshing={this.state.refreshing}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={50}
           
            />
               
        )
    }
}

const style = StyleSheet.create({
    item: {
        flex: 1,
        color: 'black'
    }
});


export default nyumba;
