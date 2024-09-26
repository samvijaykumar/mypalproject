import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';

const Home3 = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        backgroundColor: 'rgba(255, 255, 255, 1)',
      }}>
      <View
        style={{
          width: '',
          height: 50,
          flexDirection: 'row',
          // backgroundColor: 'green',
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'white',
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 50,
          }}>
          <TouchableOpacity   onPress={() => navigation.navigate('Home2')}>
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
          My Love
        </Text>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'white',
            marginLeft: 82,
            marginTop: 18,
            borderRadius: 20,
            fontWeight:'400'
          }}>
          <TouchableOpacity>
            <Image
              source={require('./images/pencil-icon.png')}
              style={{marginTop: 8, marginLeft: 8}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: 318,
          height: 98,
          backgroundColor: 'rgba(247, 242, 251, 1)',
          marginLeft: 20,
          marginTop: 50,
          // borderWidth: 5,
          borderRadius: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('./images/47524ab148bb55a458ba55977bf67e6d.png')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              marginLeft: 20,
              marginTop: 18,
              position: 'relative',
              flexDirection: 'row',
            }}
          />
          <Text
            style={{
              paddingTop: 40,
              paddingLeft: 20,
              fontSize: 12,
              fontWeight: '500',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            Press to Mark As Lost Pet
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: 'rgba(247, 242, 251, 1)',
              position: 'absolute',
              marginLeft: 60,
              marginTop: 40,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: 'rgba(255, 255, 255, 1)',
              flexDirection: 'row',
            }}>
            <TouchableOpacity>
              <Image
                source={require('./images/megaphone-1.png')}
                style={{marginLeft: 7, marginTop: 7, position: 'absolute'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 800,
          marginTop: 20,
          marginLeft: 20,
          color: 'rgba(45, 32, 57, 1)',
        }}>
        Pet care
      </Text>
      <View
        style={{
          width: 160,
          height: 80,
          backgroundColor: 'rgba(241, 236, 225, 1)',
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
              paddingTop: 30,
              color: 'rgba(96, 0, 187, 1)',
              fontSize: 17,
              fontWeight: '700',
              left: 6,
            }}>
            Feeding Guidelines
          </Text>
        </View>
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
            source={require('./images/instrection-imag-1.png')}
            style={{marginLeft: 10, marginTop: 10}}
          />
        </View>
        <TouchableOpacity  onPress={() => navigation.navigate('Invoice')}>
        <View 
          style={{
            width: 160,
            height: 80,
            backgroundColor: 'rgba(241, 236, 225, 1)',
            marginLeft: 20,
            // marginTop: 10,
            position: 'relative',
            borderRadius: 20,
            // flexDirection: 'row',
            
          }}>
          

          <Text
            style={{
              textAlign: 'center',
              paddingTop: 30,
              color: 'rgba(96, 0, 187, 1)',
              fontSize: 17,
              fontWeight: '700',
              //  marginLeft:10
              paddingLeft: 5,
            }}>
            Documents
          </Text>
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
        </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 160,
          height: 80,
          backgroundColor: 'rgba(241, 236, 225, 1)',
          marginLeft: 20,
          // marginTop: 10,
          position: 'relative',
          borderRadius: 20,
          flexDirection: 'row',
          marginTop: 40,
        }}>
        <View style={{width: 150}}>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: 30,
              color: 'rgba(96, 0, 187, 1)',
              fontSize: 17,
              fontWeight: '700',
              left: 6,
            }}>
            Yearly Plan
          </Text>
        </View>
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
            source={require('./images/node-pade.png')}
            style={{marginLeft: 10, marginTop: 10}}
          />
        </View>
        <View
          style={{
            width: 160,
            height: 80,
            backgroundColor: 'rgba(241, 236, 225, 1)',
            marginLeft: 20,
            // marginTop: 10,
            position: 'relative',
            borderRadius: 20,
            // flexDirection: 'row',
          }}>
          <Text
            style={{
              textAlign: 'center',
              paddingTop: 30,
              color: 'rgba(96, 0, 187, 1)',
              fontSize: 17,
              fontWeight: '700',
              left: 6,
            }}>
            Health Tracker
          </Text>
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
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={require('./images/dog-cat-imag.png')}
            style={styles.image}
          />
          <Image
            source={require('./images/dog-cat-imag.png')}
            style={styles.image}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 19.41,
              position: 'absolute',
              marginTop: 40,
              marginLeft: 375,
              width: 72,
            }}>
            Type of
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 19.41,
              width: 100,
              position: 'absolute',
              marginTop: 62,
              marginLeft: 360,
            }}>
            Pet Identity
          </Text>
        </View>
        {/* <View
        style={{
          position: 'absolute',
          marginTop: 70,
          marginLeft: 100,
          width: 72,
          color: 'white',
          
        }}> */}
        <Text
          style={{
            color: 'white',
            fontSize: 19.41,
            position: 'absolute',
            marginTop: 40,
            marginLeft: 110,
            width: 72,
          }}>
          Type of
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19.41,
            width: 100,
            position: 'absolute',
            marginTop: 62,
            marginLeft: 95,
          }}>
          Pet Identity
        </Text>
        {/* </View> */}
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

      <TouchableOpacity
       onPress={() => navigation.navigate('Notificion2')}
      >
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
export default Home3;
