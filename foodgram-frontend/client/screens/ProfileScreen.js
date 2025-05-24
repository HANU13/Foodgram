import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import API from '../api/api';
import { AuthContext } from '../context/AuthContext';

const ProfileScreen = () => {
  const { token, logout } = useContext(AuthContext);
  const [profile, setProfile] = useState({ username: '', email: '', profilePicture: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get('/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (error) {
        Alert.alert('Error', 'Failed to load profile');
      }
    };
    fetchProfile();
  }, []);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access media library is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      base64: false,
    });

    if (!pickerResult.canceled) {
      const formData = new FormData();
      formData.append('profilePicture', {
        uri: pickerResult.assets[0].uri,
        name: 'profile.jpg',
        type: 'image/jpeg',
      });

      try {
        await API.post('/users/profile-picture', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        Alert.alert('Success', 'Profile picture updated');
        setProfile(prev => ({ ...prev, profilePicture: pickerResult.assets[0].uri }));
      } catch (error) {
        Alert.alert('Error', 'Failed to upload profile picture');
      }
    }
  };

  return (
    <View style={styles.container}>
      {profile.profilePicture ? (
        <Image source={{ uri: profile.profile
