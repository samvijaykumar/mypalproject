import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Invoice = () => {
  return (
    <View>
      <View
        style={{
          width: 360,
          height: 50,
          backgroundColor: 'rgba(45, 32, 57, 1)',
        }}>
        <Text
          style={{
            paddingLeft: 150,
            position: 'relative',
            paddingTop: 10,
            fontSize: 18,
            fontWeight: '700',
            color: 'rgba(255, 255, 255, 1)',
          }}>
          Invoices
        </Text>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            marginLeft: 310,
            borderRadius: 50,
            marginTop: 10,
            position: 'absolute',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home3')}>
            <Image
              source={require('./images/cros-imag.png')}
              style={{marginTop: 10, marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          marginTop: 10,
          marginHorizontal: 20,
          width: 334,
          color: 'rgba(45, 32, 57, 1)',
          fontSize: 16,
          fontWeight: '400',
          // height:224
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
          marginTop: 20,
          marginHorizontal: 20,
          width: 334,
          color: 'rgba(45, 32, 57, 1)',
          fontSize: 16,
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
      <View style={{marginTop: 30}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(96, 0, 187, 1)',
            paddingVertical: 10,
            // paddingHorizontal: 25,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 30,
            // marginBottom: 25,
          }}>
          {/* onPress={() => navigation.navigate('App2')} */}
          <Text style={{color: '#fff', fontSize: 16}}>Download</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{marginLeft: 150, marginTop: 20, bottom: 5}}
        onPress={() => navigation.navigate('Home3')}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: 'rgba(45, 32, 57, 1)',
          }}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Invoice;
