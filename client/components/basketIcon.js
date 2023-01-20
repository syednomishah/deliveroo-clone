import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice'
import { useNavigation } from '@react-navigation/native';
import { selectResturant } from '../slices/resturantSlice';

export default function BasketIcon() {
    const basketItems = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const navigation = useNavigation();
    if(!basketItems.length) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
        <TouchableOpacity onPress={()=> navigation.navigate('Basket')} className="flex-row space-x-2 justify-between items-center mx-5 rounded-lg p-4 bg-[#00CCBB] shadow">
            <Text className="font-extrabold text-white text-lg px-3 rounded bg-[#01A296]">{basketItems.length}</Text>
            <Text className="flex-1 text-center font-extrabold text-white text-lg">View Basket</Text>
            <Text className="font-extrabold text-white text-lg">${basketTotal}</Text>
        
        </TouchableOpacity>
      
    </View>
  )
}