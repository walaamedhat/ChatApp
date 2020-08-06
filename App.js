// import Amplify from 'aws-amplify';
import * as React from 'react';
import {  StatusBar, View, Text } from 'react-native';
// import { Provider as StoreProvider } from 'react-redux';

// import AWSConfig from './aws-exports';
import Main from './navigation';
import useCachedResources from './shared/hooks/useCachedResources';
// import store from './shared/stores';
// Amplify.configure(AWSConfig);

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  if (!isLoadingComplete) {
    return <View style={{backgroundColor: 'res'}}><Text>Yes</Text></View>;
  } else {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Main />
      </View>
    );
  }
}
