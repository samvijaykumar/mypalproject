import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';

const ProfilScreen = ({navigation}) => {
  // State to hold profile data
  const [profileData, setProfileData] = useState({});

  // Example token - In a real app, retrieve this from secure storage (like AsyncStorage)
  const accessToken = 'your-access-token-here'; // Replace this with your real access token

  // Fetch profile data from the API
  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      var base_path = 'https://demo.sgvproject.in/pet_mypal_app/api/';
      const response = await fetch(base_path + 'get_user_profile', {
        // Replace with your API endpoint
        method: 'GET',
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjc5ZWY0ZmQxMDZjOGFkYjNkZjhkZTgxYmVmMmI2ZTNkOGIyN2JjNmQ3YjEyZWRjMWQzNTQ5YzQwMjZkNzYwMmQyZmVhYjk1ZTZhMzZhYTkiLCJpYXQiOjE3MjcwNzM3MDcuMDA1OTUxLCJuYmYiOjE3MjcwNzM3MDcuMDA1OTU0LCJleHAiOjE3NTg2MDk3MDcuMDAzMDUyLCJzdWIiOiI1NCIsInNjb3BlcyI6WyJ1c2VyIl19.GvGYV9k9Mk4ImWK1eDlHyTtOUCY4TFowVj9hk4uadUPJnciSWgc2KmcX48UoreeEd5Z2yw6o9mldngD4D2dQ-9ltom4HcT88O5K8SKRe5WT7k8ObqC-5PvHn55K68Qq9RsegNP6EMgB6JpeHylfXzL9BjwI9J7zr2LR9UXzklaIMdCIymv8c7uV0qwj5tSbCWSdlV5M_oC4N5ow2c9PmNk3l0z6ERGCu8halhW8i_TVbcMFzNL7HloTaaT6jK4K4kbzi9ANCjJWDu98Q10G3XiPpXCuA37wT6sZCNDgNDp356QzY85kE7jpqpY1V3VndlXmEEnVVAQXJ9jWfGSSlRB-Pkk235xXWjFds1-RgVT9o1lBGFZiG-Njgv5FqATQ8BtsdsV84HLl6b63k4LGMayyEOxcwFGJx_JkjmU45vE434WH1bT_856L3vgoXRiZSokLkffn_WtAQArAFrmd7aUwRZUZCpoVroeXem_GYNmOft62q3pXCvcc6hegWEx0hPq1xvjahjB8iwO0jezAS2gmylA2G8e61UOLKA8oKlWRxWy8acDEtbcmiUTCGhjchA72UOcB6qWSXEu5sEMGEFPfGOpYs5e-Yewn3xjV48Hh2eYnRIUy2CyLsGBEksGXNi4yBgS0lMoLYAQrBvb5Rh_WsYTufaZ4Dt1h7ekkJee0`, // Include access token
          'Content-Type': 'application/json',
        },
      });

      if (response.status == 200) {
        const data = await response.json();
        setProfileData(data);
      } else {
        Alert.alert('Error', 'Failed to fetch profile data');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
      console.error(error);
    }
  };

  return (
    <View
      style={{
        width: 360,
        height: 80,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        flex: 1,
      }}>
      <View
        style={{
          width: 40,
          height: 40,
          marginLeft: 20,
          marginTop: 20,
          backgroundColor: 'rgba(247, 242, 251, 1)',
          borderRadius: 50,
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
          <Image
            source={require('./images/arrow-button.png')}
            style={{marginTop: 10, marginLeft: 10}}
          />
        </TouchableOpacity>
        <View style={{width: 350, flexDirection: 'row'}}>
          <Text
            style={{
              paddingLeft: 105,
              paddingTop: 10,
              color: 'rgba(45, 32, 57, 1)',
              fontWeight: '400',
              fontSize: 17,
            }}>
            Profile
          </Text>

          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(247, 242, 251, 1)',
              borderRadius: 50,
              marginLeft: 100,
              marginTop: 2,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
              <Image
                source={require('./images/pencil-icon.png')}
                style={{marginTop: 7, marginLeft: 7}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: '900',
          color: 'rgba(45, 32, 57, 1)',
          marginTop: 10,
        }}>
        Denica kashiba
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'rgba(45, 32, 57, 1)',
          fontSize: 16,
          fontWeight: '700',
        }}>
        Female
      </Text>

      <View style={{marginTop: 10, marginLeft: 110, position: 'relative'}}>
        <Image
          source={require('./images/ladki-(2).png')}
          style={{width: 118, height: 118}}
        />
        <View style={{position: 'absolute', left: 1, top: 1}}>
          <Image
            source={require('./images/gole-imag.png')}
            style={{width: 117, height: 117}}
          />
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 100,
          backgroundColor: 'rgba(45, 32, 57, 1)',
          height: 35,
          justifyContent: 'center',
          borderRadius: 50,
          marginTop: 10,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 1)',
            paddingTop: 5.5,
          }}>
          Completed by{' '}
        </Text>
        <Text style={{color: 'rgba(255, 168, 0, 1)', paddingTop: 5.5}}>
          60%
        </Text>
      </View>
      <View
        style={{
          width: 320,
          height: 90,
          backgroundColor: 'rgba(247, 242, 251, 1)',
          marginHorizontal: 20,
          borderRadius: 30,
          borderBottomColor: 'white',
          borderBottomWidth: 10,
        }}>
        <Text
          style={{width: 300, paddingLeft: 40, paddingTop: 20, opacity: 70}}>
          The complete profile will help to contact
        </Text>
        <Text style={{paddingLeft: 80}}>you if your pet is missing.</Text>
      </View>
      <View
        style={{
          width: 318,
          height: 200,
          backgroundColor: 'rgba(241, 236, 225, 1)',
          marginLeft: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            marginLeft: 20,
            marginTop: 20,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 50,
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <Image
              source={require('./images/text-icon.png')}
              style={{marginLeft: 10, marginTop: 10}}
            />
          </TouchableOpacity>
          <View style={{width: 180, paddingLeft: 20, paddingTop: 5}}>
            <Text
              style={{
                color: 'rgba(45, 32, 57, 1)',
                fontSize: 16,
                fontWeight: '700',
              }}>
              oleanna@mypal.es
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: 'rgba(45, 32, 57, 1)',
              }}>
              Email address
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30, marginLeft: 70}}>
          <Image
            source={require('./images/Line -imag.png')}
            style={{backgroundColor: 'white'}}
          />
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            marginLeft: 20,
            marginTop: 20,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 50,
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <Image
              source={require('./images/phone-icon.png')}
              style={{marginTop: 10, marginLeft: 10}}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                width: 150,
                marginLeft: 20,
                paddingTop: 5,
                color: 'rgba(45, 32, 57, 1)',
                fontSize: 16,
                fontWeight: '700',
              }}>
              +34 616 79 58 65
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                color: 'rgba(45, 32, 57, 1)',
                fontSize: 12,
                fontWeight: 500,
              }}>
              Phone number
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'rgba(45, 32, 57, 1)',
          width: '100%', // Make the footer width 100% of the screen
          height: 80,
          flexDirection: 'row',
          justifyContent: 'space-between', // Evenly distribute the icons
          alignItems: 'center', // Align items vertically in the center
          position: 'absolute', // Keep the footer at the bottom
          bottom: 0, // Stick to the bottom
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
          <Image
            source={require('./images/home-icon-white.png')}
            style={{width: 25, height: 25}} // Responsive size for icons
          />
        </TouchableOpacity>

        <TouchableOpacity
        // onPress={() => navigation.navigate('Login')}
        >
          <Image
            source={require('./images/bouttom-icon-headphone.png')}
            style={{width: 25, height: 25}} // Responsive size for icons
          />
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('Notificion2')}
        >
          <Image
            source={require('./images/bottom-icon-ball.png')}
            style={{width: 25, height: 25}} // Responsive size for icons
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilScreen;
