import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


export default class Lista extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        feed: this.props.data
      };
  
      
      this.carregaIcone = this.carregaIcone.bind(this);
      this.like = this.like.bind(this);
  
      }
  
      // Carrega icone de Like e verifica se ta true ou false para pegar a imagem 
      carregaIcone(likeada){
  
        return likeada ? require('../img/likeada.png') : 
             require('../img/like.png')
     
     }
   
     // Funcao chamada quando clica no botao LIKE
     like(){
      let state = this.state;
  
      if(state.feed.likeada == true){
        state.feed.likeada = false;
        state.feed.likers -= 1;
      }else{
      state.feed.likeada = !state.feed.likeada
      state.feed.likers += 1;
      }
  
      this.setState(state);  
   
     }
  
    mostraLikes(likers){
        let state = this.state;
  
        if(state.feed.likers <= 0){
          return;
        } 
          
      
        return(
          <Text style={styles.like}>
            {state.feed.likers} {state.feed.likers > 1 ? 'curtidas' : 'curtida'}
          </Text> 
        );
    }
  
  
  
    render(){
      return(
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
            <Image style={styles.fotoPerfil} source={{uri: this.state.feed.imgperfil}}/>
            <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
        </View>
  
        <Image resizeMode="cover" style={styles.fotoPublicacao} source={{uri:(this.state.feed.imgPublicacao)}}/>
  
        <View style={styles.areaBotoes}>
          <TouchableOpacity onPress={this.like}>
             <Image style={styles.iconeLike} source={this.carregaIcone(this.state.feed.likeada)}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend} onPress={()=>{}}>
             <Image style={styles.iconeLike} source={require('../img/send.png')}/>
          </TouchableOpacity>
        </View>
  
        {this.mostraLikes(this.state.feed.likers)}
  
        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>
             {this.state.feed.nome} 
          </Text>
          <Text style={styles.descRodape}>
             {this.state.feed.descricao}
          </Text>
        </View>
  
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    areaFeed:{
      marginBottom: 10,
    },
    nomeUsuario:{
      fontSize: 22,
      paddingLeft: 5,
      textAlign: 'left',
      color: '#000000'
    },
    fotoPublicacao:{
      flex:1,
      alignItems: 'center',
      height: 400,
    },
    viewPerfil:{
      flexDirection: 'row',
      flex: 1,
      padding: 8,
      alignItems: 'center',
    },
    fotoPerfil:{
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    iconeLike: {
      width: 33,
      height: 33
    },
    btnSend:{
      paddingLeft: 5,
    },
    areaBotoes:{
      padding: 5,
      flexDirection: 'row'
    },
    like: {
      fontWeight: 'bold',
      marginLeft: 5,
    }, 
    nomeRodape:{
      paddingLeft: 5,
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000000'
    },
    descRodape:{
      paddingLeft: 5,
      fontSize: 15,
      color: '#000000'
    },
    viewRodape:{
      flexDirection: 'row',
      alignItems: 'center',
    }
  
  
  
  
  });