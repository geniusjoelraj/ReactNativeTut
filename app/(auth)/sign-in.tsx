import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants'
import FormField from '../Components/FornField'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  return (
    <>
      <SafeAreaView className='bg-primary h-full'>
        <ScrollView>
          <View className='w-full px-4 my-16 h-full'>
            <Image
              source={images.logo}
              resizeMode='contain'
              className='h-[35px] w-[115px]'
            />
            <Text className='text-2xl text-white mt-10 font-pbold'>
              Log in to Aora
            </Text>
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e: any) => setForm({
                ...form,
                email: e
              })}
              otherStyles="mt-8"
              keyboardType="email-address"

            />
            <FormField
              title="password"
              value={form.password}
              handleChangeText={(e: any) => setForm({
                ...form,
                password: e
              })}
              otherStyles="mt-8"
            // keyboardType="email-address"

            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default SignIn
