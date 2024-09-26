import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Ensure you have installed this package
import React, {useState} from 'react';

const EditPrfile = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleGenderChange = gender => {
    setSelectedGender(gender);
  };

  const renderCustomCheckBox = gender => (
    <TouchableOpacity
      style={[
        styles.customCheckbox,
        selectedGender === gender && styles.customCheckboxSelected,
      ]}
      onPress={() => handleGenderChange(gender)}>
      {selectedGender === gender && (
        <Icon name="chevron-right" size={15} color="#fff" /> // Displays the right arrow icon when selected
      )}
    </TouchableOpacity>
  );

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,14}$/;
    // const zipRegex = /^\d{5,6}$/;

    if (!Name || !email || !phoneNumber) {
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
    return true;
  };
  const handleSubmit = async () => {
    if (validateInputs()) {
      setError('');

      try {
        console.log('Form submitted:', {
          Name,
          email,
          phoneNumber,
          gender: selectedGender,
        });
        const accessToken =
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2E0YjYzNGE4ZWJmNmI1YTgwN2YzNTZmZGU0ODMzM2Y3MjMyYzlkODE5NDBmZTE1ZWMwZTNjMTFiMjViMjk2NTRmNDg5ZWI3NDZmZjc1YTIiLCJpYXQiOjE3MjY4MzEyNjQuNzQyNzA0LCJuYmYiOjE3MjY4MzEyNjQuNzQyNzExLCJleHAiOjE3NTgzNjcyNjQuNzM2MDQ5LCJzdWIiOiIzNSIsInNjb3BlcyI6WyJ1c2VyIl19.o1uedHCLzIuQ2fdLgwnLPiLCXLvsXOkMNK308_GiUMaL6_WYyDmqQ6mj1qdIyvUcHbnNAxETKbcCt3NDXlLUw65tHEi-cY8DJIVxIDVDKePaAp7LnCxbFZEVirpZYWAe3_oRpslaXBGHTqZA8l9Fi_HWcf7UPAR7u3rFCPfbDxBO3sCjQzp_bGp1pgzDWf_bSmcSVITmIl1Yl7j7R5TGX9geVWZPsWRPgN0Rf2QLhMtEn0NZOImM_Ml7dLlS0qnotqHkupNdayBMCNhUH5nFJoAguw43GsSV8SM_qfU58ZXoLBMrwvFR5WE2Qn0MybghOXyoiQNB_mLED0akQXcDVQ_LE53U3xHN373jXsrHKUb1iuf9OZxsPlh_7HXILh9lHlohNH4KRYR8eFZWxLbWBSM9sc23vdeWAAe8s0F3wEmkNtO780o-OXUXReY2Hwtox6BA1lKzH0utT_oNQ4Cutj0nhONZFtcUY_lKuIjE5pds0Mp8s3aBOp-xU64yt8963q-cZMmEnQvz2gfqL2gXfoUPHCWfL_oyj8uztMjEyS0RByEdveWAdGJZJLB4-fxX2yPYvkPF7zzLYKLMXHLM6HTaxcwbWVrviiaFw7acCR1BSL_2FbsIFbiAbWHpK0LbuOSn7v-hiVC0ITmn-gGaASDQpT42e32hu3NJVaiFC0k}';

        const base_path = 'https://demo.sgvproject.in/pet_mypal_app/api/';
        const response = await fetch(base_path + 'update_user_profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`, // Pass the token here
            },
          },
          body: JSON.stringify({
            name: Name,
            email: email,
            phone: phoneNumber,
            gender: selectedGender,
          }),
        });

        // Check if the response is OK
        if (!response.ok) {
          const errorText = await response.text(); // Get the response text for debugging
          console.error('API error response:', errorText);
          setError('Profile update failed. Please try again.');
          return;
        }

        const data = await response.json();
        console.log('API Response:', data);

        console.log('Profile updated successfully:', data);
        navigation.navigate('Home3');
      } catch (error) {
        console.error('Error during API call:', error);
        setError('An error occurred. Please try again.');
      }
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(241, 236, 225, 1)'}}>
      <View
        style={{
          width: 360,
          height: 85,
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            backgroundColor: 'rgba(247, 242, 251, 1)',
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            // Android Elevation
            elevation: 10,
          }}>
          <TouchableOpacity>
            <Image
              source={require('./images/arrow-button.png')}
              style={{marginTop: 10, marginLeft: 10}}
            />
          </TouchableOpacity>
          <Text
            style={{
              width: 300,
              paddingLeft: 105,
              paddingTop: 10,
              color: 'rgba(45, 32, 57, 1)',
              fontSize: 15,
              fontWeight: '400',
            }}>
            Edit Profile
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          marginLeft: 120,
          position: 'relative',
        }}>
        <Image
          source={require('./images/ladki-(2).png')}
          style={{width: 118, height: 118}}
        />
        <View
          style={{position: 'absolute', left: 1, top: 1, right: 0, bottom: 0}}>
          <Image
            source={require('./images/gole-imag.png')}
            style={{width: 117, height: 117}}
          />
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'rgba(247, 242, 251, 1)',
            borderRadius: 50,
            marginLeft: 80,
            position: 'absolute',
            marginTop: 75,

            // marginTop: 2,
          }}>
          <TouchableOpacity>
            <Image
              source={require('./images/pencil-icon.png')}
              style={{marginTop: 10, marginLeft: 10, width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <Text
          style={{
            // marginTop: 2,
            fontWeight: 'bold',
            fontSize: 17,
            color: 'black',
          }}>
          Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={Name}
          onChangeText={text => setName(text)}
        />
        <Text
          style={{
            marginTop: 15,
            fontWeight: 'bold',
            fontSize: 17,
            color: 'black',
          }}>
          Email address
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            padding: 10,
            marginTop: 10,
            backgroundColor: 'white',
            borderRadius: 10,
          }}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text
          style={{
            marginTop: 15,
            fontWeight: 'bold',
            fontSize: 17,
            color: 'black',
          }}>
          Phone Number
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Text style={styles.gender}>Gender</Text>
        <View style={styles.vijay}>
          <View style={styles.row}>
            <View style={styles.checkboxContainer}>
              {renderCustomCheckBox('Male')}
              <Text style={styles.label}>Male</Text>
            </View>

            <View style={styles.checkboxContainer}>
              {renderCustomCheckBox('Female')}
              <Text style={styles.label}>Female</Text>
            </View>

            <View style={styles.checkboxContainer}>
              {renderCustomCheckBox('Other')}
              <Text style={styles.label}>Other</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(96, 0, 187, 1)',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 50, // This makes the button round
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
            marginTop: 20,
          }}
          onPress={handleSubmit}>
          <Text style={{color: '#fff', fontSize: 16}}> Save Change</Text>
        </TouchableOpacity>
      </ScrollView>
      <View
        style={{
          backgroundColor: 'rgba(45, 32, 57, 1)',
          // width: 360,
          minWidth: 400,
          minWidth: 360,
          // height: 80,
          maxHeight: 80,
          minHeight: 80,
          flexDirection: 'row',
          position: 'static',
          // top: 60,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            // position: 'absolute',
            // top: 0,
            // left: 0,
            // right: 0,
            // bottom: 0,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('./images/home-icon-white.png')}
              style={{marginTop: 20}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image
              source={require('./images/bouttom-icon-headphone.png')}
              style={{marginLeft: 120, marginTop: 20}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Notificion2')}>
            <Image
              source={require('./images/bottom-icon-ball.png')}
              style={{marginLeft: 120, marginTop: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: 'rgba(96, 0, 187, 1)',
    marginTop: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Android Elevation
    elevation: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  gender: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgba(45, 32, 57, 1)',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 45,
    paddingLeft: 5,
    borderRadius: 12,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Android Elevation
    elevation: 10,
    //
    // marginHorizontal:50
  },
  customCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 12, // Make the checkbox round
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 8,
  },
  customCheckboxSelected: {
    backgroundColor: 'green', // Color when selected
  },
  label: {
    marginLeft: 2,
    color: 'rgba(45, 32, 57, 1)',
    fontWeight: '400',
    fontSize: 14,
  },
});
export default EditPrfile;
