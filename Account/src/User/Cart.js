import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const Cart = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 20}}>
      <View
        style={{
          justifyContent: 'flex-end',
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <Image
          source={require('../../assets/images/banner.jpg')}
          style={{width: 50, height: 50, borderRadius: 25}}
        />
      </View>
      <View
        style={{
          marginVertical: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <View>
          <Text style={{color: '#7CFC00', fontSize: 25, fontWeight: '500'}}>
            Shopping
          </Text>
          <Text style={{color: '#1d3557', fontSize: 25, fontWeight: '500'}}>
            Cart
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name="delete" size={25} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: '#fff', height: 250}}>
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
                  borderRadius: 10,
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
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={{
                        padding: 5,
                        backgroundColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 5,
                      }}>
                      <Text style={{fontSize: 20, color: '#fff'}}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        padding: 5,
                        backgroundColor: '#000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 5,
                      }}>
                      <Text style={{fontSize: 20, color: '#fff'}}>-</Text>
                    </TouchableOpacity>
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
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25, color: '#7CFC00'}}>Total</Text>
        <Text style={{fontSize: 25, color: '#000'}}>2500</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={value => setfirstName(value)}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={value => setfirstName(value)}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact"
        onChangeText={value => setlastName(value)}
        keyboardType="numeric"
        value={lastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={value => setfirstName(value)}
        value={firstName}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert(`firstName: ${firstName}\nlastName: ${lastName}`)}>
        <Text style={styles.buttonText}>Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  input: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    paddingHorizontal: 16,
    marginVertical: 8,
    backgroundColor: 'white',
    fontSize: 16,
    // borderRadius: 8,
    borderBottomWidth: 0.5,
  },
  button: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    backgroundColor: '#7CFC00',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
