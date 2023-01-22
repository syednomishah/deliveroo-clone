import { View, Text, StatusBar, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectResturant } from '../slices/resturantSlice';
import { XCircleIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';
import MapView, {Marker} from 'react-native-maps';


export default function DeliveryScreen() {
    const navigation = useNavigation();
    const resturant = useSelector(selectResturant);
  return (
    <View className="bg-[#00CCBB] flex-1" style={{paddingTop: StatusBar.currentHeight}}>
      <View className="flex-row justify-between items-center px-4 py-6">
        <TouchableOpacity onPress={navigation.goBack} className="">
            <XCircleIcon size="40" color="white" />
        </TouchableOpacity>
        <View>
            <Text className="text-lg font-light text-white">Order Help</Text>
        </View>
      </View>
      <View className="bg-white mx-4 rounded-md p-6 z-10">
        <View className="flex-row justify-between">
            <View className="space-y-1">
                <Text className="text-lg text-gray-500">Estimated Arrival</Text>
                <Text className="text-4xl font-bold">30-40 Minutes</Text>
            </View>
            <Image className="h-20 w-20" source={require('../assets/deliveryGuy.gif')} />
        </View>
        <Progress.Bar size="30" indeterminate={true} color="#00CCBB" />
        <Text className="mt-3 text-gray-500">Your order at <Text className="font-bold">{resturant.title}</Text> is being prepaired</Text>
      </View>
      
      <MapView
        initialRegion={{
            latitude: resturant.lat,
            longitude: resturant.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }} 
          className="flex-1 -mt-10 z-0"
          mapType="mutedStandard"
        >
            <Marker 
                coordinate={{
                    latitude: resturant.lat,
                    longitude: resturant.lng
                }} 
                title={resturant.title}
                description={resturant.description}
                pinColor="#00CCBB"
            />
        </MapView>
        <View className="bg-white p-4 h-28 flex-row justify-between items-center space-x-4">
            <Image className="w-12 h-12 rounded-full bg-gray-100" source={{uri: 'https://links.papareact.com/wru'}} />
            <View className="flex-1">
                <Text className="text-lg font-bold">Syed Noman</Text>
                <Text className="text-gray-500">Your Rider</Text>
            </View>
            <Text className="text-lg font-bold text-[#00CCBB]">Call</Text>
        </View>
    </View>
  )
}