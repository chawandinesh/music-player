/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const [isTrackPlayerInit, setIsTrackPlayerInit] = React.useState(false);
  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: '1',
      url:
        'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
      type: 'default',
      title: 'My Title',
      album: 'My Album',
      artist: 'Rohan Bhatia',
      artwork: 'https://picsum.photos/100',
    });
    return true;
  };
  React.useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
    };
   // startPlayer();
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView></SafeAreaView>
      <Text>lsjlsjfsl</Text>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
