import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Advertisement = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'}}>
      <View
        style={{
          width: 40,
          height: 40,
          marginLeft: 20,
          marginTop: 20,
          borderRadius: 50,
          backgroundColor: 'rgba(247, 242, 251, 1)',
        }}>
        <TouchableOpacity>
        <Image
          source={require('./images/arrow-button.png')}
          style={{alignSelf: 'center', marginTop: 8}}
        />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          position: 'absolute',
          alignSelf: 'center',
          marginTop: 20,
          fontSize: 17,
          fontWeight: '400',
          color: 'rgba(45, 32, 57, 1)',
        }}>
        Blog
      </Text>
      <View
        style={{
          alignSelf: 'center',
          marginTop: 20,
          // backgroundColor: 'red',
          borderRadius: 25,
        }}>
        <Image
          source={require('./images/dog-cat-imag.png')}
          style={{width: 341, height: 110, borderRadius: 20, marginTop: 10}}
        />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 24,
          fontWeight: '700',
          color: 'rgba(45, 32, 57, 1)',
        }}>
        Type of Pet Identity
      </Text>
      <Text
        style={{
          width: 320,
          height: 170,
          marginLeft: 20,
          fontSize: 12,
          fontWeight: '400',
          marginTop: 20,
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <Text
        style={{
          width: 324,
          height: 168,
          marginLeft: 20,
          fontSize: 12,
          fontWeight: '400',
        }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <View
        style={{
          backgroundColor: 'rgba(45, 32, 57, 1)',
          width: 360,
          height: 80,
          flexDirection: 'row',
          position: 'absolute',
          marginTop: 670,
        }}>
        <View style={{marginLeft: 20, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
            <Image
              source={require('./images/home-icon-white.png')}
              style={{marginTop: 20}}
            />
          </TouchableOpacity>

          <TouchableOpacity 
          // onPress={() => navigation.navigate('Login')}
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

export default Advertisement;
