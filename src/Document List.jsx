import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';

const DocumentList = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        backgroundColor: 'rgba(255, 255, 255, 1)',
      }}>
      <View
        style={{
          width: 40,
          height: 40,
          flexDirection: 'row',
          borderRadius: 50,
          backgroundColor: 'rgba(247, 242, 251, 1)',
          marginTop: 20,
          marginLeft: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
          <Image
            source={require('./images/arrow-button.png')}
            style={{marginLeft: 8, marginTop: 8}}
          />
        </TouchableOpacity>
        <Text
          style={{
            width: 200,
            alignSelf: 'center',
            marginLeft: 90,
            fontSize: 17,
            fontWeight: '400',
            color: 'rgba(45, 32, 57, 1)',
          }}>
          Document List
        </Text>
      </View>

      {/* header close */}

      <View style={{marginHorizontal: 20, marginTop: 50}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home4')}>
            <View
              style={{
                width: 160,
                height: 70,
                backgroundColor: 'rgba(241, 236, 225, 1)',
                // marginLeft: 20,

                borderRadius: 20,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  alignSelf: 'center',
                  backgroundColor: 'rgba(96, 0, 187, 1)',
                  borderRadius: 50,
                  bottom: 55,
                  borderBottomColor: 'rgba(255, 255, 255, 1)',
                  left: 55,
                }}>
                <Image
                  source={require('./images/chaye-icon.png')}
                  style={{marginLeft: 10, marginTop: 10}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 30,
                  color: 'rgba(96, 0, 187, 1)',
                  fontSize: 17,
                  fontWeight: '700',
                  left: 1,
                }}>
                Documents - 1
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home4')}>
            <View
              style={{
                width: 160,
                height: 70,
                backgroundColor: 'rgba(241, 236, 225, 1)',
                marginLeft: 10,

                borderRadius: 20,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  alignSelf: 'center',
                  backgroundColor: 'rgba(96, 0, 187, 1)',
                  borderRadius: 50,
                  bottom: 55,
                  borderBottomColor: 'rgba(255, 255, 255, 1)',
                  left: 55,
                }}>
                <Image
                  source={require('./images/document-icon-2.png')}
                  style={{marginLeft: 10, marginTop: 10}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 30,
                  color: 'rgba(96, 0, 187, 1)',
                  fontSize: 17,
                  fontWeight: '700',
                  left: 1,
                }}>
                Documents - 2
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* // */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 35,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home4')}>
            <View
              style={{
                width: 160,
                height: 70,
                backgroundColor: 'rgba(241, 236, 225, 1)',

                borderRadius: 20,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  alignSelf: 'center',
                  backgroundColor: 'rgba(96, 0, 187, 1)',
                  borderRadius: 50,
                  bottom: 55,
                  borderBottomColor: 'rgba(255, 255, 255, 1)',
                  left: 55,
                }}>
                <Image
                  source={require('./images/Doc-icon.png')}
                  style={{marginLeft: 10, marginTop: 10}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 30,
                  color: 'rgba(96, 0, 187, 1)',
                  fontSize: 17,
                  fontWeight: '700',
                  left: 1,
                }}>
                Documents - 3
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home4')}>
            <View
              style={{
                backgroundColor: 'red',
                width: 160,
                height: 70,
                backgroundColor: 'rgba(241, 236, 225, 1)',
                marginLeft: 10,

                borderRadius: 20,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  alignSelf: 'center',
                  backgroundColor: 'rgba(96, 0, 187, 1)',
                  borderRadius: 50,
                  bottom: 55,
                  borderBottomColor: 'rgba(255, 255, 255, 1)',
                  left: 55,
                }}>
                <Image
                  source={require('./images/document-4-icon.png')}
                  style={{marginLeft: 10, marginTop: 10}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 30,
                  color: 'rgba(96, 0, 187, 1)',
                  fontSize: 17,
                  fontWeight: '700',
                  left: 1,
                }}>
                Documents - 4
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* // */}
        <View style={{flexDirection: 'row', marginTop: 35}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home4')}>
            <View
              style={{
                width: 160,
                height: 70,
                backgroundColor: 'rgba(241, 236, 225, 1)',
                // marginLeft: 20,

                borderRadius: 20,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  alignSelf: 'center',
                  backgroundColor: 'rgba(96, 0, 187, 1)',
                  borderRadius: 50,
                  bottom: 55,
                  borderBottomColor: 'rgba(255, 255, 255, 1)',
                  left: 55,
                }}>
                <Image
                  source={require('./images/chaye-icon.png')}
                  style={{marginLeft: 10, marginTop: 10}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 30,
                  color: 'rgba(96, 0, 187, 1)',
                  fontSize: 17,
                  fontWeight: '700',
                  left: 1,
                }}>
                Documents - 5
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home4')}>
            <View
              style={{
                width: 160,
                height: 70,
                backgroundColor: 'rgba(241, 236, 225, 1)',
                marginLeft: 10,

                borderRadius: 20,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  alignSelf: 'center',
                  backgroundColor: 'rgba(96, 0, 187, 1)',
                  borderRadius: 50,
                  bottom: 55,
                  borderBottomColor: 'rgba(255, 255, 255, 1)',
                  left: 55,
                }}>
                <Image
                  source={require('./images/Document-6-imag.png')}
                  style={{marginLeft: 10, marginTop: 10}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 30,
                  color: 'rgba(96, 0, 187, 1)',
                  fontSize: 17,
                  fontWeight: '700',
                  left: 1,
                }}>
                Documents - 6
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* // */}
        <View style={{flexDirection: 'row', marginTop: 35}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home4')}>
            <View
              style={{
                width: 160,
                height: 70,
                backgroundColor: 'rgba(241, 236, 225, 1)',
                // marginLeft: 20,

                borderRadius: 20,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  alignSelf: 'center',
                  backgroundColor: 'rgba(96, 0, 187, 1)',
                  borderRadius: 50,
                  bottom: 55,
                  borderBottomColor: 'rgba(255, 255, 255, 1)',
                  left: 55,
                }}>
                <Image
                  source={require('./images/Document-6-icon.png')}
                  style={{marginLeft: 10, marginTop: 10}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 30,
                  color: 'rgba(96, 0, 187, 1)',
                  fontSize: 17,
                  fontWeight: '700',
                  left: 1,
                }}>
                Documents - 7
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home4')}>
            <View
              style={{
                width: 160,
                height: 70,
                backgroundColor: 'rgba(241, 236, 225, 1)',
                marginLeft: 10,

                borderRadius: 20,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  alignSelf: 'center',
                  backgroundColor: 'rgba(96, 0, 187, 1)',
                  borderRadius: 50,
                  bottom: 55,
                  borderBottomColor: 'rgba(255, 255, 255, 1)',
                  left: 55,
                }}>
                <Image
                  source={require('./images/chaye-icon.png')}
                  style={{marginLeft: 10, marginTop: 10}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 30,
                  color: 'rgba(96, 0, 187, 1)',
                  fontSize: 17,
                  fontWeight: '700',
                  left: 1,
                }}>
                Documents - 8
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* // */}
        <View style={{flexDirection: 'row', marginTop: 35}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home4')}>
            <View
              style={{
                width: 160,
                height: 70,
                backgroundColor: 'rgba(241, 236, 225, 1)',
                // marginLeft: 20,

                borderRadius: 20,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  alignSelf: 'center',
                  backgroundColor: 'rgba(96, 0, 187, 1)',
                  borderRadius: 50,
                  bottom: 55,
                  borderBottomColor: 'rgba(255, 255, 255, 1)',
                  left: 55,
                }}>
                <Image
                  source={require('./images/document-4-icon.png')}
                  style={{marginLeft: 10, marginTop: 10}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 30,
                  color: 'rgba(96, 0, 187, 1)',
                  fontSize: 17,
                  fontWeight: '700',
                  left: 1,
                }}>
                Documents - 9
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home4')}>
            <View
              style={{
                width: 160,
                height: 70,
                backgroundColor: 'rgba(241, 236, 225, 1)',
                marginLeft: 10,

                borderRadius: 20,
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  alignSelf: 'center',
                  backgroundColor: 'rgba(96, 0, 187, 1)',
                  borderRadius: 50,
                  bottom: 55,
                  borderBottomColor: 'rgba(255, 255, 255, 1)',
                  left: 55,
                }}>
                <Image
                  source={require('./images/Doc-icon.png')}
                  style={{marginLeft: 10, marginTop: 10}}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 30,
                  color: 'rgba(96, 0, 187, 1)',
                  fontSize: 17,
                  fontWeight: '700',
                  left: 1,
                }}>
                Documents - 10
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* // */}
      </View>

      {/* // */}
      <View
        style={{
          backgroundColor: 'rgba(45, 32, 57, 1)',
          width: 360,
          height: 80,
          flexDirection: 'row',
          position: 'static',
          marginTop: 60,
          
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

          <TouchableOpacity onPress={() => navigation.navigate('Notifiction')}>
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
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    //  borderRadius:50
    position: 'relative',
  },
  image: {
    width: 260, // Set the width of your image
    height: 120, // Set the height of your image
    marginRight: 5, // Space between the images
    borderRadius: 20, // Optional: to make images rounded
    marginTop: 20,
    // borderRadius:30
    position: 'relative',
  },
});
export default DocumentList;
