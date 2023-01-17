import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

export default function DishRow({
    name, description, id, price, image
}) {
    const [pressed, setPressed] = useState(false);
  return (
    <>
        <TouchableOpacity onPress={()=> setPressed(!pressed)} className={`bg-white p-4 border-gray-200 border ${pressed? 'border-b-0': ''}`}>
            <View className="flex-row">
                <View className="flex-1 pr-2">
                    <Text className="text-xl">{name}</Text>
                    <Text className="text-gray-400">{description}</Text>
                    <Text className="text-gray-400 mt-2">
                        ${price}
                    </Text>
                </View>
                <View className="shadow-md">
                    <Image style={{borderWidth: 1, borderColor: '#F3F3F4'}} className="h-20 w-20 p-4 rounded" source={{
                        uri: urlFor(image).url()
                    }}/>
                </View>
            </View>
            
        </TouchableOpacity>
        {
            pressed && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 py-2">
                        <TouchableOpacity>
                            <MinusCircleIcon size={40} color="#00CCBB" />
                        </TouchableOpacity>
                        <Text>0</Text>
                        <TouchableOpacity>
                            <PlusCircleIcon size={40} color="#00CCBB" />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    </>
    
    
  )
}