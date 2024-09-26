import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';

const PetList = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'rgba(241, 236, 225, 1)', flex: 1}}>
      <View style={{height: 80, backgroundColor: 'rgba(255, 255, 255, 1)'}}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            marginLeft: 20,
            marginTop: 20,
            backgroundColor: 'rgba(247, 242, 251, 1)',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('ProfilScreen')}>
            <Image
              source={require('./images/arrow-button.png')}
              style={{marginLeft: 11, marginTop: 10}}
            />
          </TouchableOpacity>
          <Text
            style={{
              position: 'absolute',
              marginLeft: 140,
              width: 200,
              marginTop: 5,
              fontSize: 15,
              fontWeight: '400',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            Todos
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          color: 'rgba(45, 32, 57, 1)',
          marginLeft: 20,
          marginTop: 20,
        }}>
        Pet List
      </Text>

      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 100,
              height: 130,
              marginLeft: 20,
              marginTop: 10,
              backgroundColor: 'rgba(96, 0, 187, 1)',
              borderRadius: 20,
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                marginLeft: 30,
                marginTop: 27,
                backgroundColor: 'rgba(241, 236, 225, 1)',
                borderRadius: 50,
              }}>
              <TouchableOpacity>
                <Image
                  source={require('./images/plus-icon-08.png')}
                  style={{marginLeft: 11, marginTop: 10}}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: 'rgba(255, 255, 255, 1)',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              Add Dogs
            </Text>
          </View>
          {/* // */}

          <View
            style={{
              width: 100,
              height: 130,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 10,
              marginTop: 10,
              borderRadius: 20,
            }}>
            <Image
              source={require('./images/47524ab148bb55a458ba55977bf67e6d.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginLeft: 30,
                marginTop: 27,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: 'rgba(45, 32, 57, 1)',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              Herrry
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 100,
              height: 130,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 10,
              marginTop: 10,
              borderRadius: 20,
            }}>
            <Image
              source={require('./images/Dog-2,image.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginLeft: 30,
                marginTop: 27,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: 'rgba(45, 32, 57, 1)',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              Sweetie
            </Text>
          </View>
          {/* // */}
        </View>
        {/* // */}
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 100,
              height: 130,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 20,
              marginTop: 10,
              borderRadius: 20,
            }}>
            <Image
              source={require('./images/47524ab148bb55a458ba55977bf67e6d.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginLeft: 30,
                marginTop: 27,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: 'rgba(45, 32, 57, 1)',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              My Love
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 100,
              height: 130,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 10,
              marginTop: 10,
              borderRadius: 20,
            }}>
            <Image
              source={require('./images/47524ab148bb55a458ba55977bf67e6d.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginLeft: 30,
                marginTop: 27,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: 'rgba(45, 32, 57, 1)',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              Herrry
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 100,
              height: 130,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 10,
              marginTop: 10,
              borderRadius: 20,
            }}>
            <Image
              source={require('./images/Dog-2,image.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginLeft: 30,
                marginTop: 27,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: 'rgba(45, 32, 57, 1)',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              Sweetie
            </Text>
          </View>
          {/* // */}
        </View>
        {/* // */}
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 100,
              height: 130,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 20,
              marginTop: 10,
              borderRadius: 20,
            }}>
            <Image
              source={require('./images/47524ab148bb55a458ba55977bf67e6d.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginLeft: 30,
                marginTop: 27,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: 'rgba(45, 32, 57, 1)',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              My Love
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 100,
              height: 130,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 10,
              marginTop: 10,
              borderRadius: 20,
            }}>
            <Image
              source={require('./images/47524ab148bb55a458ba55977bf67e6d.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginLeft: 30,
                marginTop: 27,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: 'rgba(45, 32, 57, 1)',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              Herrry
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 100,
              height: 130,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 10,
              marginTop: 10,
              borderRadius: 20,
            }}>
            <Image
              source={require('./images/Dog-2,image.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginLeft: 30,
                marginTop: 27,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: 'rgba(45, 32, 57, 1)',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              Sweetie
            </Text>
          </View>
          {/* // */}
        </View>
        {/* // */}
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 100,
              height: 130,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 20,
              marginTop: 10,
              borderRadius: 20,
              marginBottom:10
            }}>
            <Image
              source={require('./images/47524ab148bb55a458ba55977bf67e6d.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginLeft: 30,
                marginTop: 27,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: 'rgba(45, 32, 57, 1)',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              My Love
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 100,
              height: 130,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 10,
              marginTop: 10,
              borderRadius: 20,
            }}>
            <Image
              source={require('./images/47524ab148bb55a458ba55977bf67e6d.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginLeft: 30,
                marginTop: 27,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: 'rgba(45, 32, 57, 1)',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              Herrry
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 100,
              height: 130,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 10,
              marginTop: 10,
              borderRadius: 20,
            }}>
            <Image
              source={require('./images/Dog-2,image.png')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                marginLeft: 30,
                marginTop: 27,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                color: 'rgba(45, 32, 57, 1)',
                textAlign: 'center',
                paddingTop: 10,
              }}>
              Sweetie
            </Text>
          </View>
          {/* // */}
        </View>
        {/* // */}
      </ScrollView>
      <View
        style={{
          backgroundColor: 'rgba(45, 32, 57, 1)',
          width: 360,
          height: 80,
          flexDirection: 'row',
        }}>
        <View style={{marginLeft: 20, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
            <Image
              source={require('./images/bottom-icon-home.png')}
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

export default PetList;
