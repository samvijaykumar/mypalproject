import {
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useRef} from 'react';
import {Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native';
const {width, height} = Dimensions.get('window');

// Sample slider items
const sliderData = [
  {id: '1', backgroundColor: 'rgba(255, 255, 255, 1)'},
  {id: '2', backgroundColor: 'rgba(255, 255, 255, 1)'},
  {id: '3', backgroundColor: 'rgba(255, 255, 255, 1)'},
  {id: '4', backgroundColor: 'rgba(255, 255, 255, 1)'},
];
const YearlyPlan = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const renderItem = ({item}) => (
    
      <View
        style={[styles.itemContainer, {backgroundColor: item.backgroundColor}]}>
        <TouchableOpacity onPress={() => navigation.navigate('Home4')}>
        <Text style={styles.itemText}>{item.text}</Text>

        <Text
          style={{
            position: 'absolute',
            top: 10,
            left: 15,
            fontSize: 18,
            color: 'rgba(45, 32, 57, 1)',
            fontWeight: '800',
          }}>
          JANUARY
        </Text>
        <Text
          style={{
            position: 'absolute',
            top: 45,
            left: 15,
            fontSize: 14,
            color: 'rgba(45, 32, 57, 1)',
            fontWeight: '500',
          }}>
          FRESH FOOD
        </Text>
        <Text
          style={{
            position: 'absolute',
            top: 75,
            left: 16,
            fontSize: 10,
            color: 'rgba(45, 32, 57, 1)',
          }}>
          TURKEY
        </Text>
        <Text
          style={{
            position: 'absolute',
            top: 97,
            left: 15,
            fontSize: 14,
            color: 'rgba(45, 32, 57, 1)',
            fontWeight: '500',
          }}>
          VACCINES
        </Text>
        <Text
          style={{
            position: 'absolute',
            top: 120,
            left: 15,
            fontSize: 10,
            color: 'rgba(45, 32, 57, 1)',
            fontWeight: '400',
          }}>
          Lorem Ipsum is simply .
        </Text>

        {/* // */}
        <Text
          style={{
            position: 'absolute',
            top: 45,
            left: 160,
            fontSize: 14,
            color: 'rgba(45, 32, 57, 1)',
            fontWeight: '500',
          }}>
          VET CHECKS
        </Text>
        <Text
          style={{
            position: 'absolute',
            top: 75,
            left: 160,
            fontSize: 10,
            color: 'rgba(45, 32, 57, 1)',
          }}>
          ROUTINE EXAM
        </Text>
        <Text
          style={{
            position: 'absolute',
            top: 97,
            left: 160,
            fontSize: 14,
            color: 'rgba(45, 32, 57, 1)',
            fontWeight: '500',
          }}>
          DEWORMER
        </Text>
        <Text
          style={{
            position: 'absolute',
            top: 120,
            left: 160,
            fontSize: 10,
            color: 'rgba(45, 32, 57, 1)',
            fontWeight: '400',
          }}>
          Lorem Ipsum is simply . .
        </Text>
        </TouchableOpacity>
      </View>
 
  );

  const dotPosition = Animated.divide(scrollX, width);
  return (
    <View style={{backgroundColor: 'rgba(241, 236, 225, 1)', flex: 1}}>
      <View style={{backgroundColor: 'rgba(255, 255, 255, 1)', height: 200}}>
        <View
          style={{
            width: 40,
            height: 40,
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 50,
            backgroundColor: 'rgba(247, 242, 251, 1)',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home2')}>
            <Image
              source={require('./images/arrow-button.png')}
              style={{marginLeft: 10, marginTop: 10}}
            />
          </TouchableOpacity>
          <Text
            style={{
              width: 200,
              marginLeft: 95,
              fontSize: 17,
              fontWeight: '400',
              color: 'rgba(45, 32, 57, 1)',
            }}>
            Yearly Plan
          </Text>
        </View>
        <View
          style={{
            width: 320,
            height: 90,
            marginLeft: 20,
            marginTop: 20,
            backgroundColor: 'rgba(247, 242, 251, 1)',
            borderRadius: 20,
          }}>
          <View>
            <Image
              source={require('./images/47524ab148bb55a458ba55977bf67e6d.png')}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginTop: 15,
                marginLeft: 20,
                borderWidth: 2,
                borderColor: 'rgba(255, 255, 255, 1)',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              marginLeft: 75,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'rgba(45, 32, 57, 1)',
                marginTop: 10,
                marginLeft: 5,
              }}>
              Name :
            </Text>
            <Text
              style={{
                marginTop: 13,
                fontSize: 12,
                fontWeight: '400',
                marginLeft: 2,
                color: 'rgba(45, 32, 57, 1)',
              }}>
              JOEY
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              marginLeft: 80,
              marginTop: 30,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'rgba(45, 32, 57, 1)',
              }}>
              Breed :
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: 'rgba(45, 32, 57, 1)',
                marginLeft: 2,
                marginTop: 4,
              }}>
              JACK RUSSELL
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              marginTop: 50,
              marginLeft: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'rgba(45, 32, 57, 1)',
              }}>
              MC :
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: 'rgba(45, 32, 57, 1)',
                marginLeft: 2,
                marginTop: 4,
              }}>
              900079000435535
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 20,
          fontSize: 18,
          fontWeight: '700',
          color: 'rgba(45, 32, 57, 1)',
        }}>
        Veterinary Check Up &
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 2,
          fontSize: 18,
          fontWeight: '700',
          color: 'rgba(45, 32, 57, 1)',
        }}>
        Food Plan
      </Text>
      {/* // */}
      <View style={styles.container}>
        <FlatList
          style={{}}
          ref={flatListRef}
          data={sliderData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          // pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />

        {/* Dot Indicators */}
        <View style={styles.dotContainer}>
          {sliderData.map((_, i) => {
            const opacity = dotPosition.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.1, 1, 0.1],
              extrapolate: 'clamp',
            });
            const scale = dotPosition.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.8, 1.4, 0.8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={`dot-${i}`}
                style={[styles.dot, {opacity, transform: [{scale}]}]}
              />
            );
          })}
        </View>
      </View>
      {/* // */}
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(96, 0, 187, 1)',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 50, // This makes the button round
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 30,
          marginTop: 10,
          bottom: 100,
          height: 50,
        }}>
        <Text style={{color: '#fff', fontSize: 16}}> Download</Text>
      </TouchableOpacity>
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
              source={require('./images/home-icon-white.png')}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // marginRight: 20,
  },
  itemContainer: {
    width: 280,
    height: height * 0.2,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 20,

    marginHorizontal: 10,
    borderRadius: 20,
  },
  itemText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  dotContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 130,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 5,
    backgroundColor: 'rgba(96, 0, 187, 1)',
    marginHorizontal: 3,
  },
});
export default YearlyPlan;
