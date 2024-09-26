import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';

const Home4 = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        backgroundColor: 'rgba(241, 236, 225, 1)',
        
      }}>
      <View
        style={{
          width: '',
          height: 80,
          flexDirection: 'row',
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'rgba(247, 242, 251, 1)',
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 50,
          }}>
          <TouchableOpacity>
            <Image
              source={require('./images/arrow-button.png')}
              style={{marginTop: 10, marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            paddingLeft: 92,
            paddingTop: 20,
            fontSize: 17,
            color: 'rgba(45, 32, 57, 1)',
          }}>
          Documents
        </Text>
      </View>
      {/* close-header */}
      <ScrollView style={{marginBottom: 75}}>
        <View
          style={{
            width: 160,
            height: 144,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            marginLeft: 15,
            marginTop: 20,
            position: 'relative',
            borderRadius: 20,
            flexDirection: 'row',
          }}>
          <View style={{width: 150}}>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 90,
                color: 'rgba(45, 32, 57, 1)',
                fontSize: 12,
                fontWeight: '700',
                left: 6,
              }}>
              Vet Visits
            </Text>
          </View>

          <View
            style={{
              width: 50,
              height: 50,
              position: 'absolute',
              alignSelf: 'center',
              backgroundColor: 'rgba(247, 242, 251, 1)',
              borderRadius: 50,
              bottom: 75,
              borderBottomColor: 'rgba(255, 255, 255, 1)',
              left: 55,
            }}>
            <View
              style={{
                width: 25,
                height: 25,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                marginLeft: 75,
                bottom: 10,
                borderRadius: 50,
                borderWidth: 1,
              }}>
              <Text style={{paddingLeft: 8, paddingTop: 2}}>9</Text>
            </View>
            <Image
              source={require('./images/Panja-icon.png')}
              style={{
                left: 15,
                tintColor: 'rgba(96, 0, 187, 1)',
                bottom: 10,
              }}
            />
          </View>
          {/* 1 */}
          <View
            style={{
              width: 160,
              height: 144,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 20,
              // marginTop: 20,
              position: 'relative',
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <View style={{width: 150}}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 90,
                  color: 'rgba(45, 32, 57, 1)',
                  fontSize: 12,
                  fontWeight: '700',
                  left: 6,
                }}>
                Invoices
              </Text>
            </View>
            {/* // */}
            <View
              style={{
                width: 50,
                height: 50,
                position: 'absolute',
                alignSelf: 'center',
                backgroundColor: 'rgba(247, 242, 251, 1)',
                borderRadius: 50,
                bottom: 75,
                borderBottomColor: 'rgba(255, 255, 255, 1)',
                left: 55,
              }}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  marginLeft: 75,
                  bottom: 10,
                  borderRadius: 50,
                  borderWidth: 1,
                }}>
                <Text style={{paddingLeft: 8, paddingTop: 2}}>8</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Invoice')}>
                <Image
                  source={require('./images/Invoic-icon.png')}
                  style={{
                    left: 15,
                    tintColor: 'rgba(96, 0, 187, 1)',
                    bottom: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* 2 */}
        </View>
        {/* // */}
        <View
          style={{
            width: 160,
            height: 144,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            marginLeft: 15,
            marginTop: 20,
            position: 'relative',
            borderRadius: 20,
            flexDirection: 'row',
          }}>
          <View style={{width: 150}}>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 90,
                color: 'rgba(45, 32, 57, 1)',
                fontSize: 12,
                fontWeight: '700',
                left: 6,
              }}>
              Vaccinations
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 50,
              height: 50,
              position: 'absolute',
              alignSelf: 'center',
              backgroundColor: 'rgba(247, 242, 251, 1)',
              borderRadius: 50,
              bottom: 75,
              borderBottomColor: 'rgba(255, 255, 255, 1)',
              left: 55,
            }}>
            <View
              style={{
                width: 25,
                height: 25,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                marginLeft: 75,
                bottom: 10,
                borderRadius: 50,
                borderWidth: 1,
              }}>
              <Text style={{paddingLeft: 8, paddingTop: 2}}>2</Text>
            </View>
            <Image
              source={require('./images/Injaction-icon.png')}
              style={{
                left: 15,
                tintColor: 'rgba(96, 0, 187, 1)',
                bottom: 10,
              }}
            />
          </View>
          {/* // */}
          <View
            style={{
              width: 160,
              height: 144,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 20,
              // marginTop: 20,
              position: 'relative',
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <View style={{width: 150}}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 90,
                  color: 'rgba(45, 32, 57, 1)',
                  fontSize: 12,
                  fontWeight: '700',
                  left: 6,
                }}>
                Lab tests
              </Text>
            </View>
            {/* // */}
            <View
              style={{
                width: 50,
                height: 50,
                position: 'absolute',
                alignSelf: 'center',
                backgroundColor: 'rgba(247, 242, 251, 1)',
                borderRadius: 50,
                bottom: 75,
                borderBottomColor: 'rgba(255, 255, 255, 1)',
                left: 55,
              }}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  marginLeft: 75,
                  bottom: 10,
                  borderRadius: 50,
                  borderWidth: 1,
                }}>
                <Text style={{paddingLeft: 8, paddingTop: 2}}>0</Text>
              </View>
              <Image
                source={require('./images/Lab-tests-imag.png')}
                style={{
                  left: 15,
                  tintColor: 'rgba(96, 0, 187, 1)',
                  bottom: 10,
                }}
              />
            </View>
          </View>
        </View>
        {/* // */}
        <View
          style={{
            width: 160,
            height: 144,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            marginLeft: 20,
            marginTop: 20,
            position: 'relative',
            borderRadius: 20,
            flexDirection: 'row',
          }}>
          <View style={{width: 150}}>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 90,
                color: 'rgba(45, 32, 57, 1)',
                fontSize: 12,
                fontWeight: '700',
                left: 6,
              }}>
              Business Cards
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 50,
              height: 50,
              position: 'absolute',
              alignSelf: 'center',
              backgroundColor: 'rgba(247, 242, 251, 1)',
              borderRadius: 50,
              bottom: 75,
              borderBottomColor: 'rgba(255, 255, 255, 1)',
              left: 55,
            }}>
            <View
              style={{
                width: 25,
                height: 25,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                marginLeft: 75,
                bottom: 10,
                borderRadius: 50,
                borderWidth: 1,
              }}>
              <Text style={{paddingLeft: 8, paddingTop: 2}}>0</Text>
            </View>
            <Image
              source={require('./images/Business-imag.png')}
              style={{
                left: 15,
                tintColor: 'rgba(96, 0, 187, 1)',
                bottom: 10,
              }}
            />
          </View>
          {/* // */}
          <View
            style={{
              width: 160,
              height: 144,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 20,
              // marginTop: 20,
              position: 'relative',
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <View style={{width: 150}}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 90,
                  color: 'rgba(45, 32, 57, 1)',
                  fontSize: 12,
                  fontWeight: '700',
                  left: 6,
                }}>
                Agreements
              </Text>
            </View>
            {/* // */}
            <View
              style={{
                width: 50,
                height: 50,
                position: 'absolute',
                alignSelf: 'center',
                backgroundColor: 'rgba(247, 242, 251, 1)',
                borderRadius: 50,
                bottom: 75,
                borderBottomColor: 'rgba(255, 255, 255, 1)',
                left: 55,
              }}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  marginLeft: 75,
                  bottom: 10,
                  borderRadius: 50,
                  borderWidth: 1,
                }}>
                <Text style={{paddingLeft: 8, paddingTop: 2}}>0</Text>
              </View>
              <Image
                source={require('./images/Agreement-imag.png')}
                style={{
                  left: 15,
                  tintColor: 'rgba(96, 0, 187, 1)',
                  bottom: 10,
                }}
              />
            </View>
          </View>
        </View>
        {/* \\ */}
        <View
          style={{
            width: 160,
            height: 144,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            marginLeft: 20,
            marginTop: 20,
            position: 'relative',
            borderRadius: 20,
            flexDirection: 'row',
          }}>
          <View style={{width: 150}}>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 90,
                color: 'rgba(45, 32, 57, 1)',
                fontSize: 12,
                fontWeight: '700',
                left: 6,
              }}>
              Certificates
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 50,
              height: 50,
              position: 'absolute',
              alignSelf: 'center',
              backgroundColor: 'rgba(247, 242, 251, 1)',
              borderRadius: 50,
              bottom: 75,
              borderBottomColor: 'rgba(255, 255, 255, 1)',
              left: 55,
            }}>
            <View
              style={{
                width: 25,
                height: 25,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                marginLeft: 75,
                bottom: 10,
                borderRadius: 50,
                borderWidth: 1,
              }}>
              <Text style={{paddingLeft: 8, paddingTop: 2}}>0</Text>
            </View>
            <Image
              source={require('./images/Certificates-imag.png')}
              style={{
                left: 15,
                tintColor: 'rgba(96, 0, 187, 1)',
                bottom: 10,
              }}
            />
          </View>
          <View
            style={{
              width: 160,
              height: 144,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 20,
              // marginTop: 20,
              position: 'relative',
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <View style={{width: 150}}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 90,
                  color: 'rgba(45, 32, 57, 1)',
                  fontSize: 12,
                  fontWeight: '700',
                  left: 6,
                }}>
                Passport
              </Text>
            </View>
            {/* // */}
            <View
              style={{
                width: 50,
                height: 50,
                position: 'absolute',
                alignSelf: 'center',
                backgroundColor: 'rgba(247, 242, 251, 1)',
                borderRadius: 50,
                bottom: 75,
                borderBottomColor: 'rgba(255, 255, 255, 1)',
                left: 55,
              }}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  marginLeft: 75,
                  bottom: 10,
                  borderRadius: 50,
                  borderWidth: 1,
                }}>
                <Text style={{paddingLeft: 8, paddingTop: 2}}>0</Text>
              </View>
              <Image
                source={require('./images/Passport-imag.png')}
                style={{
                  left: 15,
                  tintColor: 'rgba(96, 0, 187, 1)',
                  bottom: 10,
                }}
              />
            </View>
          </View>
        </View>
        {/* // */}
        <View
          style={{
            width: 160,
            height: 144,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            marginLeft: 20,
            marginTop: 40,
            position: 'relative',
            borderRadius: 20,
            flexDirection: 'row',
            bottom:20
          }}>
          <View style={{width: 150}}>
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 90,
                color: 'rgba(45, 32, 57, 1)',
                fontSize: 12,
                fontWeight: '700',
                left: 6,
              }}>
              my Love
            </Text>
          </View>

          <View
            style={{
              width: 50,
              height: 50,
              position: 'absolute',
              alignSelf: 'center',
              backgroundColor: 'rgba(247, 242, 251, 1)',
              borderRadius: 50,
              bottom: 75,
              borderBottomColor: 'rgba(255, 255, 255, 1)',
              left: 55,
            }}>
            <View
              style={{
                width: 25,
                height: 25,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                marginLeft: 75,
                bottom: 10,
                borderRadius: 50,
                borderWidth: 1,
              }}>
              <Text style={{paddingLeft: 8, paddingTop: 2}}>0</Text>
            </View>
            <Image
              source={require('./images/chata-icon.png')}
              style={{
                left: 15,
                tintColor: 'rgba(96, 0, 187, 1)',
                bottom: 10,
              }}
            />
          </View>
          <View
            style={{
              width: 160,
              height: 144,
              backgroundColor: 'rgba(255, 255, 255, 1)',
              marginLeft: 20,
              // marginTop: 20,
              position: 'relative',
              borderRadius: 20,
              flexDirection: 'row',
              
            }}>
            <View style={{width: 150}}>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 90,
                  color: 'rgba(45, 32, 57, 1)',
                  fontSize: 12,
                  fontWeight: '700',
                  left: 6,
                }}>
                my Love
              </Text>
            </View>

            <View
              style={{
                width: 50,
                height: 50,
                position: 'absolute',
                alignSelf: 'center',
                backgroundColor: 'rgba(247, 242, 251, 1)',
                borderRadius: 50,
                bottom: 75,
                borderBottomColor: 'rgba(255, 255, 255, 1)',
                left: 55,
              }}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  marginLeft: 75,
                  bottom: 10,
                  borderRadius: 50,
                  borderWidth: 1,
                }}>
                <Text style={{paddingLeft: 8, paddingTop: 2}}>0</Text>
              </View>
              <Image
                source={require('./images/daba-icon.png')}
                style={{
                  left: 15,
                  tintColor: 'rgba(96, 0, 187, 1)',
                  bottom: 10,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* footar-start */}
      <View
  style={{
    width: '100%',
    height: 80,
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:20
  }}>
  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <Image
      source={require('./images/bottom-icon-home.png')}
      style={{ width: 25, height: 25,  }}
    />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('Documents')}>
    <Image
      source={require('./images/bouttom-icon-headphone.png')}
      style={{ width: 25, height: 25, }}
    />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
    <Image
      source={require('./images/bottom-icon-ball.png')}
      style={{ width: 25, height: 25, }}
    />
  </TouchableOpacity>
</View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,

    position: 'relative',
  },
  image: {
    width: 260, // Set the width of your image
    height: 120, // Set the height of your image
    marginRight: 5, // Space between the images
    borderRadius: 20, // Optional: to make images rounded
    marginTop: 20,

    position: 'relative',
  },
});
export default Home4;
