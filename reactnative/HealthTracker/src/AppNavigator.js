import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/Home';
import HealthIntro from './pages/HealthIntro/HealthIntro';
import Login from './pages/login/Login';
import Healthhome from './pages/healthhome/Healthhome';
import Calscanner from './pages/calscanner/Calscanner';
import Healthbot from './pages/Healthbot/Healthbot';
import Meals from './pages/meals/Meals';
import MealsDetails from './pages/meals/MealsDetails';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Healthhome" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HealthIntro" component={HealthIntro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Healthhome" component={Healthhome} />
      <Stack.Screen name="Calscanner" component={Calscanner} />
      <Stack.Screen name="Healthbot" component={Healthbot} />
      <Stack.Screen name="Meals" component={Meals} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
