import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Login from '../screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

const ButtomNav = ({ data ,userdata}) => {
  return (
    
       <Tab.Navigator
       initialRouteName='Home'
       screenOptions={{
        tabBarActiveTintColor: data.theme ? '#f10707' : '#19fb09', 
        tabBarActiveBackgroundColor: data.theme ? '#000' : '#fff',
        tabBarInactiveBackgroundColor: data.theme ? '#000' : '#fff',
       }}
       >
      <Tab.Screen 
      name="Home"
      component={Home}
      options={
        {
          headerShown:false,
          tabBarIcon:()=>(<AntDesign name="home" size={20} color={data.theme ? '#f10707' : '#19fb09'} />)
        }
        
      }
      />
      <Tab.Screen
       name="DashBoard" 
       component={Login}
       options={
        {
          headerShown:false,
          tabBarIcon:()=>(<AntDesign name="profile" size={20} color={data.theme ? '#f10707' : '#19fb09'} />)
        }
      }
        />
      <Tab.Screen 
        name="Profile" 
        component={Login} 
        options={
          {
            headerShown:false,
            tabBarIcon:()=>(<MaterialIcons name="person" size={20} color={data.theme ? '#f10707' : '#19fb09'} />)
          }
        }
      />
    </Tab.Navigator>
    
  )
}

export default ButtomNav

const styles = StyleSheet.create({})