import { View, Text, SafeAreaView, StatusBar, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { UserCircleIcon } from 'react-native-heroicons/solid'
import Categories from '../components/categories'
import FeatureRow from '../components/featuredRow'
import { getFeaturedResturants } from '../api';
// console.log('projectId: ',process.env)
export default function HomeScreen() {

    const [featuredCategories, setFeaturedCategories] = useState([])
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({headerShown: false})
    }, [])
    useEffect(()=>{
        getFeaturedResturants().then(data=>{
            setFeaturedCategories(data);
        })
    },[])

  return (
    <SafeAreaView className="bg-white" style={{paddingTop: StatusBar.currentHeight}}>
      {/* header */}
        <View className="flex-row bg-white pb-2 px-4">
            <View className="flex-1 flex-row space-x-2">
                <Image 
                    source={{uri: 'https://links.papareact.com/wru'}} 
                    className="w-7 h-7 p-4"
                />
                <View>
                    <Text className="font-bold text-xs text-gray-400">
                        Deliver Now!
                    </Text>
                    <View className="flex-row items-center space-x-1">
                        <Text className="font-bold text-xl">Current Location</Text>
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </View>
                </View>
            </View>
            <UserCircleIcon size={35} color="#00CCBB" />
        </View>
    
    {/* search bar */}
        <View className="flex-row items-center px-4 pb-2">
            <View className="flex-row flex-1 p-2 bg-gray-200">
                <MagnifyingGlassIcon color="gray" />
                <TextInput placeholder='Resturants & Cuisines' keyboardType='default' />
            </View>
            
            <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>

    {/* main */}
    <ScrollView className="bg-gray-100"
        contentContainerStyle={{
            paddingBottom: 150
        }}
    >
        {/* categories */}
        <Categories />

        {/* featured */}
        {
            featuredCategories?.map(category=>{
                return (
                        <FeatureRow 
                            key={category._id}
                            id={category._id}
                            title={category.name}
                            resturants={category?.resturants}
                            description={category.description}
                            featuredCategory={category._type}
                        />
                )
            })
        }

        
       
    </ScrollView>
      
    </SafeAreaView>
  )
}
