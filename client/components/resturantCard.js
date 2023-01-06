import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
export default function ResturantCard({
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
}) {
  // console.log(urlFor(imgUrl).url());
  return (
    <TouchableOpacity className="bg-white mr-3 shadow rounded">
      <Image  className="h-36 w-64 rounded-sm" source={{ uri: urlFor(imgUrl).url()}} />
      <View className="px-3 pb-4">
        <Text className="text-lg font-bold pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={20} />
            <Text className="text-xs">
                <Text className="text-green-500">{rating}</Text>  · {genre}
            </Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <MapPinIcon color="gray" opacity={0.4} size={20} />
            <Text className="text-gray-500 text-xs"> Nearby · {address}</Text>
        </View>
      </View>
      
    </TouchableOpacity>
  )
}