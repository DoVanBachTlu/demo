import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {createContext, useState} from 'react';
import {StyleSheet} from 'react-native';
import BottomTab from './src/components/BottomTab/index';
import PostScreen from './src/screens/post';
import {navigationRef} from './src/rootNavigation';
import {Provider} from 'react-redux';
import {store, appPersist} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createStackNavigator();
export const UserContext = createContext();

const App = () => {
  const [exampleContext, setExampleContext] = useState('aaaa=>');
  return (
    <UserContext.Provider value={exampleContext}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={appPersist}>
          <NavigationContainer
            ref={navigationRef}
            // initialRouteName="LoginScreen"
          >
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              {/* <Stack.Screen
              name={'LoginScreen'}
              component={LoginScreen}
            /> */}
              <Stack.Screen name={'HomeScreen'} children={BottomTab} />
              <Stack.Screen name={'PostScreen'} component={PostScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
