import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Spalsh = () => {
    const navigation = useNavigation();
    useEffect(() => {
      setTimeout(()=>{
        token();
      },3000)
    }, []);
    const token= async() =>{
        const Session = await AsyncStorage.getItem('token')
        console.log(Session)
        if (Session){
           navigation.navigate('Home2')
        } else{
            navigation.navigate('Login')
        }
        }
        return (
    <View>
      <Text>Spalsh</Text>
    </View>
  )
}

export default Spalsh