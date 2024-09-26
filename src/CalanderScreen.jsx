import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {Calendar} from 'react-native-calendars';

const App2 = ({navigation}) => {
  const DATA = [
    {id: '1'},
    {id: '2'},
    // Add more items as needed
  ];

  const [currentDate, setCurrentDate] = useState('');

  const handleDayPress = day => {
    setCurrentDate(day.dateString);
  };

  const renderArrow = direction => {
    return (
      <TouchableOpacity style={styles.arrowButton}>
        <Text style={styles.arrowText}>{direction === 'left' ? '<' : '>'}</Text>
      </TouchableOpacity>
    );
  };

  const renderHeader = date => {
    const header = date.toString('d MMMM yyyy');
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>{header}</Text>
        </View>
      </View>
    );
  };
  const renderItem = ({item}) => (
    <View style={item}>
      <Text>{item.title}</Text>

      <View>
        <View>
          <View
            style={{
              width: 290,
              height: 90,
              backgroundColor: 'rgba(247, 242, 251, 1)',
              borderRadius: 20,
              marginLeft: 20,
              borderColor: 'rgba(96, 0, 187, 1)',
              borderWidth: 1,
              display: 'flex',
            }}>
            <View
              style={{
                width: 40,
                height: 30,
                marginTop: 20,
                marginLeft: 15,
                borderRadius: 20,
                flexDirection: 'row',
                display: 'flex',
              }}>
              <View></View>
              <View>
                <Text
                  style={{
                    // marginLeft: 4,
                    width: 130,
                    // height:50,
                    color: 'rgba(45, 32, 57, 1)',
                  }}>
                  6 May 2023 at 13:22
                </Text>
                <View
                  style={{
                    // marginLeft: 2,
                    height: 27,
                    width: 155,
                    marginTop: 10,
                    // fontSize: 30,
                    // fontWeight: 'bold',
                    color: 'rgba(45, 32, 57, 1)',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'rgba(45, 32, 57, 1)',
                    }}>
                    Parasite Treatment
                  </Text>
                </View>
              </View>
              <Text style={{width: 70}}>Completed</Text>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: 'rgba(96, 0, 187, 1)',
                  marginLeft: 5,
                  borderRadius: 50,
                }}>
                <Image
                  source={require('./images/right-logo.png')}
                  style={{
                    marginLeft: 4.5,
                    marginTop: 5.5,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.headerContainer}></View>
      </View>

      <View style={{marginTop: 10, marginBottom: 20}}>
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: 'rgba(247, 242, 251, 1)',
            marginLeft: 20,
            marginTop: 10,
            borderRadius: 50,
            flexDirection: 'row',
          }}>
          <View style={{width: 140}}>
            <TouchableOpacity onPress={() => navigation.navigate('App2')}>
              <Image
                source={require('./images/arrow-button.png')}
                style={{marginTop: 7, marginLeft: 7}}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: 60, flexDirection: 'row'}}>
            <Text>Calendar</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EvantScreen')}>
              <View
                style={{
                  marginLeft: 99,
                  width: 30,
                  height: 30,
                  backgroundColor: 'rgba(247, 242, 251, 1)',
                  borderRadius: 50,
                }}>
                <Image
                  source={require('./images/down-icon.png')}
                  style={{marginTop: 7, marginLeft: 7}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
     
      <Calendar
        headerStyle={styles.headerContainer}
        current={currentDate}
        onDayPress={handleDayPress}
        monthFormat={'d MMMM yyyy'}
        renderArrow={renderArrow}
        renderHeader={renderHeader}
        markedDates={{
          [currentDate]: {selected: true, selectedColor: 'purple'},
        }}
        
        theme={{
          calendarBackground: '#ffffff',
          textSectionTitleColor: 'white', // Header days color (Sun, Mon, etc.)
          dayTextColor: 'black', // Day numbers color
          todayTextColor: 'purple', // Color for today's date
          selectedDayBackgroundColor: 'purple',
          selectedDayTextColor: 'white',
          arrowColor: 'white', // Color for arrows
          monthTextColor: 'white', // Month header text color
        }}
      />
       <View
        style={{
          position: 'absolute',
          width: 350,
          height: 30,
          backgroundColor: 'white',
          marginLeft: 5,
          marginTop: 127,
          flexDirection:'row',
          justifyContent:'space-around'
        }}>
        <Text style={{paddingTop:7}}>Mon</Text>
        <Text style={{paddingTop:7}}>Tue</Text>
        <Text style={{paddingTop:7}}>Wed</Text>
        <Text style={{paddingTop:7}}>Thu</Text>
        <Text style={{paddingTop:7}}>Fri</Text>
        <Text style={{paddingTop:7}}>Sat</Text>
        <Text style={{paddingTop:7}}>Sun</Text>
       

      </View>
      <ScrollView>
        <View>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 18,
              color: 'rgba(45, 32, 57, 1)',
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Event of this day
          </Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
          // marginBottom: 25,
          marginTop: 30,
        }}
        onPress={() => navigation.navigate('EvantScreen')}>
        <Text style={{color: '#fff', fontSize: 16}}> Get access</Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: 'rgba(45, 32, 57, 1)',
          width: 360,
          height: 80,
          flexDirection: 'row',
          marginTop: 70,
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
    flex: 1,
  },
  arrowButton: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 50,
    width: 20,
    paddingLeft: 5,
  },
  arrowText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerContainer: {
    backgroundColor: 'rgba(45, 32, 57, 1)',
  
  },
});

export default App2;
