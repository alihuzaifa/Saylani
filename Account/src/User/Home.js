import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserHome from './UserHome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from './Cart';
import Setting from './Setting';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/dist/AntDesign';

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={UserHome}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Icon name="home" size={25} color="#000" />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Icon name="shoppingcart" size={25} color="#000" />;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <Icon name="setting" size={25} color="#000" />;
          },
        }}
      />
      {/* <Tab.Screen name="Settings" component={} /> */}
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
