import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import firebase from 'firebase';


import { MonoText } from '../components/StyledText';

export default class RecuperarSenha extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }

        this.recuperarsenha = this.recuperarsenha.bind(this)
        this.voltarlogin = this.voltarlogin.bind(this)
        this.irnavegacao = this.irnavegacao.bind(this)
    }

    recuperarsenha() {
        let auth = firebase.auth();

        auth.sendPasswordResetEmail(this.state.email).then(function () {
            alert('Seu email foi enviado com sucesso')
        }).catch(function (error) {

            let errorCode = error.code;

            if (errorCode == 'auth/invalid-email') {
                alert('Seu e-mail não é valido.');

            }

        });
    }

    voltarlogin() {
        this.props.navigation.navigate('Login')

    }

    irnavegacao() {
        this.props.navigation.navigate('Main')

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box01}>
                    <Text style={styles.texto1}>Digite seu e-mail abaixo:</Text>
                </View>
                <View style={styles.box02}>
                    <Text style={styles.texto3}>E-mail</Text>
                    <TextInput onChangeText={(email) => this.setState({ email })} style={styles.texto4}>
                    </TextInput>
                </View>
                <View style={styles.box03}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.recuperarsenha}>
                        <Text>Recuperar Senha</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box04}>
                </View>
                <View style={styles.box05}>
                    <TouchableOpacity style={styles.buttonStyle2} onPress={this.voltarlogin}>
                        <Text>Voltar Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle3} onPress={this.irnavegacao}>
                        <Text>Ir navegação</Text>
                    </TouchableOpacity>

                </View>


            </View>
        )
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
    box01: {
        flex: 1,
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

    texto1: {
        flex: 1,
        height: 40,
        width: 200,
        color: 'white',
        fontSize: 20
    },
    texto3: {
        flex: 1,
        height: 40,
        width: 200,
        color: 'grey',
        fontSize: 15
    },
    texto4: {
        flex: 1,
        height: 20,
        width: 250,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 1
    },
    box03: {
        flex: 1,

    },
    box04: {
        flex: 4,

    },
    box05: {
        flex: 1,
        flexDirection: 'row',

    },
    buttonStyle: {
        marginTop: 15,
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 5
    },
    buttonStyle2: {
        marginTop: 15,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5
    },
    buttonStyle3: {
        marginTop: 15,
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 5
    }

});
