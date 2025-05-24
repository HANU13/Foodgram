import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const RecipeCard = ({ recipe, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: recipe.imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text numberOfLines={2} style={styles.description}>{recipe.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  image: {
    height: 180,
    width: '100%',
  },
  info: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    marginTop: 5,
    color: '#555',
  },
});

export default RecipeCard;
