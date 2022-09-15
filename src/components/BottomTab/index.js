import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import HomScreen from '../../screens/home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const customeTabOptions = {
  activeTintColor: 'blue',
  style: {
    height: '7%',
  },
  labelStyle: {
    bottom: '100%',
  },
  showLabel: false,
  tabStyle: {
    borderTopWidth: 1,
  },
};

const Test = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text> Test </Text>
    </View>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => {
        // return {
        //   tabBarIcon: ({focused, color, size}) => {
        //     let image;
        //     switch (route.name) {
        //       case 'Home':
        //         image = {uri: 'https://bom.to/o8h1JCsdzh'};
        //         break;
        //       case 'Watch':
        //         image = {uri: 'https://bom.to/plF7CRvamd'};
        //         break;
        //       case 'Profile':
        //         image = {uri: 'https://bom.to/ceUeViMP1W'};
        //         break;
        //       case 'Notification':
        //         image = {uri: 'https://bom.to/K1kqKJM9tP'};
        //         break;
        //       case 'Setting':
        //         image = {uri: 'https://bom.to/Vn3CxwJJwX'};
        //         break;
        //     }
        //   },
        // };
      }}
    >
      <Tab.Screen
        name={'Home'}
        component={HomScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) => (
            <FontAwesome
              name="home"
              size={size}
              style={[
                {borderTopWidth: focused ? 2 : 0},
                {borderTopColor: focused ? 'blue' : 'white'},
                // {tintColor: focused ? 'blue':'white'}
              ]}
            />
          ),
        }}
      />
      <Tab.Screen name={'Watch'} component={Test} />
      <Tab.Screen name={'Profile'} component={Test} />
      <Tab.Screen name={'Notification'} component={Test} />
      <Tab.Screen name={'Setting'} component={Test} />
    </Tab.Navigator>
  );
};

export default BottomTab;
