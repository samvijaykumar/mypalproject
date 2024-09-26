import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const AboutEvent = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'rgba(241, 236, 225, 1)', flex: 1}}>
      <View
        style={{
          minWidth: 300,
          minHeight: 80,
          height: 80,
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            marginLeft: 20,
            marginTop: 20,
            backgroundColor: 'rgba(247, 242, 251, 1)',
          }}>
          <TouchableOpacity>
            <Image
              source={require('./images/arrow-button.png')}
              style={{marginLeft: 10, marginTop: 8}}
            />
          </TouchableOpacity>
          <Text
            style={{
              position: 'absolute',
              marginLeft: 110,
              width: 200,
              marginTop: 10,
              fontSize: 17,
              fontWeight: '400',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            About the event
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          width: 310,
          height: 45,
          marginTop: 20,
          marginHorizontal: 25,
          flexDirection: 'row',
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          // Android Elevation
          elevation: 10,
        }}>
        <Text
          style={{
            paddingLeft: 15,
            fontSize: 16,
            fontWeight: '600',
            color: 'rgba(45, 32, 57, 1)',
            marginTop: 7,
          }}>
          Event Name:
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 2,
            fontSize: 12,
            fontWeight: '500',
            color: 'rgba(45, 32, 57, 1)',
          }}>
          JOEY
        </Text>
      </View>
      {/* // */}
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          width: 310,
          height: 45,
          marginTop: 20,
          marginHorizontal: 25,
          flexDirection: 'row',
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          // Android Elevation
          elevation: 10,
        }}>
        <Text
          style={{
            paddingLeft: 15,
            fontSize: 16,
            fontWeight: '600',
            color: 'rgba(45, 32, 57, 1)',
            marginTop: 7,
          }}>
          Presented By:
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 2,
            fontSize: 12,
            fontWeight: '500',
            color: 'rgba(45, 32, 57, 1)',
          }}>
          JOEY
        </Text>
      </View>
      {/* // */}
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          width: 310,
          height: 75,
          marginTop: 20,
          marginHorizontal: 25,
          // flexDirection: 'row',
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          // Android Elevation
          elevation: 10,
        }}>
        <Text
          style={{
            paddingLeft: 15,
            fontSize: 16,
            fontWeight: '600',
            color: 'rgba(45, 32, 57, 1)',
            marginTop: 10,
          }}>
          location:
        </Text>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
            fontSize: 12,
            fontWeight: '500',
            color: 'rgba(45, 32, 57, 1)',
          }}>
          Potter, NE 69156, USA
        </Text>
      </View>
      {/* // */}
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          width: 310,
          height: 75,
          marginTop: 20,
          marginHorizontal: 25,
          // flexDirection: 'row',
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          // Android Elevation
          elevation: 10,
        }}>
        <Text
          style={{
            paddingLeft: 15,
            fontSize: 16,
            fontWeight: '600',
            color: 'rgba(45, 32, 57, 1)',
            marginTop: 10,
          }}>
          Date and time:
        </Text>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 15,
            fontSize: 12,
            fontWeight: '500',
            color: 'rgba(45, 32, 57, 1)',
          }}>
          On 31 jan. 2023 at 10:00 am O Clock
        </Text>
      </View>
      {/* // */}
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(96, 0, 187, 1)',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 30,
          marginTop: 30,
        }}
        onPress={() => navigation.navigate('App2')}>
        <Text style={{color: '#fff', fontSize: 16}}>MANAGE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AboutEvent;
