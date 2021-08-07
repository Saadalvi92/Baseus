import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Image, Text} from 'react-native';
const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 3000);
  }, []);
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCEF02',
      }}>
      <Image
        style={{height: '50%', width: '50%'}}
        source={require('./logo.jpeg')}
      />
    </View>
  );
};
const HomeScreen = props => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
      }}>
      <Text>This is the Home Screen</Text>
    </View>
  );
};

function App(props) {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
