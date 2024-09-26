import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';

const AddPet = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'rgba(241, 236, 225, 1)', flex: 1}}>
      <View style={{minWidth: 300, height: 80, backgroundColor: 'white'}}>
        <View
          style={{
            width: 40,
            height: 40,
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 50,
            backgroundColor: 'rgba(241, 236, 225, 1)',
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            // Android Elevation
            elevation: 10,
          }}>
          <TouchableOpacity  onPress={() => navigation.navigate('ProfilScreen')}>
            <Image
              source={require('./images/arrow-button.png')}
              style={{marginLeft: 10, marginTop: 9}}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            position: 'absolute',
            marginLeft: 150,
            marginTop: 30,
            fontSize: 15,
            fontWeight: '400',
            color: ' rgba(45, 32, 57, 1)',
          }}>
          Add Pet
        </Text>
      </View>
      <View
        style={{
          width: 123,
          height: 123,
          alignSelf: 'center',
          borderRadius: 80,
          backgroundColor: 'rgba(247, 242, 251, 1)',
          position: 'relative',
          marginTop: 30,
        }}>
        <Image
          source={require('./images/gole-imag.png')}
          style={{bottom: 2, right: 5}}
        />
        <TouchableOpacity style={{}}>
          <Image
            source={require('./images/plus-icon-08.png')}
            style={{
              bottom: 70,
              marginLeft: 50,
              position: 'absolute',
              width: 25,
              height: 25,
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            marginTop: 70,
            marginLeft: 30,
            position: 'absolute',
            fontSize: 14,
            fontWeight: '400',
            color: 'rgba(45, 32, 57, 1)',
          }}>
          Pet Image
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '800',
            color: 'rgba(45, 32, 57, 1)',
            marginLeft: 20,
            marginTop: 10,
          }}>
          Pet Name
        </Text>
        <TextInput
          placeholder="Enter Pet Name"
          placeholderTextColor={'rgba(45, 32, 57, 1)'}
          style={{
            marginLeft: 20,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            minWidth: 200,
            minHeight: 50,
            width: 310,
            borderRadius: 10,
            paddingLeft: 20,
            marginTop: 10,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            // Android Elevation
            elevation: 10,
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(96, 0, 187, 1)',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 50,
            // marginHorizontal: 10,
            marginTop: 30,
            width: 155,
            paddingLeft: 55,
            marginLeft: 20,
          }}
          onPress={() => navigation.navigate('CalanderScreen')}>
          <Text style={{color: '#fff', fontSize: 16}}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(247, 242, 251, 1)',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 50,
            borderWidth: 1,
            marginTop: 30,
            borderColor: 'rgba(96, 0, 187, 1)',
            width: 150,
            paddingLeft: 45,
            marginLeft: 10,
          }}
          // onPress={() => navigation.navigate('App2')}
          >
          <Text style={{color: 'rgba(96, 0, 187, 1)', fontSize: 16}}>
            cancel
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'rgba(45, 32, 57, 1)',
          width: 360,
          height: 80,
          flexDirection: 'row',
          marginTop: 270,
        }}>
        <View style={{marginLeft: 20, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
            <Image
              source={require('./images/home-icon-white.png')}
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

export default AddPet;
