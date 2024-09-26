import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const HealthTracker2 = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(241, 236, 225, 1)'}}>
      <View style={{backgroundColor: 'rgba(255, 255, 255, 1)', height: 80}}>
        <View
          style={{
            width: 40,
            height: 40,
            marginTop: 20,
            marginLeft: 20,
            backgroundColor: 'rgba(247, 242, 251, 1)',
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfilScreen')}>
            <Image
              source={require('./images/arrow-button.png')} // Correct image source path
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 15,
            position: 'absolute',
            marginLeft: 140,
            paddingTop: 25,
            color: 'rgba(45, 32, 57, 1)',
            fontWeight: '400',
          }}>
          Health Tracker
        </Text>
      </View>
      {/* // */}
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          marginHorizontal: 20,
          marginTop: 20,
          height: 50,
          flexDirection: 'row',
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          // Android Elevation
          elevation: 10,
        }}>
        <Image
          source={require('./images/happy-imoji-green.png')}
          style={{marginLeft: 260, position: 'absolute', marginTop: 12}}
        />
        <Image
          source={require('./images/right-arrow,button.png')}
          style={{position: 'absolute', marginLeft: 293, marginTop: 15}}
        />
        <Text
          style={{
            paddingLeft: 20,
            paddingTop: 12,
            fontSize: 14,
            fontWeight: '400',
            color: 'rgba(45, 32, 57, 1)',
          }}>
          Weight
        </Text>
      </View>
      {/* // */}
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          marginHorizontal: 20,
          marginTop: 20,
          height: 50,
          flexDirection: 'row',
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          // Android Elevation
          elevation: 10,
        }}>
        <Image
          source={require('./images/boring-imoji.png')}
          style={{marginLeft: 260, position: 'absolute', marginTop: 12}}
        />
        <Image
          source={require('./images/right-arrow,button.png')}
          style={{position: 'absolute', marginLeft: 293, marginTop: 15}}
        />
        <Text
          style={{
            paddingLeft: 20,
            paddingTop: 12,
            fontSize: 14,
            fontWeight: '400',
            color: 'rgba(45, 32, 57, 1)',
          }}>
          Vitals
        </Text>
      </View>
      {/* // */}
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          marginHorizontal: 20,
          marginTop: 20,
          height: 50,
          flexDirection: 'row',
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          // Android Elevation
          elevation: 10,
        }}>
        <Image
          source={require('./images/happy-imoji-green.png')}
          style={{marginLeft: 260, position: 'absolute', marginTop: 12}}
        />
        <Image
          source={require('./images/right-arrow,button.png')}
          style={{position: 'absolute', marginLeft: 293, marginTop: 15}}
        />
        <Text
          style={{
            paddingLeft: 20,
            paddingTop: 12,
            fontSize: 14,
            fontWeight: '400',
            color: 'rgba(45, 32, 57, 1)',
          }}>
          Glucose
        </Text>
      </View>
      {/* // */}
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          marginHorizontal: 20,
          marginTop: 20,
          height: 50,
          flexDirection: 'row',
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          // Android Elevation
          elevation: 10,
        }}>
        <Image
          source={require('./images/sad-imoji-red.png')}
          style={{marginLeft: 260, position: 'absolute', marginTop: 12}}
        />
        <Image
          source={require('./images/right-arrow,button.png')}
          style={{position: 'absolute', marginLeft: 293, marginTop: 15}}
        />
        <Text
          style={{
            paddingLeft: 20,
            paddingTop: 12,
            fontSize: 14,
            fontWeight: '400',
            color: 'rgba(45, 32, 57, 1)',
          }}>
          Urine
        </Text>
      </View>
      {/* // */}
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          marginHorizontal: 20,
          marginTop: 20,
          height: 50,
          flexDirection: 'row',
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          // Android Elevation
          elevation: 10,
        }}>
        <Image
          source={require('./images/boring-imoji.png')}
          style={{marginLeft: 260, position: 'absolute', marginTop: 12}}
        />
        <Image
          source={require('./images/right-arrow,button.png')}
          style={{position: 'absolute', marginLeft: 293, marginTop: 15}}
        />
        <Text
          style={{
            paddingLeft: 20,
            paddingTop: 12,
            fontSize: 14,
            fontWeight: '400',
            color: 'rgba(45, 32, 57, 1)',
          }}>
          Blood
        </Text>
      </View>
      {/* // */}
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          marginHorizontal: 20,
          marginTop: 20,
          height: 50,
          flexDirection: 'row',
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          // Android Elevation
          elevation: 10,
          marginBottom:150
        }}>
        <Image
          source={require('./images/happy-imoji-green.png')}
          style={{marginLeft: 260, position: 'absolute', marginTop: 12}}
        />
        <Image
          source={require('./images/right-arrow,button.png')}
          style={{position: 'absolute', marginLeft: 293, marginTop: 15}}
        />
        <Text
          style={{
            paddingLeft: 20,
            paddingTop: 12,
            fontSize: 14,
            fontWeight: '400',
            color: 'rgba(45, 32, 57, 1)',
          }}>
          Fecal
        </Text>
      </View>
      <View
    style={{
      backgroundColor: 'rgba(45, 32, 57, 1)',
      width: 360,
      height: 80,
      flexDirection: 'row',
      // position:'absolute',
      // marginTop:670
    }}>
    <View style={{marginLeft: 20, flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
        <Image
          source={require('./images/bottom-icon-home.png')}
          style={{marginTop: 20}}
        />
      </TouchableOpacity>

      <TouchableOpacity
      //  onPress={() => navigation.navigate('Login')}
      >
        <Image
          source={require('./images/bouttom-icon-headphone.png')}
          style={{marginLeft: 120, marginTop: 20}}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Notifiction2')}>
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

export default HealthTracker2;
