import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import '../global.css';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-content bg-white">
      <Text>Hello World!</Text>
      <StatusBar style="auto"/>
      <Link style={{color: 'blue'}} href="/profile">Go to profile</Link>
    </View>
  );
}
