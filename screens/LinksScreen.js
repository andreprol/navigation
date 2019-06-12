import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';


import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lop:[1,2,3,4,5,6],
    }
    this.gerarnumero=this.gerarnumero.bind(this)
  }

  static navigationOptions = {
    header: null,
  };

  gerarnumero() {
    let x = 6
    
    for (let i = 0; i > x; i++) {
      this.lop[i] = (Math.floor(Math.random() * 10 + 1))
    }

    alert(this.lop)

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Aperte o botão abaixo para gerar o número</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.gerarnumero}>
          <Text>Gerar</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    marginTop: 15,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5
  }
});
