import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const ResetPasswordScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = data => {
    if (data.password === data.confirmPassword) {
      Alert.alert('Success', 'Password has been set successfully.');
    } else {
      Alert.alert('Error', 'Passwords do not match.');
    }
    navigation.navigate('Home2');
  };

  const password = watch('password');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reset New Password?</Text>
      <Text>
        Please enter new password. Your new password must be different from
        previous password
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          color: 'rgba(45, 32, 57, 1)',
          marginRight: 240,
          marginTop: 50,
          marginBottom: 5,
        }}>
        Password
      </Text>
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Password is required',
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            message:
              'Password must be at least 8 characters long and include uppercase, lowercase letters, and numbers',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            // placeholder="Password"
            secureTextEntry={!passwordVisible}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}
      <Text
        style={{
          marginRight: 170,
          fontSize: 18,
          fontWeight: '800',
          color: 'rgba(45, 32, 57, 1)',
          marginTop: 10,
          marginBottom: 5,
        }}>
        Confirm Password
      </Text>
      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: 'Please confirm your password',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            // placeholder="Confirm Password"
            secureTextEntry={!passwordVisible}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.confirmPassword && (
        <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>
      )}

      {/* <Button
        title={passwordVisible ? 'Hide Password' : 'Show Password'}
        onPress={() => setPasswordVisible(!passwordVisible)}
      /> */}
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(96, 0, 187, 1)',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 50, // This makes the button round
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 10,
          marginTop: 30,
        }}
        onPress={handleSubmit(onSubmit)}>
        <Text style={{color: '#fff', fontSize: 16}}>Reset password</Text>
      </TouchableOpacity>

      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(241, 236, 225, 1)',
  },
  header: {
    fontSize: 26,
    marginBottom: 10,
    fontWeight: '900',
    color: 'rgba(96, 0, 187, 1)',
  },
  input: {
    width: '100%',
    padding: 10,
    // borderWidth: 1,
    // borderColor: '#ccc',
    borderRadius: 15,
    marginBottom: 10,
    // color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default ResetPasswordScreen;
