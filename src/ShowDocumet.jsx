import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ShowDocumet = () => {
  return (
    <View style={{backgroundColor: 'rgba(255, 255, 255, 1)', flex: 1}}>
      <View style={{height: 50, backgroundColor: 'rgba(45, 32, 57, 1)'}}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 50,
            backgroundColor: 'rgba(241, 236, 225, 1)',
            marginLeft: 310,
            marginTop: 7,
          }}>
          <TouchableOpacity   onPress={() => navigation.navigate('Home4')}>
            <Image
              source={require('./images/cros-imag.png')}
              style={{marginLeft: 10, marginTop: 9}}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            position: 'absolute',
            fontSize: 18,
            fontWeight: '700',
            color: 'rgba(255, 255, 255, 1)',
            marginLeft: 120,
            marginTop: 7,
          }}>
          Document 1
        </Text>
      </View>
      <View style={{marginTop: 20}}>
        <Image
          source={require('./images/doctor-script.png')}
          style={{width: 335, marginLeft: 13, height: 490}}
        />
      </View>
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
        // onPress={() => navigation.navigate('App2')}
        >
        <Text style={{color: '#fff', fontSize: 16}}>Download</Text>
      </TouchableOpacity>
      <TouchableOpacity     onPress={() => navigation.navigate('Home4')}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: 'rgba(45, 32, 57, 1)',
         textAlign:'center',
         marginTop:20
          }}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShowDocumet;
