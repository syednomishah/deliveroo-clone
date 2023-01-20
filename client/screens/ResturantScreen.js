import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftCircleIcon, ArrowLeftIcon, StarIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { ChevronRightIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/dishRow';
import BasketIcon from '../components/basketIcon';
import { useDispatch, useSelector } from 'react-redux';
import { selectResturant, setResturant } from '../slices/resturantSlice';
import { emptyBasket } from '../slices/basketSlice';

export default function ResturantScreen() {
    const navigation = useNavigation();
    const resturant = useSelector(selectResturant);
    let dispatch = useDispatch();
    const {params: {
        id, 
        title,
        imgUrl,
        rating,
        genre,
        address, 
        description,
        dishes,
        lng,
        lat
    }} = useRoute();
    useLayoutEffect(()=>{
        navigation.setOptions({headerShown: false})
    },[])
    useEffect(()=>{
        if(resturant && resturant.id!=id){
            dispatch(emptyBasket());
        }
        dispatch(setResturant({
            id, 
            title,
            imgUrl,
            rating,
            genre,
            address, 
            description,
            dishes,
            lng,
            lat
        }))
    },[])
  return (
    <>
        <BasketIcon />
        <ScrollView >
            <View className="relative">
                <Image className="w-full h-60 bg-gray-300 p-4 " source={{uri: urlFor(imgUrl).url()}} />
                <TouchableOpacity onPress={()=>navigation.goBack()} className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                    <ArrowLeftIcon size="20" color="#00CCBB" />
                </TouchableOpacity>
            </View>
            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row space-x-1 items-center">
                            <StarIcon size="15" color="green" opacity={0.5} />
                            <Text className="text-sm text-gray-500">
                                <Text className="text-green-500">{rating}</Text> · {genre}
                            </Text> 
                        </View>
                        <View className="flex-row space-x-1 items-center">
                            <MapPinIcon size="15" color="gray" opacity={0.5} />
                            <Text className="text-sm text-gray-500">
                                Nearby · {address}
                            </Text> 
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2 pb-4">{description}</Text>
                    
                    
                </View>
                <TouchableOpacity className="flex-row items-center space-x-2 border-y border-gray-300 p-4">
                    <QuestionMarkCircleIcon size="30" color="black" />
                    <Text className="flex-1 font-bold">Have a food allergy?</Text>
                    <ChevronRightIcon color="#00CCBB"/>
                </TouchableOpacity>
            </View>
            <View className="pb-36">
                <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                {/* dishes */}
                {
                    dishes.map(dish=>{
                        return (
                            <DishRow 
                                key={dish._id}
                                id={dish._id}
                                name={dish.name}
                                description={dish.description}
                                price={dish.price}
                                image={dish.image}
                            />
                        )
                    })
                }
            </View>
      
        </ScrollView>
    </>
    
  )
}