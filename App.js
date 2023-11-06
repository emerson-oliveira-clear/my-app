import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        textoFrase: '',
        img: require('./src/img/biscoito.png'),
    }

    this.quebraBiscoito =  this.quebraBiscoito.bind(this)

    this.frases = [
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
    ];

  }

  quebraBiscoito(){
    let numAleatorio = Math.floor(Math.random() *this.frases.length)

      this.setState({
        textoFrase:' " ' + this.frases[numAleatorio] + ' " ',
        img:require('./src/img/biscoitoAberto.png')
      })
  }

  quebrar() {

  }

  frases(){

  }

  render() {



    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.text}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}> 
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}> Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>



      </View>
    )
  }
}

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#9E6606",
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    img:{
      width:330,
      height:280,
      marginBottom:25,
      
    },
    text:{
      fontSize:25,
      color: '#FFCC00',
      margin: 30,
      fontStyle: 'italic',
      textAlign: 'center'
    
    
    },
    botao:{
      backgroundColor:"#666600",
      padding:10,
      marginTop:8,
      width: 250,
      height:50,
      borderWidth: 2,
      borderColor: '#FFCC00' ,
      borderRadius: 25
    },
    btnTexto:{
      color:'white',
      fontSize:18,
      fontWeight: 'bold',
      color: '#FFCC00'
     
    },
    btnArea: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });


export default App