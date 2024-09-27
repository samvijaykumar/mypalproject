import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Link} from '@react-navigation/native';
import {Positions} from 'react-native-calendars/src/expandableCalendar';
const {width, height} = Dimensions.get('window');

const openURL = url => {
  Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
};

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loader state

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
          console.log('Login Successful', 'You are logged in!');
          navigation.navigate('Home2'); // Navigate to Home2 on success
        } else {
          setErrorMessage(data.message || 'Login failed. Please try again.');
        }
      } catch (error) {
        setErrorMessage('Something went wrong. Please try again later.');
      } finally {
        setLoading(false); // Stop loading spinner
      }
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(241, 236, 225, 1)'}}>
      <Text style={styles.welcomeText}>Welcome Back!</Text>
      <Text style={styles.subHeaderText}>
        Please fill the account details to continue.
      </Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email address</Text>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email address"
          placeholderTextColor={'#dcdcdc'}
          style={styles.input1}
        />
        {errorMessage && errorMessage.includes('email') ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}

        <Text style={styles.label}>Password</Text>
        <View style={styles.iconContainer}>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            placeholderTextColor={'#dcdcdc'}
            secureTextEntry={!passwordVisible} // Toggle password visibility
            style={styles.input}
          />

          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)} // Toggle visibility state
            style={styles.icon}>
            <Image
              source={
                passwordVisible
                  ? require('./images/Eye-open-icon.png') // Visible icon
                  : require('./images/eye-close.icon.png') // Hidden icon
              }
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
        {errorMessage && errorMessage.includes('Password') ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}

        <TouchableOpacity onPress={() => navigation.navigate('OtpScreen')}>
          <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <TouchableOpacity
              style={styles.signInButton}
              onPress={handleSubmit}>
              <Text style={styles.signInButtonText}>SIGN IN</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image
            source={require('./images/download.png')}
            style={styles.responsiveImage}
            resizeMode="contain" // Keep aspect ratio and fit image
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: width * 0.08, // Responsive font size
    color: 'rgba(96, 0, 187, 1)',
    marginLeft: width * 0.05,
    marginTop: height * 0.05,
    fontWeight: 'bold',
  },
  subHeaderText: {
    marginLeft: width * 0.05,
    marginTop: height * 0.01,
    fontSize: width * 0.04, // Responsive font size
  },
  formContainer: {
    flex: 1,
    width: '100%',
    marginTop: height * 0.05, // Responsive margin
  },
  label: {
    marginLeft: width * 0.08,
    fontWeight: 'bold',
    fontSize: width * 0.045, // Responsive font size
    color: 'black',
    top: 20,
  },
  input1: {
    borderWidth: 2,
    marginTop: height * 0.03, // Responsive margin
    marginHorizontal: width * 0.08, // Responsive horizontal margin
    paddingLeft: width * 0.03, // Responsive padding
    fontSize: width * 0.045, // Responsive font size
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  errorMessage: {
    color: 'red',
    marginLeft: width * 0.08, // Responsive margin
    top: 5,
  },
  iconContainer: {
    borderWidth: 2,
    marginTop: height * 0.03, // Responsive margin
    marginHorizontal: width * 0.08, // Responsive horizontal margin
    paddingLeft: width * 0.02, // Responsive padding
    fontSize: width * 0.045, // Responsive font size
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 17,
    width: 250,
  },
  iconImage: {
    width: width * 0.08, // Responsive image size
    height: width * 0.08, // Responsive image size
    top: 10,
    right: 15,
  },
  forgetPasswordText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginLeft: width * 0.7, // Responsive margin
    fontSize: width * 0.035, // Responsive font size
    marginBottom: height * 0.02, // Responsive bottom margin
    right: 25,
    top: 10,
  },
  signInButton: {
    backgroundColor: 'rgba(96, 0, 187, 1)',
    paddingVertical: height * 0.015, // Responsive padding
    paddingHorizontal: width * 0.05, // Responsive padding
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.08, // Responsive margin
    marginTop: height * 0.03, // Responsive margin
  },
  signInButtonText: {
    color: '#fff',
    fontSize: width * 0.045, // Responsive font size
  },
  registerText: {
    color: 'rgba(255, 168, 0, 1)',
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginTop: height * 0.02, // Responsive margin
    fontSize: width * 0.04, // Responsive font size
  },
  imageContainer: {
    flexGrow: 1, // Ensure this container takes available space without shrinking
    justifyContent: 'flex-end', // Make sure the image stays at the bottom
    alignItems: 'center', // Center the image horizontally
    marginBottom: height * 0.01, // Optional margin from the bottom
  },
  responsiveImage: {
    width: width * 0.9, // Adjusted image width for better responsiveness
    height: height * 0.4, // Adjusted image height
  },
});

export default Login;
