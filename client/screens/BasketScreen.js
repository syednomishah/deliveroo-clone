import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../slices/basketSlice';
import { selectResturant } from '../slices/resturantSlice';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftCircleIcon, MinusCircleIcon, XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

export default function BasketScreen() {
    const resturant = useSelector(selectResturant); 
    const [groupedItems, setGroupedItems] = useState([])
    const basketItems = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const deliveryFee = 5;
    useMemo(() => {
        const gItems = basketItems.reduce((group, item)=>{
            if(group[item.id]){
              group[item.id].push(item);
            }else{
              group[item.id] = [item];
            }
            return group;
          },{})
        setGroupedItems(gItems);
        // console.log('items: ',gItems);
       
    }, [basketItems])
    
  return (
    <View style={{paddingTop: StatusBar.currentHeight}} className="bg-white flex-1">
      <View className="bg-white relative py-4 shadow-sm">
        <TouchableOpacity onPress={navigation.goBack} className="absolute z-10 rounded-full shadow top-5 left-2">
            <ArrowLeftCircleIcon size="45" color="#00CCBB" />
        </TouchableOpacity>
        <View>
            <Text className="text-center font-bold text-xl">Basket</Text>
            <Text className="text-center text-gray-500">{resturant.title}</Text>
        </View>
        
      </View>
      <View className="bg-gray-100">
        <View className="flex-row p-4 items-center bg-white my-5">
            <Image source={{uri: 'https://links.papareact.com/wru'}} className="w-10 h-10 rounded-full bg-gray-200 p-4" />
            <Text className="flex-1 pl-4">Deliver in 40-50 minutes</Text>
            <TouchableOpacity>
                <Text className="font-bold text-[#00CCBB]">Change</Text>
            </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="divide-y h-50 divide-gray-200 bg-gray-100 pb-4">
            {
                Object.entries(groupedItems).map(([key, items])=>{
                    return (
                        <View key={key} className="flex-row items-center space-x-3 py-2 px-4 bg-white">
                            <Text className="text-[#00CCBB]">{items.length} x </Text>
                            <Image className="h-12 w-12 rounded-full" source={{uri: urlFor(items[0]?.image).url()}} />
                            <Text className="flex-1 font-bold">{items[0]?.name}</Text>
                            <Text>${items[0]?.price}</Text>
                            <TouchableOpacity onPress={()=> dispatch(removeFromBasket({id: items[0]?.id}))}>
                                <MinusCircleIcon size={35} color={ "#00CCBB"} />
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>
      <View className="bg-white p-5 space-y-4 border-t border-gray-200">
            <View className="flex-row justify-between">
                <Text className="text-gray-400">Subtotal</Text>
                <Text className="text-gray-400">${basketTotal}</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="text-gray-400">Delivery Fee</Text>
                <Text className="text-gray-400">${deliveryFee}</Text>
            </View>
            <View className="flex-row justify-between">
                <Text className="font-extrabold">Order Total</Text>
                <Text className="font-extrabold">${basketTotal+deliveryFee}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={()=> navigation.navigate('PreparingOrder')} className="bg-[#00CCBB] p-3 rounded-lg">
                    <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                </TouchableOpacity>
            </View>
       </View>
    </View>
  )
}