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
    <View className='justify-center gap-2' >
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='h-6 w-6'
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs self-center text-nowrap`}>{name}</Text>
    </View>

  )
}
const TabsLayout = () => (
  <>
    <Tabs
      screenOptions={{
        tabBarShowLabel: false
      }}
    >
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
    )
  </>
)

export default TabsLayout
