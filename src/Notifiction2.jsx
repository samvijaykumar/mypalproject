import {View, Text, Image, TouchableOpacity, TextComponent} from 'react-native';
import React from 'react';
import {ViewPagerAndroid} from 'react-native';

const Notificion2 = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'rgba(241, 236, 225, 1)', flex: 1}}>
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
          }}>
          <TouchableOpacity>
            <Image
              source={require('./images/arrow-button.png')}
              style={{marginTop: 10, marginLeft: 11}}
            />
          </TouchableOpacity>
          <Text
            style={{
              width: 250,
              textAlign: 'center',
              paddingTop: 5,
              color: 'rgba(45, 32, 57, 1)',
              fontSize: 17,
              fontWeight:"400"
            }}>
            Notification
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 230,
        }}>
        <Image
          source={require('./images/Big-ball-icon.png')}
          style={{
            width: 78.78,
            height: 78.78,
            tintColor: 'rgba(45, 32, 57, 1)',
          }}
        />
        <Text
          style={{
            fontSize: 10,
            fontWeight: '400',
            opacity: 0.7,
            color: 'rgba(45, 32, 57, 1)',
            marginTop: 5,
          }}>
          No Notifications here yet
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'rgba(45, 32, 57, 1)',
          width: 360,
          height: 80,
          flexDirection: 'row',
          marginTop: 280,
        }}>
        <View style={{marginLeft: 20, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
            <Image
              source={require('./images/home-icon-white.png')}
              style={{marginTop: 20}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Notificion2')}>
            <Image
              source={require('./images/bouttom-icon-headphone.png')}
              style={{marginLeft: 120, marginTop: 20}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Notificion')}>
            <Image
              source={require('./images/Red-ball-icon.png')}
              style={{marginLeft: 120, marginTop: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Notificion2;
