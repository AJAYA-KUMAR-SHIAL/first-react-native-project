import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from './src/screens/Login'
import DashBoard from './src/screens/DashBoard'
import BuuttonNav from './src/common/ButtomNav'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/screens/Home'
import ButtomNav from './src/common/ButtomNav'

const App = () => {
  const [theme, setTheme] = useState(false)
  let themeStyle = theme ? styles.dark : styles.light
  let textColor = theme ? {color:'#f10707'} : {color:'#19fb09'}
  let backgroundColor = theme ? {backgroundColor:'#000'} : {backgroundColor:'#fff'}
  let  buttonBorderColor  = theme ? {borderColor:'#f10707', borderWidth:2} : {borderColor:'#19fb09', borderWidth:2}

  const data= {
    theme,
    setTheme,
      
    
  }

  const [userdata, setUserdata] = useState(null)
  
  return (
    <NavigationContainer>
    <SafeAreaView style={[styles.container, backgroundColor]}>
      <Pressable onPress={()=>setTheme(!theme)} style={[{padding:10, borderRadius:5, marginBottom:10}, buttonBorderColor]}>
        <Text style={[{color:'#fff', textAlign:'center',fontWeight:'bold', fontSize:20}, textColor]}>{theme ? 'Light Mode' : 'Dark Mode'}</Text>
      </Pressable>
      {/* {userdata && <Text style={[{color:'#fff', textAlign:'center',fontWeight:'bold', fontSize:20}, textColor]}>Welcome {userdata.name}</Text>} */}
      
     {userdata ? (<ButtomNav data={data} userdata={userdata} />):(<Login data={data} setUserdata={setUserdata} />)}
     
    </SafeAreaView> 
    </NavigationContainer>   
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:10
  },
  light:{
    backgroundColor:'#fff'
  },
  dark:{
    backgroundColor:'#000'
  }
})