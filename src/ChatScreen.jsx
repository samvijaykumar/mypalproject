import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';

const ChatScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(241, 236, 225, 1)'}}>
      <View
        style={{
          width: 360,
          height: 80,
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }}>
        <View>
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
            <TouchableOpacity>
              <Image
                source={require('./images/arrow-button.png')}
                style={{marginTop: 10, marginLeft: 10}}
              />
            </TouchableOpacity>
            <View style={{width: 350, flexDirection: 'row'}}>
              <Text
                style={{
                  paddingLeft: 95,
                  paddingTop: 10,
                  color: 'rgba(45, 32, 57, 1)',
                  fontWeight: '400',
                  fontSize: 17,
                }}>
                Chat Board
              </Text>

              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'rgba(247, 242, 251, 1)',
                  borderRadius: 50,
                  marginLeft: 75,
                  marginTop: 2,
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('./images/3-dot-icon.png')}
                    style={{marginTop: 16, marginLeft: 9}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: 80,
          height: 20,
          backgroundColor: 'black',
          alignSelf: 'center',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <Image
          source={require('./images/Dropdown-icon.png')}
          style={{alignSelf: 'center', marginTop: 5}}
        />
      </View>
      <View
        style={{
          marginLeft: 20,
          marginTop: 30,
          width: 286,
          height: 70,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          // Android Elevation
          elevation: 10,
        }}>
        <Text
          style={{
            width: 254,
            marginLeft: 20,
            fontSize: 10,
            height: 39,
            marginTop: 10,
            color: 'rgba(45, 32, 57, 1)',
            fontWeight: '400',
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </Text>
      </View>
      {/* // */}
      <View
        style={{
          marginLeft: 50,
          marginTop: 30,
          width: 286,
          height: 70,
          backgroundColor: 'rgba(45, 32, 57, 1)',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          // Android Elevation
          elevation: 10,
        }}>
        <Text
          style={{
            width: 254,
            marginLeft: 20,
            fontSize: 10,
            height: 39,
            marginTop: 10,
            color: 'rgba(255, 255, 255, 1)',
            fontWeight: '400',
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </Text>
      </View>
      {/* // */}
      <View
        style={{
          marginLeft: 20,
          marginTop: 30,
          width: 286,
          height: 70,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          // Android Elevation
          elevation: 10,
        }}>
        <Text
          style={{
            width: 254,
            marginLeft: 20,
            fontSize: 10,
            height: 39,
            marginTop: 10,
            color: 'rgba(45, 32, 57, 1)',
            fontWeight: '400',
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </Text>
      </View>
      {/* // */}
      <View
        style={{
          marginLeft: 50,
          marginTop: 30,
          width: 286,
          height: 70,
          backgroundColor: 'rgba(45, 32, 57, 1)',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          // Android Elevation
          elevation: 10,
        }}>
        <Text
          style={{
            width: 254,
            marginLeft: 20,
            fontSize: 10,
            height: 39,
            marginTop: 10,
            color: 'rgba(255, 255, 255, 1)',
            fontWeight: '400',
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </Text>
      </View>
      <View style={{marginTop: 180, marginLeft: 30, marginRight: 80}}>
        <TextInput
          placeholder="Type a message"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderRadius: 50,
            paddingLeft: 20,
          }}
        />
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'rgba(116, 68, 234, 1)',
            position: 'absolute',
            marginLeft: 265,
            borderRadius: 50,
          }}>
          <TouchableOpacity>
            <Image
              source={require('./images/Send-icon.png')}
              style={{alignSelf: 'center', marginTop: 12}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
