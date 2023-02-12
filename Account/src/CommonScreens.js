import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CommonScreens = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={{color: '#7CFC00', fontWeight: '700', fontSize: 34}}>
        Saylani Welfare
      </Text>
      <Text style={{color: '#0066b2', fontWeight: '700', fontSize: 25}}>
        International Trust
      </Text>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          backgroundColor: '#7CFC00',
          borderRadius: 20,
          marginTop: 170,
        }}>
        <Text
          style={{color: '#fff', fontSize: 20, fontWeight: '700'}}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommonScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 300,
    tintColor: '#7CFC00',
  },
});
