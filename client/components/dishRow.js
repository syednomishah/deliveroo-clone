import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

export default function DishRow({
    name, description, id, price, image
}) {
  return (
    <TouchableOpacity className="bg-white border p-4 border-gray-200">
        <View className="flex-row">
            <View className="flex-1 pr-2">
                <Text className="text-xl">{name}</Text>
                <Text className="text-gray-400">{description}</Text>
                <Text className="text-gray-400 mt-2">
                    ${price}
                </Text>
            </View>
            <View className="shadow-md">
                <Image style={{borderWidth: 1, borderColor: '#F3F3F4'}} className="h-20 w-20 p-4 bg-gray-300 rounded" source={{
                    uri: urlFor(image).url()
                }}/>
            </View>
        </View>
        
    </TouchableOpacity>
    
  )
}