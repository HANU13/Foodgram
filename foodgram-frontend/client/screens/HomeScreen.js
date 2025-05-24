import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FoodGram!</Text>
      <Button
        title="View Recipe Feed"
        onPress={() => navigation.navigate('RecipeFeed')}
      />
      <Button
        title="Upload Recipe"
        onPress={() => navigation.navigate('UploadRecipe')}
      />
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default HomeScreen;
