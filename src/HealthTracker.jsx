import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import Svg, {
  Circle,
  G,
  Path,
  Text as SvgText,
  Image as SvgImage,
} from 'react-native-svg';

const HealthTracker = ({navigation}) => {
  const radius = 40; // Outer circle radius
  const center = 50; // Center of the circle
  const innerRadius = 20; // Radius for inner circle
  const [isRotating, setIsRotating] = useState(false); // Rotation state
  const rotateAnim = useRef(new Animated.Value(0)).current; // Rotation value

  // Define the segments
  const segments = [
    {
      color: '#FFB300',
      label: 'Weight',
      value: '24kg',
      startAngle: 0,
      endAngle: 45,
    },
    {
      color: '#4DD0E1',
      label: 'Vacciness',
      value: 'Parvovirus',
      startAngle: 45,
      endAngle: 90,
    },
    {
      color: '#03A9F4',
      label: 'Deworming',
      value: '4.1',
      startAngle: 90,
      endAngle: 135,
    },
    {
      color: '#8E24AA',
      label: 'Blood',
      value: 'DEA 1',
      startAngle: 135,
      endAngle: 180,
    },
    {
      color: '#6DC347',
      label: 'Fecal',
      value: 'vijay',
      startAngle: 180,
      endAngle: 225,
    },
    {
      color: '#FF7043',
      label: 'Urine',
      value: '0.5-1.0',
      startAngle: 225,
      endAngle: 270,
    },
    {
      color: '#FFEE58',
      label: 'Temperature',
      value: '102.5°F',
      startAngle: 270,
      endAngle: 315,
    },
    {
      color: '#1E88E5',
      label: 'Glucose',
      value: '3.3 MMOL/L',
      startAngle: 315,
      endAngle: 360,
    },
  ];

  // Helper function to draw arcs
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0);
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    const d = [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      'L',
      x,
      y,
      'Z',
    ].join(' ');

    return d;
  };

  // Function to start and stop the rotation
  const toggleRotation = () => {
    if (isRotating) {
      Animated.timing(rotateAnim).stop();
      setIsRotating(false);
    } else {
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 4000, // 4 seconds per rotation
          useNativeDriver: true,
        }),
      ).start();
      setIsRotating(true);
    }
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('ProfilScreen')}>
          <Image
            source={require('./images/arrow-button.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Health Tracker</Text>
      </View>

      {/* Circle Container */}
      <TouchableWithoutFeedback onPress={toggleRotation}>
        <Animated.View
          style={{transform: [{rotate: rotation}], marginTop: 100}}>
          <Svg height="375" width="375" viewBox="0 0 100 100">
            <G>
              {segments.map((segment, index) => (
                <Path
                  key={index}
                  d={describeArc(
                    center,
                    center,
                    radius,
                    segment.startAngle,
                    segment.endAngle,
                  )}
                  fill={segment.color}
                />
              ))}
              <Circle cx="50" cy="50" r={innerRadius} fill="#FFFFFF" />
              <SvgText
                x="50"
                y="57"
                fontSize="5"
                fontWeight="bold"
                fill="rgba(0, 113, 166, 1)"
                textAnchor="middle">
                Health Tracker
              </SvgText>
              <G transform="translate(45, 40)">
                <SvgImage
                  href={require('./images/health-icon.png')}
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                />
              </G>
            </G>
          </Svg>
          <View style={{position: 'absolute', marginLeft: 125, marginTop: 70}}>
            <Text style={{fontSize: 12, color: 'rgba(255, 255, 255, 1)'}}>
              Weight
            </Text>
            <Text
              style={{
                fontSize: 9,
                color: 'rgba(255, 255, 255, 1)',
                marginLeft: 7,
              }}>
              24kg
            </Text>
          </View>

          <View style={{marginTop: 125, position: 'absolute', marginLeft: 60}}>
            <Text style={{fontSize: 12, color: 'rgba(255, 255, 255, 1)'}}>
              Glucose
            </Text>
            <Text style={{fontSize: 9, color: 'rgba(255, 255, 255, 1)'}}>
              3.3 mmol/L
            </Text>
          </View>
          {/* // */}
          <View style={{position: 'absolute', marginLeft: 258, marginTop: 142}}>
            <Text style={{fontSize: 12, color: 'rgba(255, 255, 255, 1)'}}>
              dEWORMING
            </Text>
            <Text
              style={{
                fontSize: 9,
                color: 'rgba(255, 255, 255, 1)',
                marginLeft: 30,
              }}>
              4.1
            </Text>
          </View>
          {/* // */}
          <View style={{position: 'absolute', marginLeft: 270, marginTop: 210}}>
            <Text style={{color: 'rgba(255, 255, 255, 1)', fontSize: 12}}>
              bLOOD
            </Text>
            <Text
              style={{
                color: 'rgba(255, 255, 255, 1)',
                fontSize: 9,
                marginLeft: 5,
              }}>
              DEA 1
            </Text>
          </View>
          {/* // */}
          <View style={{marginLeft: 200, marginTop: 70, position: 'absolute'}}>
            <Text style={{fontSize: 12, color: 'rgba(255, 255, 255, 1)'}}>
              vACCINESS
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'rgba(255, 255, 255, 1)',
                fontSize: 9,
                marginLeft: 10,
              }}>
              parvovirus
            </Text>
          </View>
          {/* // */}
          <View style={{marginLeft: 215, position: 'absolute', marginTop: 270}}>
            <Text style={{fontSize: 12, color: 'rgba(255, 255, 255, 1)'}}>
              fECAL
            </Text>
            <Text
              style={{
                fontSize: 9,
                color: 'rgba(255, 255, 255, 1)',
                marginLeft: 5,
              }}>
              DEA 1
            </Text>
          </View>
          {/* // */}
          <View style={{marginLeft: 130, marginTop: 275, position: 'absolute'}}>
            <Text style={{fontSize: 12, color: 'rgba(255, 255, 255, 1)'}}>
              uRINE
            </Text>
            <Text
              style={{
                fontSize: 9,
                color: 'rgba(255, 255, 255, 1)',
                marginLeft: 5,
              }}>
              0.5-1.0
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(205, 194, 171, 1)',
              borderRadius: 50,
              marginLeft: 273,
              position: 'absolute',
              marginTop: 270,
            }}></View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(226, 97, 184, 1)',
              borderRadius: 50,
              marginLeft: 270,
              position: 'absolute',
              marginTop: 265,
            }}>
            <Text
              style={{
                paddingLeft: 9,
                paddingTop: 6,
                fontSize: 18,
                color: 'rgba(255, 255, 255, 1)',
              }}>
              04
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(205, 194, 171, 1)',
              borderRadius: 50,
              marginLeft: 63,
              position: 'absolute',
              marginTop: 68,
            }}></View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(0, 105, 154, 1)',
              borderRadius: 50,
              marginLeft: 60,
              position: 'absolute',
              marginTop: 65,
            }}>
            <Text
              style={{
                paddingLeft: 9,
                paddingTop: 6,
                fontSize: 18,
                color: 'rgba(255, 255, 255, 1)',
              }}>
              08
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(205, 194, 171, 1)',
              borderRadius: 50,
              marginLeft: 22,
              position: 'absolute',
              marginTop: 175,
            }}></View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(255, 175, 45, 1)',
              borderRadius: 50,
              marginLeft: 20,
              position: 'absolute',
              marginTop: 171,
            }}>
            <Text
              style={{
                paddingLeft: 9,
                paddingTop: 6,
                fontSize: 18,
                color: 'rgba(255, 255, 255, 1)',
              }}>
              07
            </Text>
          </View>
          {/* // */}
          <View style={{marginTop: 225, position: 'absolute', marginLeft: 50}}>
            <Text style={{fontSize: 11, color: 'rgba(255, 255, 255, 1)'}}>
              tEMPERATURE
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: 'rgba(255, 255, 255, 1)',
                marginLeft: 15,
              }}>
              102.5°F
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(205, 194, 171, 1)',
              borderRadius: 50,
              marginLeft: 72,
              position: 'absolute',
              marginTop: 275,
            }}></View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(255, 72, 99, 1)',
              borderRadius: 50,
              marginLeft: 70,
              position: 'absolute',
              marginTop: 271,
            }}>
            <Text
              style={{
                paddingLeft: 9,
                paddingTop: 6,
                fontSize: 18,
                color: 'rgba(255, 255, 255, 1)',
              }}>
              06
            </Text>
          </View>
          {/* /// */}
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(205, 194, 171, 1)',
              borderRadius: 50,
              marginLeft: 172,
              position: 'absolute',
              marginTop: 309,
            }}></View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(140, 212, 102, 1)',
              borderRadius: 50,
              marginLeft: 170,
              position: 'absolute',
              marginTop: 305,
            }}>
            <Text
              style={{
                paddingLeft: 9,
                paddingTop: 6,
                fontSize: 18,
                color: 'rgba(255, 255, 255, 1)',
              }}>
              05
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(205, 194, 171, 1)',
              borderRadius: 50,
              marginLeft: 317,
              position: 'absolute',
              marginTop: 166,
            }}></View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(52, 135, 179, 1)',
              borderRadius: 50,
              marginLeft: 315,
              position: 'absolute',
              marginTop: 162,
            }}>
            <Text
              style={{
                paddingLeft: 9,
                paddingTop: 6,
                fontSize: 18,
                color: 'rgba(255, 255, 255, 1)',
              }}>
              03
            </Text>
          </View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(205, 194, 171, 1)',
              borderRadius: 50,
              marginLeft: 273,
              position: 'absolute',
              marginTop: 62,
            }}></View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(0, 188, 202, 1)',
              borderRadius: 50,
              marginLeft: 270,
              position: 'absolute',
              marginTop: 58,
            }}>
            <Text
              style={{
                paddingLeft: 9,
                paddingTop: 6,
                fontSize: 18,
                color: 'rgba(255, 255, 255, 1)',
              }}>
              02
            </Text>
          </View>
          {/* // */}
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(205, 194, 171, 1)',
              borderRadius: 50,
              marginLeft: 167,
              position: 'absolute',
              marginTop: 21,
            }}></View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'rgba(255, 209, 0, 1)',
              borderRadius: 50,
              marginLeft: 165,
              position: 'absolute',
              marginTop: 18,
            }}>
            <Text
              style={{
                paddingLeft: 9,
                paddingTop: 6,
                fontSize: 18,
                color: 'rgba(255, 255, 255, 1)',
              }}>
              01
            </Text>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
          <Image
            source={require('./images/home-icon-white.png')}
            style={styles.navIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
        //  onPress={() => navigation.navigate('Login')}
        >
          <Image
            source={require('./images/bouttom-icon-headphone.png')}
            style={[styles.navIcon, styles.navSpacing]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifiction2')}> 
          <Image
            source={require('./images/bottom-icon-ball.png')}
            style={[styles.navIcon, styles.navSpacing]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(241, 236, 225, 1)',
    // justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // Make the header take the full width of the screen
    paddingHorizontal: 20, // Padding to the left and right
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 80,
    position: 'absolute', // Position it at the top
    top: 0,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(241, 236, 225, 1)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Position it absolutely within the header
    left: 20, // Align the back button to the left
  },
  backIcon: {
    // width: 25,
    // height: 25,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    position: 'absolute',
    left: '55%', // Align the title to the center
    transform: [{translateX: -50}], // Offset to perfectly center it
  },
  bottomNavigation: {
    backgroundColor: 'rgba(45, 32, 57, 1)',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  navIcon: {
    // width: 25,
    // height: 25,
  },
  navSpacing: {
    marginLeft: 40,
  },
});

export default HealthTracker;
