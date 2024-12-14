import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/home';
import SignIn from 'screens/auth/signin';
import SignUp from 'screens/auth/signup';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type RootStackParamList = {
  Signin: undefined;
  Home: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Signin" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Signin" component={SignIn} />
            <Stack.Screen name="Signup" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
