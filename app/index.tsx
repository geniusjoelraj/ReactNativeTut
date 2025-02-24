import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      className=" flex-1 items-center justify-center bg-red">
      <Text className="font-pblack text-3xl text-red-500">Hello World!</Text>
      <StatusBar style="auto" />
      <Link style={{ color: 'blue' }} href="/home">Go to Home</Link>
    </View>
  );
}


