import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Link} from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

// import AsyncStorage from '@react-native-async-storage/async-storage';

const openURL = url => {
  Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
};

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loader state
// const token= async() =>{
// const Session = await AsyncStorage.getItem('token')
// console.log(Session)
// if (Session){
//   navigation.navigate('Home2')
// } else(
//   console.log('data not found')
// )
// }
// useEffect(()=>{
//   token()

// },[])
  const validateEmail = email => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePassword = password => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {

      setErrorMessage('Invalid email address');
    } else if (!validatePassword(password)) {
      setErrorMessage(
        'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.',
      );
    } else {
      setErrorMessage('');
      setLoading(true); // Start loading spinner

      try {
        // API call to the login endpoint
        const response = await fetch(
          'https://demo.sgvproject.in/pet_mypal_app/api/login_api',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          },
        );

        const data = await response.json();
        console.log('API Response:', data);
        if (
          response.ok
          // status === 200 && data.status === true
        ) {
          // If login is successful
          console.log('Login Successful', 'You are logged in!');
          navigation.navigate('Home2'); // Navigate to Home2 on success
        } else {
          // If login fails
          setErrorMessage(data.message || 'Login failed. Please try again.');
        }
      } catch (error) {
        // Network or other errors
        setErrorMessage('Something went wrong. Please try again later.');
      } finally {
        setLoading(false); // Stop loading spinner
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(241, 236, 225, 1)'}}>
      <Text
        style={{
          fontSize: 30,
          color: 'rgba(96, 0, 187, 1)',
          marginLeft: 25,
          marginTop: 50,
          fontWeight: 'bold',
        }}>
        Welcome Back!
      </Text>
      <Text style={{marginLeft: 25, marginTop: 10}}>
        Please fill the account details to continue.
      </Text>
      <View
        style={{
          flex: 1,
          width: '100%',
          marginTop: 40,
        }}>
        <Text
          style={{
            marginLeft: 25,
            fontWeight: 'bold',
            fontSize: 17,
            color: 'black',
          }}>
          Email address
        </Text>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email address"
          placeholderTextColor={'#dcdcdc'}
          style={{
            borderWidth: 2,
            marginTop: 10,
            marginHorizontal: 30,
            paddingLeft: 10,
            fontSize: 18,
            borderRadius: 10,
            borderColor: 'white',
            backgroundColor: 'white',

            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            // Android Elevation
            elevation: 5,
          }}
        />
         {errorMessage && errorMessage.includes('email') ? (
          <Text style={{ color: 'red',
    marginLeft: 30,}}>{errorMessage}</Text>
        ) : null}
        <Text
          style={{
            marginTop: 10,
            marginLeft: 25,
            fontWeight: 'bold',
            fontSize: 17,
            color: 'black',
          }}>
          Password
        </Text>
        
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          placeholderTextColor={'#dcdcdc'}
          secureTextEntry={!passwordVisible} // Toggle password visibility
          style={{
            borderWidth: 2,
            marginTop: 10,
            marginHorizontal: 30,
            paddingLeft: 10,
            fontSize: 18,
            borderRadius: 10,
            borderColor: 'white',
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            // Android Elevation
            elevation: 5,
          }}
        />
         {errorMessage && errorMessage.includes('Password') ? (
          <Text style={{ color: 'red',
    marginLeft: 30,}}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity
      onPress={() => setPasswordVisible(!passwordVisible)} // Toggle visibility state
      style={styles.icon}>
      <Image
        source={
          passwordVisible
            ? require('./images/Eye-open-icon.png') // Visible icon
            : require('./images/eye-close.icon.png') // Hidden icon
        }
        style={{
          width: width * 0.08, // Responsive width (8% of screen width)
          height: width * 0.08, // Responsive height (8% of screen width)
        }}
      />
    </TouchableOpacity>
        {/* {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null} */}
        <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
        <Text
          style={[
            styles.forgetpassword,
            { 
              marginLeft: width * 0.7,  // Adjusts marginLeft based on screen width
              fontSize: width * 0.03,   // Adjusts font size based on screen width
              bottom: height * 0.02, 
              right:15    // Adjusts bottom positioning
            }
          ]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
        <View>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(96, 0, 187, 1)',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 30,
                marginTop: 10,
                bottom:10
              }}
              onPress={handleSubmit}>
              <Text style={{color: '#fff', fontSize: 16}}>SIGN IN</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              color: 'rgba(255, 168, 0, 1)',
              textDecorationLine: 'underline',
              alignSelf: 'center',
              marginTop: 10,
              fontSize: 15,
              bottom:10
            }}>
            REGISTER
          </Text>
        </TouchableOpacity>
        <View style={styles.vijay}>
      <Image
        source={require('./images/download.png')}
        style={{
          width: width * 10,    // 90% of screen width for padding
          height: height * 0.4,  // 40% of screen height
          marginTop: 5,
        }}
        resizeMode="contain" // Keep aspect ratio and fit image
      />
    </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginLeft: 30,
    bottom:25
  },
  icon:{
    marginLeft:"78%",
  
    position:'static',
    bottom:40
  },
  vijay:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center the image

  },
  forgetpassword:{
    color: 'blue',
    textDecorationLine: 'underline',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  }
 
});

export default Login;
