import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './categoryCard'

export default function Categories() {
  return (
    <ScrollView
        // className="p-4"
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop:10
        }}
        showsHorizontalScrollIndicator={false}

    >
        <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU" title="cat1" />
        <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU" title="cat1" />
        <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU" title="cat1" />
        <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU" title="cat1" />
        <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU" title="cat1" />
        <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68GaMxj6iSn18pYEVZyW0lLLYgbEzbdmFQ&usqp=CAU" title="cat1" />
      
    </ScrollView>
  )
}