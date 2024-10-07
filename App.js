import React from 'react';
import { SafeAreaView } from 'react-native';
import ProfileScreen from './ProfileScreen'; // Adjust the path if necessary

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileScreen />
    </SafeAreaView>
  );
};

export default App;
