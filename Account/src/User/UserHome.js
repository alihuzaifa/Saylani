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
    <ScrollView>
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
        <View>
          <Text
            style={{
              color: '#7CFC00',
              fontWeight: '700',
              fontSize: 23,
              marginVertical: 5,
            }}>
            Saylani Welfare
          </Text>
          <Text
            style={{
              color: '#0066b2',
              fontWeight: '700',
              fontSize: 18,
              marginVertical: 5,
              textTransform: 'uppercase',
            }}>
            Discount Store
          </Text>
        </View>
        <View>
          <Icon name="shoppingcart" size={30} color="#000" />
        </View>
      </View>
      <View style={{height: height / 2}}>
        {/* <FlatList
          data={data}
          horizontal
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({data, index}) => {
            return (
              <View style={styles.sliderBox}>
                <TouchableOpacity style={styles.slide}></TouchableOpacity>
              </View>
            );
          }}
        /> */}
        <Image
          source={require('../../assets/images/Grocery.png')}
          style={styles.slide}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search by category"
        onChangeText={value => setfirstName(value)}
        value={firstName}
      />
      <Text
        style={{
          paddingHorizontal: 10,
          fontSize: 20,
          fontWeight: '700',
          color: '#0066b2',
        }}>
        Select category
      </Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={images}
          renderItem={({item}) => (
            <Image
              source={item.src}
              style={{
                width: 100,
                height: 100,
                borderWidth: 2,
                resizeMode: 'contain',
                margin: 8,
              }}
            />
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 15,
          marginHorizontal: 80,
        }}>
        <View>
          <Image
            source={require('../../assets/images/logo.png')}
            style={{width: 100, height: 100}}
          />
        </View>
        <View>
          <Text style={{fontSize: 17, fontWeight: '500', color: '#000'}}>
            Chicken
          </Text>
          <Text style={{fontSize: 14, color: '#000'}}>
            lorem hekkko ssgjs hssv hfsjvs sfsgk
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '500'}}>
            Rs:800
          </Text>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                backgroundColor: '#7CFC00',
                padding: 15,
                paddingHorizontal: 25,
                fontSize: 20,
                borderRadius: 10,
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Image
        source={{uri: '../../assets/images/1.png'}}
        style={{width: 100, height: 100}}
      /> */}
      {/* <Image
        source={require('../../assets/images/banner.png')}
        style={styles.logo}
      /> */}
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
