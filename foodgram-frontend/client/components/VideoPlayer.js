import React from 'react';
import { Video } from 'expo-av';
import { StyleSheet, View } from 'react-native';

const VideoPlayer = ({ videoUri }) => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUri }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.video}
        useNativeControls
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoPlayer;
