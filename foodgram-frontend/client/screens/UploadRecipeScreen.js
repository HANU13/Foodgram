
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import api from '../api/api';

const UploadRecipeScreen = () => {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null);

  const pickVideo = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: 'video/*' });
      if (result.type === 'success') setVideo(result);
    } catch (err) {
      console.error('Video picking failed:', err);
    }
  };

  const handleUpload = async () => {
    if (!video || !title) return Alert.alert('Both title and video are required.');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('video', {
      uri: video.uri,
      type: 'video/mp4',
      name: 'upload.mp4',
    });

    try {
      await api.post('/recipes', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      Alert.alert('Upload successful!');
    } catch (err) {
      console.error('Upload failed:', err);
      Alert.alert('Upload failed');
    }
  };

  return (
    <View>
      <TextInput placeholder="Recipe Title" value={title} onChangeText={setTitle} />
      <Button title="Pick Video" onPress={pickVideo} />
      {video && <Text>Selected: {video.name}</Text>}
      <Button title="Upload" onPress={handleUpload} />
    </View>
  );
};

export default UploadRecipeScreen;
```
