import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import Payment from '../screens/Payment';

const Tab = createBottomTabNavigator();


const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'account-circle';
            } else if (route.name === 'Inbox') {
              iconName = 'inbox';
            } else if (route.name === 'Order') {
              iconName = 'shopping-cart';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { height: 60 },
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        
        {/* Use CartStack for Cart and Payment */}
        <Tab.Screen name="Order" component={Cart} options={{ headerShown: false }} />
        <Tab.Screen
          name="Inbox"
          component={() => null}
          options={{
            tabBarButton: (props) => (
              <TouchableOpacity
                style={styles.customButton}
                onPress={() => console.log('History Pressed')}
              >
                <Icon name="inbox" size={25} color={props.focused ? '#007AFF' : 'gray'} />
                <Text style={styles.buttonText}>Inbox</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  customButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Router;