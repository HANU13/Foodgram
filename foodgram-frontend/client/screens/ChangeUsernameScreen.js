import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import API from '../api/api';
import { AuthContext } from '../context/AuthContext';

const ChangeUsernameScreen = () => {
  const [newUsername, setNewUsername] = useState('');
  const { token } = useContext(AuthContext);

  const handleChangeUsername = async () => {
    try {
      const res = await API.post(
        '/users/change-username',
        { username: newUsername },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Alert.alert('Success', res.data.message);
      setNewUsername('');
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || 'Failed to change username');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>New Username</Text>
      <TextInput
        style={styles.input}
        value={newUsername}
        onChangeText={setNewUsername}
      />
      <Button title="Change Username" onPress={handleChangeUsername} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 16, marginBottom: 5 },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default ChangeUsernameScreen;
