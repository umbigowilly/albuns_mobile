import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <ScrollView>
    <View style={rodrigo.container}>
     <Text style={rodrigo.titulo}>Albuns do Paramore</Text>

     <Text style={rodrigo.subTitulo}>{'\n'}After Loud</Text>
     <Image style={rodrigo.img} source={require("./assets/paramore5.png")} />

     <Text style={rodrigo.subTitulo}>{'\n'}All we want is falling</Text>
     <Image style={rodrigo.img} source={require("./assets/paramore4.png")} />

     <Text style={rodrigo.subTitulo}>{'\n'}Brand new eyes</Text>
     <Image style={rodrigo.img} source={require("./assets/paramore3.png")} />

     <Text style={rodrigo.subTitulo}>{'\n'}Riot</Text>
     <Image style={rodrigo.img} source={require("./assets/paramore2.png")} />

     <Text style={rodrigo.subTitulo}>{'\n'}Paramore</Text>
     <Image style={rodrigo.img} source={require("./assets/paramore1.png")} />

    </View>
     </ScrollView>
  );
}

const rodrigo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: "#D7F4FA",
    padding: 8,

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titulo:{
    fontSize: 25, marginTop:15,

  },
  subTitulo:{fontWeight:"bold",
  fontSize: 18,

  },
  img:{width:250, height:250, }
});
