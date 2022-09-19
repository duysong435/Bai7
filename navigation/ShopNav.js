import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreens from '../screens/HomeScreens';
import ProductsScreens from '../screens/ProductsScreens';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Wellcome" component={HomeScreens} />
      <Stack.Screen name="Product" component={ProductsScreens} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <StackNavigator></StackNavigator>
        </NavigationContainer>
    )
}

export default MainNavigator;