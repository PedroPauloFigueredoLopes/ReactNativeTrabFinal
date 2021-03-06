import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  onPress,
  Icon,
  ActivityIndicator


} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../../api/api";
import Funcionario from '../../database/ModelFuncionario'
import Header from "./Header";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
const Lista = ({ navigation }) => {
  const [data, setData] = useState([]);
  // const [query, setQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);


  const getFunFromApiAsync = async () => {
    api("/funcionario")
      .then((response) => {
        setData(response.data);
        setFilteredDataSource(response.data)
        setLoading(false);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  useEffect(() => {
   
    getFunFromApiAsync();
  }, []);

  

  const searchFilterFunction = (text) => {

    if (text) {

      const newData = data.filter(function (item) {

        const itemData = item.nome ? item.nome.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {

      setFilteredDataSource(data);

      setSearch(text);
    }
  };
  useEffect(() => {
    getFunFromApiAsync();
  }, []);
  if (loading) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator
          size="large"
          color="#009688"
          >

        </ActivityIndicator>
        <Text>Carregando lista de funcionarios...</Text>

      </View>
    )
  }
  else {
    return (
      <>
        <Header title="Lista" />
        <View style={styles.background}>
          <View style={styles.container}>
            <TextInput style={styles.textInputStyle}
              onChangeText={(text) => searchFilterFunction(text)}
              value={search}
              underlineColorAndroid="transparent"
              placeholder="Digite o nome do funcionario que deseja encontrar"
            />
          </View>

          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View>
              <FlatList
                data={filteredDataSource}
                renderItem={({ item }) => (
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#000",
                      marginBottom: 20,
                      borderRadius: 10,
                      backgroundColor: "#ffff",

                    }}
                  >
                    <View style={{ marginLeft: 145 }}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                          navigation.navigate("Info", {
                            itemid: item.id,
                            itemnome: item.nome,
                            itemcpf: item.cpf,
                          });
                        }}
                      >
                        <Entypo name="edit" size={20} color="#009688" />
                        <Text style={styles.buttonText}>Editar/Deletar</Text>
                      </TouchableOpacity>
                    </View >
                    <Text style={{ fontSize: 20, marginLeft: 10, marginTop: -40 }}>
                      ID: {item.id}
                    </Text>
                    <Text style={{ marginTop: 10, marginLeft: 10 }}>
                      NOME: {item.nome}
                    </Text>
                    <Text style={{ marginBottom: 15, marginLeft: 10 }}>
                      CPF: {item.cpf}
                    </Text>

                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                onRefresh={() => getFunFromApiAsync()}
                refreshing={loading}

              ></FlatList>

            </View>
          </View>







          <TouchableOpacity style={[styles.pesquisaContainer]} onPress={() => {
            navigation.navigate("ListaOff");
          }}>
            <Text style={styles.pesquisaText}>Pesquisa Offline</Text>
            <FontAwesome name="search" size={10} color="#e6faf9" />
          </TouchableOpacity>

          {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={styles.itemsContainer}>
              <FlatList
                data={query}
                renderItem={({ item }) => (
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#000",
                      marginBottom: 20,
                      borderRadius: 7,
                    }}
                  >
                    <Text style={{ marginTop: 10, marginLeft: 10 }}>
                      ID: {item.id}
                    </Text>
                    <Text style={{ marginTop: 15, marginLeft: 10 }}>
                      CPF: {item.cpf}
                    </Text>
                    <Text style={{ marginBottom: 10, marginLeft: 10 }}>
                      NOME: {item.nome}
                    </Text>

                  </View>
                )}
                keyExtractor={(item2, index) => index.toString()}
              ></FlatList>
            </View>
          </View> */}
        </View>
      </>
    )
  }
}

export default Lista;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#e6faf9",
  },
  input: {
    backgroundColor: "#FFF",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: "#333",
    fontSize: 17,
    borderRadius: 7,
    padding: 15,
  },
  itemsContainer: {
    backgroundColor: "#f4f5f9",
    width: "90%",
    justifyContent: "center",
    paddingBottom: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 25,
    borderRadius: 7,
  },
  container: {
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: "#EEE",
    marginTop: 20,
    padding: 30,
  },
  button: {
    marginTop: 10,
    height: 50,
    width: 150,
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,

  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 10,
  },
  containerLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#e6faf9",

  },
  pesquisaContainer: {
    paddingTop: 5,
    paddingBottom: 25,
    backgroundColor: "#09736f",
    alignItems: "center",
  },
  pesquisaText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

});
