import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants";
import { Home } from "../screens/index";

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: "10%",
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case "Home":
              return <Text>Home</Text>;
            case "Box":
              return <Text>Box</Text>;
            case "Camera":
              return <Text>Camera</Text>;
            case "Search":
              return <Text>Search</Text>;
            case "Favourite":
              return <Text>Favourite</Text>;
          }
        },
      })}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Box' component={Home} />
      <Tab.Screen name='Camera' component={Home} />
      <Tab.Screen name='Search' component={Home} />
      <Tab.Screen name='Favourite' component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
