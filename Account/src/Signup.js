import axios from 'axios';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const SignupScreen = () => {
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async ({navigation}) => {
    if (fullName == '' || email === '' || contact == '' || password == '') {
      alert('Data is missing');
    } else {
      try {
        const convert = Number(contact);
        let data = await axios.post(
          'https://indigo-beetle-toga.cyclic.app/api/signup',
          {
            fullName,
            email,
            password,
            contact,
          },
          {
            withCredentials: true,
          },
        );
        alert(data.data.message);
        navigation.navigate('User');
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Text
          style={{
            color: '#7CFC00',
            fontWeight: '700',
            fontSize: 34,
            marginVertical: 5,
          }}>
          Saylani Welfare
        </Text>
        <Text
          style={{
            color: '#0066b2',
            fontWeight: '700',
            fontSize: 25,
            marginVertical: 5,
          }}>
          Online Discount Store
        </Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={value => setFullName(value)}
          value={fullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact"
          onChangeText={value => setContact(value)}
          keyboardType="numeric"
          value={contact}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={value => setEmail(value)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
          value={password}
        />
        <Text
          style={{
            color: '#fff',
            alignSelf: 'flex-end',
            fontWeight: '500',
            paddingEnd: 5,
            textDecorationLine: 'underline',
          }}>
          Forget Password?
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 128,
    height: 128,
    marginBottom: 32,
  },
  input: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    paddingHorizontal: 16,
    marginVertical: 8,
    backgroundColor: 'white',
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 0.5,
  },
  button: {
    width: responsiveWidth(70),
    height: responsiveHeight(8),
    backgroundColor: '#7CFC00',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 10,
    // borderWidth: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },
});

export default SignupScreen;
