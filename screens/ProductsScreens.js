import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'

export default class ProductsScreens extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>ProductsScreens</Text>
        <Button title='Go Back' onPress={()=>{
            navigation.goBack();
        }}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({})