import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from './resturantCard'
import { getFeaturedResturantById } from '../api'
export default function FeatureRow({id, title, description}) {

  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    getFeaturedResturantById(id).then(data=>{
      // console.log('got data: ',data);
      setResturants(data?.resturants);
    })
  }, [id])
  // console.log(resturants);
  
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
        {
          resturants.map(resturant=>{
            return (
                <ResturantCard
                  key={resturant._id}
                  id={resturant._id}
                  imgUrl={resturant.image}
                  title={resturant.name}
                  rating={resturant.rating}
                  genre={resturant.type?.name}
                  address="123 main street"
                  description={resturant.description}
                  dishes={resturant.dishes}
                  lng={resturant.lng}
                  lat={resturant.lat}

              />    
            )
          })
        }           
       </ScrollView>
    
    </View>
  )
}