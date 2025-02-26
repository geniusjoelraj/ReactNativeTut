import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'

const SignIn = () => {
  return (
    <>
      <SafeAreaView className='bg-primary h-full'>
        <ScrollView>
          <View className='w-full items-center justify-center px-4 my-6 h-3/4'>
            <Image
              source={images.logo}
              resizeMode='contain'
              className='h-[35px] w-[115px]'
            />
            <Text className='text-2xl text-white mt-10 font-pbold'>
              Log in to Aora
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default SignIn
