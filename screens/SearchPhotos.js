import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View,TextInput } from 'react-native';


class SearchPhotos extends Component {

    state = {
        search: ''
    }

    onSearchChange = e => {
        this.setState({
            search: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.search.value);
        e.currentTarget.reset();
    }

    render() {
        return(
            <View>
                <TextInput
                    onChangeText={this.onSearchChange}
                    ref={(text) => this.search = text}
                    placeholder="Search..." />
                <Button onPress={this.handleSubmit}/>
            </View>
        );
    }
}

export default SearchPhotos;