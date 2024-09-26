import React, {useState} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Image 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';




const Home = ({navigation}) => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState(''); // New state for password
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,14}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // At least 8 characters, one letter, one number

    if (!Name || !email || !phoneNumber || !password) {
      setError('All fields are required');
      return false;
    }
    
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return false;
    }
    if (!phoneRegex.test(phoneNumber)) {
      setError('Invalid phone number');
      return false;
    }
    if (!passwordRegex.test(password)) {
      setError(
        'Password must be at least 8 characters long and contain at least one letter and one number',
      );
      return false;
    }
    return true;
  };

  

  const handleSubmit = async () => {
    if (validateInputs()) {
      setError(''); // Clear any previous errors
      setLoading(true); // Start loading indicator
      try {
        console.log('Form data:', {
          user_name: Name,
          email,
          phone: phoneNumber,
          password, // Adding password to the log for confirmation
          country_code: 91,
          device_token: 'fytf',
        });

        var base_path = 'https://demo.sgvproject.in/pet_mypal_app/api/';

        const response = await fetch(base_path + 'signup_api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_name: Name,
            email: email,
            password: password, // Sending password with other details
            phone: phoneNumber,
            country_code: 91,
            device_token: 'fytf',
          }),
        });
     
        const data = await response.json();

        console.log('API Response:', data);

        // Check the status code returned from the server (200 means OK)
        if (response.status === 200 && data.status === true) {
          // If API response status is true
          console.log('Registration successful:', data);
        
          const value= data.data.access_token;
          const result=JSON.stringify(value)
          console.log(result);
          await AsyncStorage.setItem('token',result);
          Toast.show({
            type: 'success',
            text1: 'Hello',
            text2: 'signUp success👋'
          });
          // await storeData(Name); // Store the name in AsyncStorage
          setTimeout(() => {
            navigation.navigate('Home2');
          }, 1000); // Navigate to the next screen
        } else {
          console.log('Registration failed:', data);
          Toast.show({
            type: 'error',
            text1: 'error',
            text2: `${data.message}  👋'`
          });     
          setError(data.message || 'Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Error during API call:', error);
        setError('An error occurred. Please try again.');
      } finally {
        setLoading(false); // Stop loading indicator
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>Please fill the account details to continue.</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={Name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Email address</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={!passwordVisible}// Hides the password input
        value={password}
        onChangeText={text => setPassword(text)}
      />
 <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)} // Toggle state
          style={styles.icon}>
          <Image
            source={
              passwordVisible
                ? require('./images/Eye-open-icon.png') // Visible icon
                : require('./images/eye-close.icon.png') // Hidden icon
            }
            style={{width: 30, height: 30,}}
          />
          </TouchableOpacity>
          
      <Text style={styles.label2}>Phone Number</Text>
      <TextInput
        style={styles.input2}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Let's start!</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>Login</Text>
      </TouchableOpacity>
      <Toast/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(241, 236, 225, 1)',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: 'rgba(96, 0, 187, 1)',
    marginTop: 20,
    fontWeight: 'bold',
  },
  label: {
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  label2: {
    // marginTop: 15,
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    bottom:10
  },
  input: {
    height: 45,
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  input2: {
    height: 45,
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    bottom:10
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  loader: {
    marginTop: 30,
  },
  button: {
    backgroundColor: 'rgba(96, 0, 187, 1)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50, // Makes the button round
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  loginLink: {
    color: 'rgba(255, 168, 0, 1)',
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 18,
  },
  icon:{
    marginLeft:275,
    bottom:39
  }
});

export default Home;
