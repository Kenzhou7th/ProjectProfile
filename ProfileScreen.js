import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install this package

const ProfileScreen = ({ navigation }) => {
  const navigateToManageProfile = () => {
    navigation.navigate('ManageProfile');
  };

  const navigateToNotifications = () => {
    navigation.navigate('Notifications');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/wallpaper.jpg')} // Add your cover photo here
        style={styles.coverPhoto}
      />
      <Image
        source={require('./src/assets/profilephoto.jpg')}
        style={styles.profilePicture}
      />
      <Text style={styles.name}>Mark Kenneth Barrete-Caumban</Text>

      <TouchableOpacity style={styles.manageProfileContainer} onPress={navigateToManageProfile}>
        <Ionicons name="person-circle-outline" size={49} color="black" />
        <Text style={styles.manageProfileText}>Manage Profile</Text>
        <Ionicons name="chevron-forward" size={24} color="#007BFF" />
      </TouchableOpacity>

      <Text style={styles.settingsText}>Settings</Text>

      <TouchableOpacity style={styles.notificationContainer} onPress={navigateToNotifications}>
        <Ionicons name="settings" size={49} color="black" />
        <Text style={styles.notificationText}>Notifications</Text>
        <Ionicons name="chevron-forward" size={24} color="#007BFF" />
      </TouchableOpacity>

      <View style={styles.darkModeContainer}>
        <Ionicons name="moon" size={49} color="black" />
        <Text style={styles.darkModeText}>Dark Mode</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
  coverPhoto: {
    width: 500,
    height: 300,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 190, // Adjust to position lower
    marginBottom: 20,
    zIndex: 1, // Ensure it appears above the cover photo
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  manageProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  manageProfileText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  settingsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  notificationText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  darkModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
  },
  darkModeText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5,
    width: '49%',
    alignItems: 'center',
    marginTop: 'auto',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
