import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default function input() {
  return (
    // <TextInput style={styles.textInput} />
    <TextInput
        style={{
          height: 40,
          width: "90%",
          borderColor: 'gray',
          borderWidth: 1,
          textAlign: "center"
        }}
        defaultValue=""
      />
  )
}

const styles = StyleSheet.create({
    textInput : {
        height: 50,
        width: 90,
        borderColor: "red"
    }
  });
