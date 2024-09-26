import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextComponent,
  StyleSheet,
  Switch,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {ViewPagerAndroid} from 'react-native';
const {width, height} = Dimensions.get('window'); // Get device dimensions
const SettingScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{backgroundColor: 'rgba(241, 236, 225, 1)', flex: 1}}>
      <View style={{backgroundColor: 'rgba(255, 255, 255, 1)', height: 80}}>
        <View
          style={{
            width: 40,
            height: 40,
            marginTop: 20,
            marginLeft: 20,
            backgroundColor: 'rgba(247, 242, 251, 1)',
            borderRadius: 20,
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            // Android Elevation
            elevation: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
            <Image
              source={require('./images/arrow-button.png')}
              style={{marginTop: 10, marginLeft: 11}}
            />
          </TouchableOpacity>
          <Text
            style={{
              width: 250,
              textAlign: 'center',
              color: 'rgba(45, 32, 57, 1)',
              top: 8,
              fontSize: 17,
              fontWeight: '400',
            }}>
            Settings
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 320,
          height: 60,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 10,
          flexDirection: 'row',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          // Android Elevation
          // elevation: 10,
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            marginLeft: 10,
            marginTop: 8,
            backgroundColor: 'rgba(247, 242, 251, 1)',
            borderRadius: 50,
          }}>
          <Image
            source={require('./images/Blue-ball-icon.png')}
            style={{marginLeft: 11, marginTop: 8}}
          />
        </View>
        <View style={{marginLeft: 10, marginTop: 10}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            Notification
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '400',
              color: 'rgba(45, 32, 57, 1)',
              marginTop: 2,
            }}>
            Allow Us to send you Notifications
          </Text>
        </View>
        <View style={styles.container}>
          <Switch
            trackColor={{false: '#767577', true: 'rgba(247, 242, 251, 1)'}}
            thumbColor={
              isEnabled ? 'rgba(96, 0, 187, 1)' : 'rgba(247, 242, 251, 1)'
            }
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ProfilScreen')}>
        <View
          style={{
            width: 320,
            height: 60,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            // Android Elevation
            // elevation: 0.1,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              marginLeft: 10,
              marginTop: 8,
              backgroundColor: 'rgba(247, 242, 251, 1)',
              borderRadius: 50,
            }}>
            <Image
              source={require('./images/Profile-icon.png')}
              style={{marginLeft: 9, marginTop: 5}}
            />
          </View>

          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontSize: 14,
              fontWeight: '500',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            Profile Setting
          </Text>
        </View>
      </TouchableOpacity>
      {/* // */}
      <TouchableOpacity>
        <View
          style={{
            width: 320,
            height: 60,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            // Android Elevation
            // elevation: 10,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              marginLeft: 10,
              marginTop: 8,
              backgroundColor: 'rgba(247, 242, 251, 1)',
              borderRadius: 50,
            }}>
            <Image
              source={require('./images/I-icon.png')}
              style={{marginLeft: 14, marginTop: 7}}
            />
          </View>
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontSize: 14,
              fontWeight: '500',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            About us
          </Text>
        </View>
      </TouchableOpacity>
      {/* // */}
      <TouchableOpacity>
        <View
          style={{
            width: 320,
            height: 60,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            // Android Elevation
            // elevation: 10,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              marginLeft: 10,
              marginTop: 8,
              backgroundColor: 'rgba(247, 242, 251, 1)',
              borderRadius: 50,
            }}>
            <Image
              source={require('./images/phone-icon.png')}
              style={{marginLeft: 9, marginTop: 8}}
            />
          </View>
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontSize: 14,
              fontWeight: '500',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            Contact us
          </Text>
        </View>
      </TouchableOpacity>
      {/* // */}
      <TouchableOpacity>
        <View
          style={{
            width: 320,
            height: 60,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            // Android Elevation
            // elevation: 10,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              marginLeft: 10,
              marginTop: 8,
              backgroundColor: 'rgba(247, 242, 251, 1)',
              borderRadius: 50,
            }}>
            <Image
              source={require('./images/on-off-swich.png')}
              style={{marginLeft: 9.5, marginTop: 10}}
            />
          </View>
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontSize: 14,
              fontWeight: '500',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            Log Out
          </Text>
        </View>
      </TouchableOpacity>
      {/* // */}
      <TouchableOpacity>
        <View
          style={{
            width: 320,
            height: 60,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            marginHorizontal: 20,
            marginTop: 20,
            borderRadius: 10,
            flexDirection: 'row',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            // Android Elevation
            // elevation: 10,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              marginLeft: 10,
              marginTop: 8,
              backgroundColor: 'rgba(247, 242, 251, 1)',
              borderRadius: 50,
            }}>
            <Image
              source={require('./images/Dilit-icon.png')}
              style={{marginLeft: 9, marginTop: 9}}
            />
          </View>
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontSize: 14,
              fontWeight: '500',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            delete account
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{flex: 1}}>
        {/* ... other UI elements ... */}

        {/* Responsive Footer */}
        <SafeAreaView style={styles.footer}>
          <View style={styles.footerContent}>
            <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
              <Image
                source={require('./images/home-icon-white.png')}
                style={styles.footerIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={require('./images/bouttom-icon-headphone.png')}
                style={[styles.footerIcon, styles.iconSpacing]}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}>
              <Image
                source={require('./images/bottom-icon-ball.png')}
                style={[styles.footerIcon, styles.iconSpacing]}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'rgba(255, 255, 255, 1)',
    position: 'absolute',
    marginLeft: 255,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 50,
  },
  footer: {
    backgroundColor: 'rgba(45, 32, 57, 1)',
    height: height * 0.1, // Responsive height based on screen size
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: width, // Set to device width
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerIcon: {
    width: width * 0.07, // Responsive icon size
    height: width * 0.07,
    // marginLeft:20,
    marginHorizontal: 30,
  },
  iconSpacing: {
    marginHorizontal: width * 0.1,

    // Responsive spacing between icons
  },
});
export default SettingScreen;
