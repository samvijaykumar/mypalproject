import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Splash from './Splash';

import Login from './Login';
import Home from './Home';
import Home2 from './Home2';
// import HomeScreen from './Home';
import App2 from './App2';
import CalanderScreen from './CalanderScreen';
import ProfilScreen from './ProfilScreen'; // Import your screen
import EvantScreen from './EvantScreen';

import EditProfile from './EditProfile';
import Home3 from './Home3';
import Invoice from './Invoice';
import Notification from './Notifiction';
import Notification2 from './Notifiction2';
import Home4 from './Home4';
import SettingScreen from './SettingScreen';
import ChatScreen from './ChatScreen';
import Advertisement from './Advertisement'; // done
import DocumentList from './Document List';
import AddPet from './AddPet'; // done
import AboutEvent from './AboutEvent'; // done
import ShowDocumet from './ShowDocumet';
import PetList from './PetList';
import CreateAccount from './CreateAccount';
import ResetPasswordScreen from './ResetPasswordScreen';
import Demo2 from './Demo2';
import HealthTracker from './HealthTracker';
import OtpScreen from './images/OtpScreen';
import HealthTracker2 from './HealthTracker2';
import YearlyPlan from './YearlyPlan';
import Demo from './Demo';

import Spalsh from './Spalsh';

// import Home2 from './Home2';
// const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Spalsh "
          component={Spalsh}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="App2"
          component={App2}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home2"
          component={Home2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CalanderScreen"
          component={CalanderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EvantScreen"
          component={EvantScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home3"
          component={Home3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Invoice"
          component={Invoice}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notificion"
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Demo"
          component={Demo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Demo2"
          component={Demo2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home4"
          component={Home4}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Advertisement"
          component={Advertisement}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DocumentList"
          component={DocumentList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddPet"
          component={AddPet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutEvent"
          component={AboutEvent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShowDocumet"
          component={ShowDocumet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PetList"
          component={PetList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="HealthTracker"
          component={HealthTracker}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HealthTracker2"
          component={HealthTracker2}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="YearlyPlan"
          component={YearlyPlan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfilScreen"
          component={ProfilScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notificion2"
          component={Notification2}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
