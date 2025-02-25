import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { images } from "@/constants";
import CustomButton from "./Components/CustomButton";
export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <StatusBar
        backgroundColor="#161622"
        style="light"
      />
      <ScrollView
        contentContainerStyle={{
          height: '100%'
        }}
      >
        <View className="w-full justify-center items-center px-4 my-auto">
          <Image
            className="w-[130px] h-[84px]"
            resizeMode="contain"
            source={images.logo}
          />
          <Image
            source={images.cards}
            className="w-[350px] h-[400px]"
            resizeMode="contain"

          />
          <View className="relative mt-1">
            <Text className="text-3xl text-white font-pbold px-5 text-center">
              Discover Endless Possibilities with {' '}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-4"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-6 text-center">Auro is a sleek and modern social media platform where you can share moments, connect with friends, and explore trending content—all in one place! 🚀</Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-11/12 mt-6"
          />

        </View>
      </ScrollView>

    </SafeAreaView>
  );
}


