import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { opacity } from 'react-native-reanimated/lib/typescript/Colors'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }): any => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''} `}

    >
      <Text className={`text-primary font-pbold text-lg`}>{title}</Text>

    </TouchableOpacity >
  )
}

export default CustomButton
