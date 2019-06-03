import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../auth/LoginScreen';
import RecuperarSenha from '../screens/RecuperarSenha';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Login: LoginScreen,
  Recuperar:RecuperarSenha
},
{
  initialRouteName: 'Login'
}


));