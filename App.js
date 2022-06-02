import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

export default function App() {
  return (
  
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Jogos Legais</Text>
      <StatusBar style="auto" />
      <ScrollView> 
      <Text style={estilo.jogo}>Enduro - 1980</Text>
      <Image style={estilo.img} source={require("./assets/enduro.jpg")}/>
      <Text style={estilo.jogo}>Fórmula 1 - 2000</Text>
      <Image style={estilo.img} source={require("./assets/formula1.jpg")}/>
      <Text style={estilo.jogo}>StarFox - 1985</Text>
      <Image style={estilo.img} source={require("./assets/starfox.png")}/>
      </ScrollView>
    </View>
    
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
    alignItems: 'center',
  },
  titulo:{
    fontSize:40,
    marginTop:30,   
    color:"#023047",

  },
  img:{
    width: 350,
    height: 300,
    borderRadius: 10
  },
  jogo:{
    marginTop:40,
    fontSize:20,
    marginBottom:8,
    fontWeight:"bold",
  }
});
