import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

export default function CategoryCard({imgUrl, title}) {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image className="h-20 w-20 rounded" source={{
            uri: urlFor(imgUrl).url(),
        }} 
        />
        <Text className="absolute text-white bottom-1 left-1 font-bold">{title}</Text>

    </TouchableOpacity>
  )
}