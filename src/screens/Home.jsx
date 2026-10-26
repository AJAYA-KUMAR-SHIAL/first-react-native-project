import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BuuttonNav from '../common/ButtomNav'

const Home = ({ data, userdata }) => {
  return (
    <View>
      <Text>Home</Text>
      {/* <Pressable onPress={()=>navigation.navigate('Login')}> */}
        {/* <Text>Login</Text> */}
      {/* </Pressable> */}
    <BuuttonNav data={data} userdata={userdata}/>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})