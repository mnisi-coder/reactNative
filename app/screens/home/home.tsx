import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const HomeScreen = () => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home</Text>
      <Text style={styles.welcome}>Welcome back, {user?.username}!</Text>
      <Text style={styles.message}>
        This is the home screen. You can navigate to your dashboard, profile, or settings from the bottom tab.
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 18,
    marginBottom: 15,
  },
  message: {
    fontSize: 16,
    color: '#555',
  },
});
