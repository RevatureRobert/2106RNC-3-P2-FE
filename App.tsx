import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import useColorScheme from './src/components/hooks/useColorScheme';
import useCachedResources from './src/components/hooks/useCachedResources';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/components/navigation';
import { StatusBar } from 'expo-status-bar';

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

