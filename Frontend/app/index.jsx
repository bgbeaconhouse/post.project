import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {Link} from 'expo-router'
import React from 'react'

const { height, width } = Dimensions.get('window')

const Home = () => {
  return (
    <View style={styles.fullScreen}>
      <StatusBar style="light" backgroundColor="#1d1e4e" />
      <View style={styles.container}>
         <Text style={styles.title}>Alumni Connect</Text>
         
         <View style={styles.imageContainer}>
           <Image 
             source={{
              uri: 'https://cdn.greatnonprofits.org/images/logos/BeaconHouselogo-Vertical-square.jpg'
            }}
            style={styles.heroImage}
            resizeMode="contain"
          />
         </View>
         
         <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.button}>
             <Link href="/login" style={styles.buttonText}>
             Login
             </Link>
           </TouchableOpacity>
           
           <TouchableOpacity style={styles.button}>
             <Link href="/register" style={styles.buttonText}>
             Register
             </Link>
           </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: '#1d1e4e',
        width: width,
        height: height,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'ios' ? 140 : 80,
        paddingBottom: Platform.OS === 'ios' ? 100 : 50,
        paddingHorizontal: 0,
    },
    title: {
        fontSize: 44,
        fontWeight: '300',
        textAlign: 'center',
        color: '#00d4ff',
        letterSpacing: 4,
        marginBottom: 30,
        textShadowColor: 'rgba(0, 212, 255, 0.8)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 12,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        gap: 15,
    },
    button: {
        backgroundColor: '#01a1dd',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#103a5f',
        shadowColor: '#103a5f',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 15,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: -0.5,
        textTransform: 'uppercase',
    },
    imageContainer: {
        width: 280,
        height: 280,
        borderRadius: 30,
        marginVertical: 20,
        borderWidth: 4,
        borderColor: '#103a5f',
        shadowColor: '#103a5f',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 15,
        overflow: 'hidden',
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
})