import { Text, StyleSheet, View, Image, Button } from 'react-native'
import React, { Component } from 'react'
// import Button from '../components/button'

export default class HomeScreens extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={{
                flex: 100,
                // backgroundColor: "yellow",
                flexDirection: 'column'
            }}>
                {/* <View style={{
                    marginTop: "40%"
                }}>
                    <Image style={{ marginLeft: "40%" }} source={require('../assets/favicon.png')} />
                    <Text style={{
                        fontSize: 25
                    }}>Wellcome to your</Text>
                </View>
                <View style={{

                }}>
                    <Text>Wellcome to your app. Build your own social network in minutes.</Text>
                </View>
                <View style={{
                    flex: 50
                }}>
                    <Button name="Log In" backgroundColor="blue"
                        borderColor="blue"
                        color="white"
                        onPress={() => { navigation.navigate('Product') }}
                    />
                    <Button name="Sign Up" backgroundColor="white"
                        borderColor="blue"
                        color="blue" />
                </View> */}
                {/* <Button title='Product' onPress={() => { navigation.navigate('Product') }} ></Button> */}
                {/* <View style={{
                    marginLeft: "40%"
                }}>
                    <Image source={require('../assets/favicon.png')} />
                </View> */}
                <View style={{
                    marginTop: "40%"
                }}>
                    <Image style={{ marginLeft: "45%" }} source={require('../assets/favicon.png')} />
                    <Text style={{
                        fontSize: 25,
                        marginLeft: "33%"
                    }}>Wellcome to your</Text>
                </View>
                <View style={{
                    marginLeft: "15%"
                }}>
                    <Text>Wellcome to your app. Build your own social network in minutes.</Text>
                </View>
                <View style={{
                    width: "50%",
                    alignSelf: "center"
                }}>
                    <Button title='Sign Up' onPress={() => { navigation.navigate('SignUp') }} ></Button>

                </View>
                <View style={{
                    width: "50%",
                    alignSelf: "center",
                    marginTop: 10
                }}>
                    <Button title='Sign In' onPress={() => { navigation.navigate('SignIn') }} ></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})