import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Calendar} from 'react-native-calendars';

const App2 = ({navigation}) => {
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

  return (
    <View>
      <Image
        source={require('./images/blur-imag.png')}
        style={{
          width: 360,
          height: 220,
          opacity: 0.1,
          blurType: 'light',
          blurAmount: 100,
          // margin:50
          backgroundColor: 'rgba(25, 18, 32, 0.5)',
        }}
      />
      <View style={styles.container}>
        <View style={styles.headerContainer}></View>
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
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('CalanderScreen')}>
        <Text style={{color: '#fff', fontSize: 16}}> ACCEPT</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{textAlign: 'center', marginTop: 30, fontWeight: 'bold'}}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    // backgroundColor: 'red',
    // marginTop:10,
  },
  arrowButton: {
    // padding: 5,
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
