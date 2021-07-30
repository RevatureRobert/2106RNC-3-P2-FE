import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import useColorScheme from './src/components/hooks/useColorScheme';
import useCachedResources from './src/components/hooks/useCachedResources';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/components/navigation';
import { StatusBar } from 'expo-status-bar';
import cognitoConfig from './src/cognitoConfig.json';
import Amplify from 'aws-amplify';
import { config } from 'yargs';

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: cognitoConfig.cognito.REGION,
    userPoolId: cognitoConfig.cognito.USER_POOL_ID,
    userPoolWebClientId: cognitoConfig.cognito.APP_CLIENT_ID
  }
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </Provider>
    </SafeAreaProvider>
    );
  }
}

