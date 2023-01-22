import { View, Text, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
export default function PreparingOrderScreen() {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery');
        },4000);
    },[])
  return (
    <View className="bg-[#00CCBB] flex-1 justify-center items-center" style={{paddingTop: StatusBar.currentHeight}}>

      <Animatable.Image source={require('../assets/orderLoading.gif')} animation="slideInUp" iterationCount={1} className="h-96 w-96" />
      <Animatable.Text className="text-white font-bold my-10 text-lg text-center" animation="slideInUp" iterationCount={1}>
            Waiting for resturant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </View>
  )
}