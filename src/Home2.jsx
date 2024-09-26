import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';

const Home2 = ({navigation}) => {
  const DATA = [
    {id: '1'},
    {id: '2'},
    // Add more items as needed
  ];
  const Bata = [
    {di: '1'},
    {di: '2'},
    // Add more items as needed
  ];

  const renderItem = ({item}) => (
    <View style={item}>
      <Text>{item.title}</Text>

      <View style={{marginLeft: 20}}>
        <ImageBackground
          source={require('./images/pupy-01.png')}
          style={{
            width: 210,
            height: 100,

            borderRadius: 30,
          }}>
          <Text
            style={{
              color: 'white',
              width: 100,
              height: 85,
              paddingLeft: 35,
              paddingTop: 20,
              fontWeight: 'bold',
            }}>
            Together for animal welfare
          </Text>
        </ImageBackground>
      </View>
    </View>
  );

  const renderItemm = ({item}) => (
    <View style={item}>
      <Text>{item.title}</Text>

      <View>
        <View
          style={{
            width: 210,
            height: 110,
            backgroundColor: 'rgba(247, 242, 251, 1)',

            borderRadius: 20,

            marginLeft: 20,
          }}>
          <View
            style={{
              width: 40,
              height: 30,
              marginTop: 20,
              marginLeft: 20,
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <View>
              <Image
                source={require('./images/47524ab148bb55a458ba55977bf67e6d.png')}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  borderWidth: 3,
                  borderColor: 'white',
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  width: 60,
                  color: 'rgba(45, 32, 57, 1)',
                  fontWeight: 'bold',
                }}>
                Play time
              </Text>
              <Text style={{marginLeft: 10, height: 50, width: 100}}>
                July 28, 2023 at 10:15 AM
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 20,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          height: 80,
          paddingTop: 10,
        }}>
        <View>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 25}}>
            Hi, Denica
          </Text>
          <Text>oleanna@mypal.es</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
          <View
            style={{
              marginLeft: 160,
              borderRadius: 50,
              width: 45,
              height: 35,
              backgroundColor: 'rgba(247, 242, 251, 1)',
              marginTop: 12,
            }}>
            <Image
              source={require('./images/d30c8100-6ee4-4f9e-bede-962bedca8fd1.png')}
              style={{marginLeft: 13, marginTop: 7}}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* close heder */}

      <View
        style={{
          backgroundColor: 'rgba(241, 236, 225, 1)',

          display: 'flex',
          width: 370,
          height: 340,
        }}>
        <View style={{flexDirection: 'row', paddingTop: 20}}>
          <Text
            style={{
              paddingLeft: 20,
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Mis mascotas
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                marginLeft: 150,
                backgroundColor: 'white',
                width: 60,
                height: 30,
                textAlign: 'center',
                borderRadius: 15,
                paddingTop: 5,
                color: 'blue',
              }}>
              Todos
            </Text>
          </TouchableOpacity>
        </View>

        {/* NExt */}

        <View
          style={{
            marginTop: 15,
            width: 100,
            height: 120,
            backgroundColor: 'white',
            marginLeft: 20,
            borderRadius: 20,
            flexDirection: 'row',
          }}>
          <View>
            <Image
              source={require('./images/47524ab148bb55a458ba55977bf67e6d.png')}
              style={{
                width: 50,
                height: 50,
                marginTop: 20,
                marginLeft: 25,
                borderRadius: 50,
                paddingTop: 20,
              }}
            />
            <Text
              style={{
                marginTop: 10,
                marginLeft: 25,
                color: 'black',
                fontWeight: 'bold',
              }}>
              My Love
            </Text>
          </View>
          <View
            style={{
              width: 100,
              height: 120,
              backgroundColor: 'white',
              marginLeft: 40,
              borderRadius: 25,

              backgroundColor: 'rgba(96, 0, 187, 1)',
            }}>
            <TouchableOpacity>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'white',
                  borderRadius: 50,
                  marginTop: 20,
                  marginLeft: 25,
                }}>
                <Image
                  source={require('./images/plus-icon-08.png')}
                  style={{marginLeft: 16, marginTop: 17}}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 25,
                marginTop: 9,
                color: 'rgba(255, 255, 255, 1)',
                fontSize: 12,
              }}>
              Add Dogs
            </Text>
          </View>
        </View>

        <ScrollView style={{}}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          color: 'black',
          fontWeight: 'bold',
          fontSize: 15,
        }}>
        Proximos eventos...
      </Text>
      <ScrollView style={{}}>
        <FlatList
          data={Bata}
          renderItem={renderItemm}
          keyExtractor={item => item.di}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(96, 0, 187, 1)',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 30,
          marginBottom: 25,
          position: 'static',
          marginTop: 10,
        }}
        onPress={() => navigation.navigate('ProfilScreen')}>
        <Text style={{color: '#fff', fontSize: 16}}> Calendario</Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: 'rgba(45, 32, 57, 1)',
          width: 360,
          height: 80,
          flexDirection: 'row',
        }}>
        <View style={{marginLeft: 20, flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('./images/bottom-icon-home.png')}
              style={{marginTop: 20}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image
              source={require('./images/bouttom-icon-headphone.png')}
              style={{marginLeft: 120, marginTop: 20}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Notificion2')}>
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

export default Home2;
