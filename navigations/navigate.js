import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import Profile from "../screens/Profile";
import Aboutus from "../screens/Aboutus";
import Home from "../screens/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          return <Ionicons name={"home"} size={20} color={color} />;
        } else if (route.name === 'Aboutus') {
          return <Ionicons name="game-controller" size={20} color={color}  />
        } else if (route.name === 'Profile') {
          return <Feather name="user" size={20} color={color}  />
        } 
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray', 
    })}
    > 
      <Tab.Screen name="Home" component={Home}    options={{ tabBarShowLabel: true, tabBarActiveBackgroundColor: '#ccc' }}/>
      <Tab.Screen name="Aboutus" component={Aboutus}    options={{ tabBarShowLabel: true, tabBarActiveBackgroundColor: '#ccc' }}/>
      <Tab.Screen name="Profile" component={Profile}    options={{ tabBarShowLabel: true, tabBarActiveBackgroundColor: '#ccc' }}/>

    </Tab.Navigator>
  );
}
export default MyTabs;
