import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
      <TextInput
      style={styles.input}
      placeholder="Username"
      />
       <TextInput
      style={styles.input}
      placeholder="Password"
      />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputContainer: {
        width: '100%',
        gap: 15,
        marginBottom: 30
    },
    input: {
        borderWidth: 1,
        marginTop: 10,
        width: '100%',
        height: 50,
        paddingHorizontal: 15
      

    },
    title: {
        paddingTop: 50,
        fontSize: 40
    }

})