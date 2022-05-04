/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type {Node} from 'react';
import Flyy from 'react-native-flyy';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  useEffect(() => {
    Flyy.setPackageName("com.theflyy.demo");
    Flyy.initSDK("e60a13ddc96e376bdb77", Flyy.STAGE);
    Flyy.setThemeColor("#CC911D", "#CC911D");
    Flyy.setUser("John");
    Flyy.setUserName("88884444");
  });

  return (
    <View style={styles.main}>
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Enter your name"
        onChangeText={(text) => this.setState({ name: text })}
        keyboardType='default' />

      <TextInput style={styles.input}
        placeholder="Enter your contact number"
        onChangeText={(text) => this.setState({ number: text })}
        keyboardType='number-pad' />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>{
          Flyy.openOffersScreen();
        }
          //this.openOffersScreen()
        }>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  container: {
    height: '100%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    height: 40,
    width: '100%',
    borderRadius: 10,
    borderColor: 'deepskyblue',
    borderWidth: 1,
    padding: 10,
    margin: 25,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: 'deepskyblue',
    textAlign: 'center',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
});

export default App;
