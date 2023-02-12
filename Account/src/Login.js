import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [click, setClicked] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  let baseUrl = 'https://smit.up.railway.app';

  const handleLogin = async () => {
    if (email === '' || password === '') {
      alert('Data is missing');
    } else if (email.length < 8) {
      alert('Email is invalid');
    } else if (password.length < 8) {
      alert('Make a strong password');
    } else {
      try {
        setClicked(false);
        const data = await axios.post(
          `https://indigo-beetle-toga.cyclic.app/api/login`,
          {
            email: email,
            password: password,
          },
          {
            withCredentials: true,
          },
        );
        const message = data.data.profile.isAdmin;
        console.log(message);
        if (message === true) {
          navigation.navigate('Admin');
        } else {
          navigation.navigate('User');
        }
        setClicked(false);
      } catch (error) {
        alert('User not Found');
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
          placeholder="Email"
          onChangeText={value => setemail(value)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={value => setpassword(value)}
          value={password}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text
            style={styles.buttonText}
            onPress={handleLogin}
            disabled={click}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              textDecorationLine: 'underline',
              color: '#0066b2',
              fontSize: 16,
              fontWeight: '500',
              marginVertical: 30,
            }}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            Dont have an account? Register
          </Text>
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
    marginTop: 50,
    // borderWidth: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },
});

export default LoginScreen;
