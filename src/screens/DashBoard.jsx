import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const DashBoard = ({data, userdata}) => {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor:data.theme ? '#000' : '#fff'}]}>
      {userdata && <Text style={[{color:data.theme ? '#fff' : '#000', textAlign:'center',fontWeight:'bold', fontSize:20,color:data.theme ? '#f10707' : '#19fb09'}]}>Welcome {userdata.name}</Text>}
      <View style={[styles.expenseContainer]}>
        <Text style={[styles.expenseContainerText, {color:data.theme ? '#fff' : '#000', borderColor:data.theme ? '#f10707' : '#19fb09'}]}>Daily Expenses</Text>
        <Text style={[styles.expenseContainerText, {color:data.theme ? '#fff' : '#000', borderColor:data.theme ? '#f10707' : '#19fb09'}]}>Monthly Expenses</Text>
      </View>
      <Text style={[styles.recetExpense,{color:data.theme ? '#f10707' : '#19fb09',  borderBottomColor:data.theme ? '#f10707' : '#19fb09'}]}>Recent Expenses</Text>
      <Text style={[styles.defaultExpenseText]}>No expense added yet...</Text>
    </SafeAreaView>
  )
}

export default DashBoard

const styles = StyleSheet.create({

    expenseContainer:{
        width:Dimensions.get('window').width - 30,
       flexDirection:'row',
       justifyContent:'space-evenly',
      
       marginTop:20,
       flex:1
    },
    expenseContainerText:{
     height:100,
     width:150,
     textAlign:'center',
     textAlignVertical:'center',
     fontSize:18,
     fontWeight:'bold',
    borderWidth:2,
    borderRadius:5,
    marginTop:20,   
    },
    recetExpense:{
        alignSelf:'flex-start',
        fontSize:22,
        fontWeight:'bold',
        marginTop:20,
        borderBottomWidth:2,
        paddingBottom:5,
        
    },
    defaultExpenseText:{
       fontStyle:'italic',
       fontSize:16,
       marginVertical:10,
       color:'#6e6d6d'
    }

})