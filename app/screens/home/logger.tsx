import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface Props {
  navigateTo: (page: string) => void;
}

const logger: React.FC<Props> = ({ navigateTo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📞 Contact Page</Text>
      <Button title="Back to Home" onPress={() => navigateTo('Home')} />
    </View>
  );
};

export default logger;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
