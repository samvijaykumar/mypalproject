import {View, Text, Image, TouchableOpacity, TextComponent} from 'react-native';
import React from 'react';
import {ViewPagerAndroid} from 'react-native';

const Notificion = ({navigation}) => {
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
          <Text style={{width: 250, textAlign: 'center'}}>Notification</Text>
        </View>
      </View>
      <View
        style={{
          width: 90,
          height: 114,
          backgroundColor: 'rgba(205, 194, 171, 1)',
          marginTop: 50,
          marginLeft: 20,
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <View>
          <Image
            source={require('./images/47524ab148bb55a458ba55977bf67e6d.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginLeft: 20,
              marginTop: 18,
              borderWidth: 2,
              borderColor: 'rgba(255, 255, 255, 1)',
            }}
          />
          <Text style={{marginLeft: 20, marginTop: 10}}>my Love</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: 280,
            marginLeft: 35,
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '800',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            Event of the day
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            Parasite Treatment
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '400',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            Lorem Ipsum is simply dummy text of the
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '400',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            printing and typesetting industry.
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 8,
              fontWeight: '400',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            6 May 2023 at 13:22
          </Text>
        </View>
      </View>
      {/*  */}
      <Image
        source={require('./images/Line -imag.png')}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          width: 360,
          marginTop: 20,
        }}
      />
      <View
        style={{
          width: 90,
          height: 114,
          backgroundColor: 'rgba(205, 194, 171, 1)',
          marginTop: 20,
          marginLeft: 20,
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <View>
          <Image
            source={require('./images/47524ab148bb55a458ba55977bf67e6d.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              marginLeft: 20,
              marginTop: 18,
              borderWidth: 2,
              borderColor: 'rgba(255, 255, 255, 1)',
            }}
          />
          <Text style={{marginLeft: 20, marginTop: 10}}>my Love</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: 280,
            marginLeft: 35,
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '800',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            Event of the day
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            Parasite Treatment
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '400',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            Lorem Ipsum is simply dummy text of the
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '400',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            printing and typesetting industry.
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 8,
              fontWeight: '400',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            6 May 2023 at 13:22
          </Text>
        </View>
      </View>
      <Image
        source={require('./images/Line -imag.png')}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          width: 360,
          marginTop: 20,
        }}
      />
      <View
        style={{
          backgroundColor: 'rgba(45, 32, 57, 1)',
          width: 360,
          height: 80,
          flexDirection: 'row',
          marginTop:250
        }}>
        <View style={{marginLeft: 20, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
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

          <TouchableOpacity onPress={() => navigation.navigate('Notificion')}>
            <Image
              source={require('./images/Red-ball-icon.png')}
              style={{marginLeft: 120, marginTop: 20,}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Notificion;
