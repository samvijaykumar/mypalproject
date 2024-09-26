import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// Uncomment the following if using navigation
// import { useNavigation } from '@react-navigation/native';

const CreateAccount = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');

  // Uncomment if using navigation
  // const navigation = useNavigation();

  // Regular expressions for validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const mobileRegex = /^[0-9]{10}$/;
  const addressRegex = /^.{5,}$/; // Address should have at least 5 characters

  const validateAndSubmit = () => {
    if (!firstName || !lastName) {
      Alert.alert('Validation Error', 'First Name and Last Name are required.');
      return;
    }
    if (!emailRegex.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }
    if (!mobileRegex.test(mobileNumber)) {
      Alert.alert(
        'Validation Error',
        'Please enter a valid 10-digit mobile number.',
      );
      return;
    }
    if (!addressRegex.test(address)) {
      Alert.alert(
        'Validation Error',
        'Please enter a valid address with at least 5 characters.',
      );
      return;
    }

    // If everything is valid
    // Uncomment the following to navigate
    navigation.navigate('NextScreen');

    // For now, log the form data
    console.log('Form Data:', {
      firstName,
      lastName,
      email,
      mobileNumber,
      address,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Account</Text>
      <Text style={styles.subheading}>
        Your Catholic Journey Through our Dedicated App
      </Text>
      <ScrollView>
        <View style={styles.row}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.halfInput}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.halfInput}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          // placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          // placeholder="Mobile Number"
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          // placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(96, 0, 187, 1)',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
            marginBottom: 10,
            marginTop: 80,
          }}
          onPress={validateAndSubmit}>
          <Text style={{color: '#fff', fontSize: 16}}>sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: 'rgba(255, 168, 0, 1)',
              textDecorationLine: 'underline',
              alignSelf: 'center',
              marginTop: 10,
              fontSize: 18,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        {/* <Button title="Submit" onPress={validateAndSubmit} /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(241, 236, 225, 1)',
  },
  heading: {
    fontSize: 26,
    fontWeight: '900',

    marginBottom: 10,
    // color: 'rgba(45, 32, 57, 1)',
    color: 'rgba(96, 0, 187, 1)',
  },
  subheading: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
    color: 'rgba(45, 32, 57, 1)',
    fontWeight: '500',
    opacity: 0.5,
    marginRight: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  halfInputContainer: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: '800',
    color: 'rgba(45, 32, 57, 1)',
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderColor: 'gray',
    // borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: 'rgba(241, 236, 225, 1)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10, // Android elevation
  },
  halfInput: {
    height: 45,
    borderColor: 'gray',
    // borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 10.84,
    elevation: 5, // Android elevation
    marginRight: 10, // Space between first and last name inputs
  },
});

export default CreateAccount;
