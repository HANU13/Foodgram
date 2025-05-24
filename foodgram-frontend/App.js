import React, { useEffect } from 'react';
import { AuthProvider } from './client/context/AuthContext';
import AppNavigator from './client/navigation/AppNavigator';
import { registerForPushNotificationsAsync } from './client/utils/notifications';

const App = () => {
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;
