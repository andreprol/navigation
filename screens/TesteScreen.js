import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
 

import { MonoText } from '../components/StyledText';

export default class TesteScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <MonoText> TesteScreen </MonoText>
      </View>
    )
  }
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
  
});
