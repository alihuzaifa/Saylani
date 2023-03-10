import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const UserHome = () => {
  const [firstName, setfirstName] = useState('');
  const [data, setData] = useState([1, 1, 1, 1, 1, 1]);
  const [images, setimages] = useState([
    {src: require('../../assets/images/logo.png')},
    {src: require('../../assets/images/i1.png')},
    {src: require('../../assets/images/i1.png')},
    {src: require('../../assets/images/i1.png')},
    {src: require('../../assets/images/i1.png')},
    {src: require('../../assets/images/i1.png')},
    {src: require('../../assets/images/i1.png')},
  ]);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View
        style={{
          width: '100%',
          height: 90,
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/Grocery.png')}
            style={{width: 80, height: 80, borderRadius: 40}}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 20, color: '#000', fontWeight: '600'}}>
              Mr Ahmed
            </Text>
            <Text style={{fontSize: 20, color: '#000', fontWeight: '600'}}>
              Admin
            </Text>
          </View>
        </View>
        <View>
          <Icon name="shoppingcart" size={30} color="#000" />
        </View>
      </View>
      <View>
        <Text
          style={{
            color: '#7CFC00',
            fontSize: 24,
            fontWeight: '600',
            marginLeft: 10,
            marginVertical: 10,
          }}>
          All Products
        </Text>
      </View>
      <View style={{backgroundColor: '#fff', height: 550}}>
        <ScrollView>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={[1, 1, 1, 1, 1, 1, 1]}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 10,
                  backgroundColor: '#f1f1f1',
                  borderWidth: 0.5,
                  borderRadius: 10,
                  marginHorizontal: 20,
                  paddingHorizontal: 10,
                }}>
                <View>
                  <Image
                    source={require('../../assets/images/logo.png')}
                    style={{width: 90, height: 100}}
                  />
                </View>
                <View>
                  <View>
                    <Text
                      style={{fontSize: 18, fontWeight: '500', color: '#000'}}>
                      Hello
                    </Text>
                    <Text
                      style={{fontSize: 18, fontWeight: '500', color: '#000'}}>
                      1
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
                    @5000
                  </Text>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default UserHome;

const styles = StyleSheet.create({
  sliderBox: {
    width: width,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: '100%',
    height: '90%',
    // backgroundColor: 'green',
    borderRadius: 10,
  },
  input: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    paddingHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#f1f1f1',
    fontSize: 16,
    borderRadius: 35,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginVertical: 30,
  },
  category: {
    width: width,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
