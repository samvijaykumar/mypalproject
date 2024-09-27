import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your text"
        placeholderTextColor="#888" // Customize placeholder color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16, // Font size for the actual input text
  },
});

export default App;
