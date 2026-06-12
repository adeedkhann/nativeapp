import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const SubcriptionsDetails = () => {
    const {id} = useLocalSearchParams<{id:string}>();
  return (
    <View>
      <Text>Subcriptions Details : {id}</Text>
    </View>
  )
}

export default SubcriptionsDetails