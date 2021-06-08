import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/context/authContext/AuthContext';
import UserProvider from './src/context/userContext/UserContext';
import { Navigation } from './src/router/Navigation';


const App = () =>{
  return (
    <NavigationContainer>
      <AuthProvider>
        <UserProvider>
          <Navigation/>
        </UserProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

 
export default App;
