import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
          <Text style={styles.regularText}>
              My name is <Text style={styles.boldText}>Godfred Pinto</Text>
          </Text>
          <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
    regularText: {
        fontSize: 24,
    },
    boldText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
});
