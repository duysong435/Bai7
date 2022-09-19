import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

export default function button(props) {
    return (
        <TouchableOpacity style={{
            height: 50, width: "70%", backgroundColor: props.backgroundColor, justifyContent: "center", marginTop: 10,
            borderRadius: 20,
            borderColor: props.borderColor,
            borderStyle: 'solid',
            borderWidth: 2
        }} >
            <Text style={{ textAlign: "center", color: props.color, fontWeight: "bold" }}>{props.name}</Text>
        </TouchableOpacity>
    )
}
