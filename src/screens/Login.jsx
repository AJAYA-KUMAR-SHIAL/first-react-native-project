import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Translation } from '../assets/Translation'
import { SafeAreaView } from 'react-native-safe-area-context'


const Login = ({data, setUserdata}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginHandler = () => {
      setUserdata({ name, email, password })
      setName('')
      setEmail('')
      setPassword('')

    }


  return (
    <SafeAreaView style={styles.container}>

<Text style={[styles.title,{color:data.theme ?  '#f10707' : '#19fb09'}]}>Expense Tracker</Text>

      <TextInput
      style={[styles.input, {backgroundColor:data.theme ? '#000' : '#fff', borderColor:data.theme ? '#f10707' : '#19fb09', color:data.theme ? '#fff' : '#000'}]}
      placeholder={Translation.NAME}
      placeholderTextColor={'#6e6d6d'}
      value={name}
      onChangeText={setName}
      />
      <TextInput
      style={[styles.input, {backgroundColor:data.theme ? '#000' : '#fff', borderColor:data.theme ? '#f10707' : '#19fb09',color:data.theme ? '#fff' : '#000'}]}
      placeholder={Translation.EMAIL}
      placeholderTextColor={'#6e6d6d'}
      value={email}
      onChangeText={setEmail} 
      type='email-address'
      />
      <TextInput
      style={[styles.input, {backgroundColor:data.theme ? '#000' : '#fff', borderColor:data.theme ? '#f10707' : '#19fb09',color:data.theme ? '#fff' : '#000'}]}
      placeholder={Translation.PASSWORD}
      placeholderTextColor={'#6e6d6d'}
      value={password}
      onChangeText={setPassword}
      secureTextEntry
      />

      <TouchableOpacity 
      onPress={loginHandler}
      style={[ styles.logBtn,{backgroundColor:data.theme ? '#f10707' : '#19fb09', padding:10, borderRadius:5, marginTop:10}]}
      >
        <Text style={styles.logBtnText}>{Translation.LOGIN}</Text>
      </TouchableOpacity>

     
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        marginBottom:20,
    },
    input:{
        width:300,
        height:50,
        borderWidth:1,
        borderColor:'#0a0a0a',
        borderRadius:5,
        padding:10,
        marginVertical:10,
        fontSize:16,
    },
    logBtn:{
      width:Dimensions.get('screen').width/2,
      justifyContent:'center',
      alignItems:'center',

    },
    logBtnText:{
      color:'#070707',
      fontWeight:'bold',
      fontSize:18
    }

})