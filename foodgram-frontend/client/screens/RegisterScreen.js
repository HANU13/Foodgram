
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import api from '../api/api';
import { AuthContext } from '../context/AuthContext';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleRegister = async () => {
    try {
      const res = await api.post('/auth/register', { username, password });
      login(res.data.token);
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return (
    <View>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Register" onPress={handleRegister} />
      <Text>Already have an account? Login instead.</Text>
    </View>
  );
};

export default RegisterScreen;
```
