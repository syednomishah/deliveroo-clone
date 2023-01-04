import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from './resturantCard'
import { getFeaturedResturantById } from '../api'
export default function FeatureRow({id, title, description}) {

  useEffect(() => {
    getFeaturedResturantById(id).then(data=>{
      // console.log('got data: ',data);
    })
  }, [])
  
  return (
    <View>
      <View className="mt-4 flex-row justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-gray-500 text-xs px-4">
        {description}
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="pt-4"
       >
            <ResturantCard
                id="1"
                imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU"
                title="Yo sushi"
                rating={4.5}
                genre="japnese"
                address="123 main street"
                description="this is a text description"
                dishes={[]}
                lng={20}
                lat={0}

            />
            
            <ResturantCard
                id="1"
                imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU"
                title="Yo sushi"
                rating={4.5}
                genre="japnese"
                address="123 main street"
                description="this is a text description"
                dishes={[]}
                lng={20}
                lat={0}

            />
            
            <ResturantCard
                id="1"
                imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU"
                title="Yo sushi"
                rating={4.5}
                genre="japnese"
                address="123 main street"
                description="this is a text description"
                dishes={[]}
                lng={20}
                lat={0}

            />
            
            <ResturantCard
                id="1"
                imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU"
                title="Yo sushi"
                rating={4.5}
                genre="japnese"
                address="123 main street"
                description="this is a text description"
                dishes={[]}
                lng={20}
                lat={0}

            />
            
       </ScrollView>
    
    </View>
  )
}