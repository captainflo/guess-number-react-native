import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={require('../assets/original.png')}
          source={{
            uri:
              'https://bbts1.azureedge.net/images/p/full/2019/06/be70c34c-dd08-40bf-931c-71eb35ab3e29.jpg',
          }}
          fadeDuration={1000}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resulText}>
          Your phone needeed{' '}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the Number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resulText: {
    textAlign: 'center',
    fontSize: 20,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 40,
  },
});

export default GameOverScreen;
