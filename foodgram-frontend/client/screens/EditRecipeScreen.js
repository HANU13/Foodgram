import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import API from '../api/api';
import { AuthContext } from '../context/AuthContext';

const EditRecipeScreen = ({ route, navigation }) => {
  const { recipeId } = route.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await API.get(`/recipes/${recipeId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTitle(res.data.title);
        setDescription(res.data.description);
      } catch (error) {
        Alert.alert('Error', 'Failed to load recipe');
      }
    };
    fetchRecipe();
  }, [recipeId]);

  const handleSave = async () => {
    try {
      await API.put(
        `/recipes/${recipeId}`,
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Alert.alert('Success', 'Recipe updated');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to update recipe');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        multiline
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 16, marginBottom: 5 },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 40,
  },
});

export default EditRecipeScreen;
