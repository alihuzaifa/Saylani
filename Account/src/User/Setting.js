import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Setting = () => {
  const [firstName, setfirstName] = useState('');

  let options = {savePhotos: true, mediaType: 'photo'};

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    console.log(result);
  };
  return (
    <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#fff'}}>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 40,
          fontSize: 30,
          color: '#000',
          fontWeight: '500',
        }}>
        Setting
      </Text>
      <TouchableOpacity onPress={openGallery}>
        <Image
          source={require('../../assets/images/2.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            alignSelf: 'center',
            marginVertical: 10,
          }}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Update Full Name"
        onChangeText={value => setfirstName(value)}
        value={firstName}
      />
      <View>
        <Text
          style={{
            color: '#1d3557',
            fontSize: 25,
            marginVertical: 10,
            fontWeight: '500',
          }}>
          Orders
        </Text>
      </View>
      <View style={{height: 300}}>
        <ScrollView>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={[1, 1, 1, 1, 1, 1, 1]}
            renderItem={({item}) => (
              <View
                style={{
                  backgroundColor: '#f1f1f1',
                  marginVertical: 10,
                  paddingVertical: 20,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 5,
                  }}>
                  <Text style={{color: '#000', fontSize: 25}}>
                    Inzimam Malik
                  </Text>
                  <Text>03111260357</Text>
                </View>
                <Text style={{color: '#1d3557', fontSize: 20, color: '#000'}}>
                  2 item
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#1d3557', fontSize: 22}}>Total</Text>
                  <Text style={{color: '#1d3557', fontSize: 22}}>2200</Text>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => alert(`ALLAH`)}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  input: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    paddingHorizontal: 16,
    marginVertical: 8,
    backgroundColor: 'white',
    fontSize: 16,
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    alignSelf: 'center',
  },
  button: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    backgroundColor: '#7CFC00',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
