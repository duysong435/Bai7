import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'
import Input from '../components/input'

export default class SignUpScreen extends Component {
  render() {
    return (
      <View>
        <View style={{
          marginLeft: 25
        }}>
          <Text>Tên đăng nhập</Text>
          <Input />
        </View>
        <View style={{
          marginLeft: 25
        }}>
          <Text>Mật khẩu mới</Text>
          <Input />
        </View>
        <View style={{
          marginTop: 20,
          width: "85%",
          marginLeft: 25
        }}>
          <Button title='Đăng ký' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({})