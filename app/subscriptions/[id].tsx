import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const SubcriptionsDetails = () => {
    const {id} = useLocalSearchParams<{id:string}>();
  return (
    <View>
      <Text>Subcriptions Details : {id}</Text>
      <Link href="/(tabs)"> Go to Home</Link>
    </View>
  )
}

export default SubcriptionsDetails