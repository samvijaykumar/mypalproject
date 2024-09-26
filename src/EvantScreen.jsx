import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const EvantScreen = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('option1');

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 360,
          height: 100,
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            marginTop: 30,
            marginLeft: 20,
            backgroundColor: 'rgba(247, 242, 251, 1)',
            borderRadius: 50,
            flexDirection: 'row',
          }}>
          <TouchableOpacity   onPress={() => navigation.navigate('App2')}>
            <Image
              source={require('./images/arrow-button.png')}
              style={{marginTop: 10, marginLeft: 11}}
            />
          </TouchableOpacity>
          <View style={{width: 250}}>
            <Text
              style={{
                marginLeft: 100,
                color: 'rgba(45, 32, 57, 1)',
                fontWeight: '400',
                fontSize: 18,
                paddingTop:5
              }}>
              Add Event
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.label}>Event</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={itemValue => setSelectedValue(itemValue)}>
          <Picker.Item label="Select Your Event" value="Select Your Event" />
          <Picker.Item label="hello" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
      </View>
      <View style={{}}>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 20,
            color: 'rgba(45, 32, 57, 1)',
            fontWeight: '700',
            fontSize: 18,
          }}>
          Event On
        </Text>
        <View style={styles.datePicker}>
          <Text style={styles.dateText}>{date.toDateString()}</Text>
          {/* <Icon name="calendar" type="font-awesome" /> */}
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Image source={require('./images/calander-icon.png')} />
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <Text
        style={{
          marginTop: 15,
          marginLeft: 20,
          color: 'rgba(45, 32, 57, 1)',
          fontWeight: '700',
          fontSize: 18,
        }}>
        {' '}
        Details
      </Text>
      <TextInput
        style={{
          width: 320,
          height: 82,
          backgroundColor: '#fff',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          marginHorizontal: 20,
          marginTop: 10,
        }}></TextInput>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(96, 0, 187, 1)',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 50,
            // alignItems: 'center',
            // justifyContent: 'center',
            marginHorizontal: 20,
            // marginBottom: 25,
            marginTop: 30,
            width: 155,
            paddingLeft: 55,
          }}
          onPress={() => navigation.navigate('App2')}>
          <Text style={{color: '#fff', fontSize: 16}}> save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(247, 242, 251, 1)',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 50,
          //  alignItems: 'center',
          //   justifyContent: 'center', 
            // marginHorizontal: 10,
            borderWidth: 1,
            marginTop: 30,
            borderColor: 'rgba(96, 0, 187, 1)',
            width: 150,
            paddingLeft: 45,
          }}
          // onPress={() => navigation.navigate('App2')}
          >
          <Text style={{color: 'rgba(96, 0, 187, 1)', fontSize: 16}}>
            {' '}
            cancel
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: 'rgba(45, 32, 57, 1)',
          width: 360,
          height: 80,
          flexDirection: 'row',
          marginTop: 135,
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
    // justifyContent: 'center',
    // paddingHorizontal: 35,
    backgroundColor: '#f5f5f5',
    // marginHorizontal:20,
    backgroundColor: 'rgba(241, 236, 225, 1)',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 50,
    marginLeft: 20,
    color: 'rgba(45, 32, 57, 1)',
    fontWeight: '700',
    fontSize: 18,
  },
  pickerContainer: {
    // borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    marginHorizontal: 20,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20,

    marginTop: 10,
    
    height: 50,
  },
  dateText: {
    fontSize: 15,
    color: '#333',
    paddingLeft: 5,
  },
});

export default EvantScreen;
