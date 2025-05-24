import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import UploadRecipeScreen from '../screens/UploadRecipeScreen';
import RecipeFeedScreen from '../screens/RecipeFeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditRecipeScreen from '../screens/EditRecipeScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import ChangeUsernameScreen from '../screens/ChangeUsernameScreen';
import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { token, loading } = useContext(AuthContext);

  if (loading) return null; // Optionally a splash screen

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="UploadRecipe" component={UploadRecipeScreen} />
            <Stack.Screen name="RecipeFeed" component={RecipeFeedScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EditRecipe" component={EditRecipeScreen} />
            <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
            <Stack.Screen name="ChangeUsername" component={ChangeUsernameScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
