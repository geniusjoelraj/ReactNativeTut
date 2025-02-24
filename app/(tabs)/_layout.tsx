import { View, Text, Image } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants/'
type TabIconProp = {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
};
const TabIcon = ({ icon, color, name, focused }: TabIconProp) => {
  return (
    <View className='flex justify-center items-center gap-2 h-24 w-24 pt-5' >
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='h-6 w-6'
      />
      <Text
        className={`${focused ? 'font-pbold' : 'font-pregular'} text-xs text-center`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>

  )
}
const TabsLayout = () => (
  <>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}   >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused} />

          )
        }} />
      <Tabs.Screen
        name='bookmarks'
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused} />

          )
        }} />
      <Tabs.Screen
        name='create'
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused} />

          )
        }} />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'profile',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused} />

          )
        }} />
    </Tabs>
  </>
)

export default TabsLayout
