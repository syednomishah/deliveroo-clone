import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryCard from './categoryCard'
import { getCategories } from '../api'

export default function Categories() {

  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(data=>{
      // console.log('got data', data[0].name);
      setCategories(data);
    })
  }, [])
  
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
        {
          categories?.map(category=>{
            return(
              <CategoryCard 
              key={category._id}
              imgUrl={category.image}
              title={category.name}
            />
            )
          })
        }
      
    </ScrollView>
  )
}