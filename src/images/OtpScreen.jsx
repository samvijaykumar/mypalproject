import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';

const OtpScreen = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']); // For 4 digit OTP
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false); // Loading state for API call

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input if length is 1
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }

    // Move to previous input if text is empty
    if (!text && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    Keyboard.dismiss();
    const otpCode = otp.join('');
    
    if (otpCode.length === 4) {
      setLoading(true); // Start loading

      // API call for OTP verification
      try {
        var base_path = 'https://demo.sgvproject.in/pet_mypal_app/api/';
      
        const response = await fetch(base_path + 'reset_password_api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer your-auth-token', // If your API requires authentication
          },
          body: JSON.stringify({
            otp: otpCode,
            phoneNumber: '+34 616 79 58 65', // Example phone number, update as per your app
          }),
        });

        const jsonResponse = await response.json();

        if (response.ok) {
          Alert.alert('Success', 'OTP Verified Successfully!');
          // Navigate to the next screen after OTP verification
          navigation.navigate('Home2');
        } else {
          Alert.alert('Error', jsonResponse.message || 'Invalid OTP. Please try again.');
        }
      } catch (error) {
        Alert.alert('Error', 'Something went wrong. Please try again.');
      } finally {
        setLoading(false); // Stop loading
      }
    } else {
      Alert.alert('Error', 'Please enter a valid 4-digit OTP.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <View style={{flexDirection: 'row', width: 300, marginRight: 10}}>
        <Text style={styles.title2}>
          Please enter your 4-digit reset code sent to the registered mobile number
        </Text>
        <Text
          style={{
            marginTop: 17,
            position: 'absolute',
            marginLeft: 170,
            fontSize: 14,
            color: 'rgba(255, 168, 0, 1)',
            fontWeight: '500',
          }}>
          (+34 616 79 58 65)
        </Text>
      </View>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            maxLength={1}
            keyboardType="numeric"
            ref={ref => (inputRefs.current[index] = ref)}
            autoFocus={index === 0}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.verifyText}>SUBMIT</Text>
        )}
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
          RESEND
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(241, 236, 225, 1)',
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    marginBottom: 10,
    color: 'rgba(96, 0, 187, 1)',
    marginRight: 100,
    marginTop: 20,
  },
  title2: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 60,
    color: 'rgba(45, 32, 57, 1)',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 30,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android Elevation
    elevation: 5,
  },
  verifyButton: {
    backgroundColor: 'rgba(96, 0, 187, 1)',
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 20,
  },
  verifyText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default OtpScreen;
