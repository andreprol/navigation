import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import firebase from 'firebase'

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      login: '',
      senha: '',
      email: '',
      senha2: ''
    }

    this.cadastrar = this.cadastrar.bind(this);
    this.logar = this.logar.bind(this);
    this.sair=this.sair.bind(this);

  }

  logar() {
    firebase.auth().signInWithEmailAndPassword(
      this.state.login,
      this.state.senha
    ).catch((error) => {
      if (error.code == 'auth/user-not-found') {
        alert('usuário não encontrado')
      } else if (error.code == 'auth/wrong-password') {
        alert('Senha incorreta')
      }

    })

  }

  sair(){
    firebase.auth().signOut();
    alert('O usuário saiu do sistema')

  }

  cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.senha2).catch((error) => {
        if (error.code == 'auth/invalid-email') {
          alert('E-mail inválido');
        } else if (error.code == 'auth/weak-password') {
          alert('Sua senha deve possuir pelo menos 6 caracteres');
        } else if (error.code == 'auth/email-already-in-use') {
          alert('Já existe um usuario com este e-mail');
        } else {
          alert('Usuário cadastrado com sucesso!!');
        }
      })
  }


  render() {
    return (

      <View style={styles.container}>
        <View style={styles.box01}>
          <Image style={[styles.box01, styles.border]} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}>
          </Image>
        </View>
        <View style={styles.box02}>
          <Text style={styles.texto3}>Digite seu login</Text>
          <TextInput onChangeText={(login) => this.setState({ login })} style={styles.texto1}>
          </TextInput>
        </View>
        <View style={styles.box03}>
          <Text style={styles.texto3}>Digite sua senha</Text>
          <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({ senha })} style={styles.texto1}>
          </TextInput>
        </View>
        <View style={styles.box08}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.logar}>
            <Text>Logar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSair} onPress={this.sair}>
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box04}>
          <TouchableOpacity onPress={() => { alert('Já era!!') }}>
            <Text style={styles.texto2}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box09}>
          <Text style={styles.textocada}>Deseja se cadastrar?</Text>
        </View>
        <View style={styles.box05}>
          <Text style={styles.texto3}>E-mail</Text>
          <TextInput onChangeText={(email) => this.setState({ email })} style={styles.texto1}>
          </TextInput>
        </View>
        <View style={styles.box06}>
          <Text style={styles.texto3}>Senha</Text>
          <TextInput secureTextEntry={true} onChangeText={(senha2) => this.setState({ senha2 })} style={styles.texto1}>
          </TextInput>
        </View>
        <View style={styles.box10}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.cadastrar}>
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  texto1: {
    flex: 1,
    height: 40,
    width: 200,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1
  },
  texto2: {
    flex: 1,
    height: 40,
    width: 200,
    color: 'white',
  },
  texto3: {
    flex: 1,
    height: 40,
    width: 200,
    color: 'grey',
  },
  box01: {
    flex: 2,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  box02: {
    flex: 1,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  box03: {
    flex: 1,

  },
  box04: {
    flex: 1,
    marginTop: 20,

  },
  box05: {
    flex: 1,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',

  },
  box06: {
    flex: 1,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10

  },
  box07: {
    flex: 1,


  },
  box08: {
    flex: 1,
    flexDirection: 'row',

  },
  box09: {
    flex: 1,
    marginTop: 20,

  },
  box10: {
    flex: 1,
    marginTop: 20,

  },
  box11: {
    flex: 1,
    marginTop: 20,

  },
  border: {
    width: 160,
    height: 160,
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonStyle: {
    marginTop: 15,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5
  },
  textocada: {
    flex: 1,
    fontSize: 20,
    height: 40,
    width: 200,
    color: 'white',
  },
  rowContainer: {
    flexDirection: 'row'
  },
  buttonSair: {
    marginTop: 15,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5
    
  },
});