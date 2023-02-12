import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AdminHome from './AdminHome';
import AdminProduct from './AdminProduct';
import AdminSetting from './AdminSetting';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Icon1 from 'react-native-vector-icons/dist/Ionicons';

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AdminHome"
        component={AdminHome}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Icon name="home" size={25} color="#000" />;
          },
        }}
      />
      <Tab.Screen
        name="Product"
        component={AdminProduct}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Icon1 name="fast-food" size={25} color="#000" />;
          },
        }}
      />
      {/* <Tab.Screen name="Settings" component={} /> */}
      <Tab.Screen
        name="Setting"
        component={AdminSetting}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Icon name="setting" size={25} color="#000" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
