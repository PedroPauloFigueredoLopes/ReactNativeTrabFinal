import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TextInput,

} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../../api/api";
import Funcionario from '../../database/ModelFuncionario'

const Lista = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Funcionario.createTable()

    const getFunFromApiAsync = async () => {
      api("/funcionario")
        .then((response) => {
          setData(response.data);

          console.log(response.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
    getFunFromApiAsync();
  }, []);

  const addFuncionariosOffline = () => {
    const props = {
      id: 1,
      nome: 'Jose Henrique',
      cpf: '71103593013'
    }
    Funcionario.create(props)
    console.log(props)
  }

  const listaFuncionarioOffline = async () => {
    const options = {
      columns: 'id,nome,cpf',
      where: {
        id_gteq: 1
      },
    }
    const query = await Funcionario.query(options)
    console.log(query)
  }




  return (
    <View style={styles.background}>
      <TextInput
        placeholderTextColor="#3337"
        style={styles.input}
        placeholder="Procurar funcionario por nome/id"
        autoCorrect={false}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={styles.itemsContainer}>

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#000",
                  marginBottom: 20,
                  borderRadius: 7,
                }}
              >
                <View style={{ marginLeft: 145 }}>
                  <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate('Info',
                      {
                        itemid: item.id,
                        itemnome: item.nome,
                        itemcpf: item.cpf
                      });
                  }}>
                    <Text style={styles.buttonText}>Editar/Deletar</Text>
                  </TouchableOpacity>
                </View>
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
            keyExtractor={(item, index) => index.toString()}
          ></FlatList>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={listaFuncionarioOffline}>
        <Text style={styles.buttonText}>Pesquisa Offline</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={addFuncionariosOffline}>
        <Text style={styles.buttonText}>Add Offline</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Lista;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#3337",
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
    backgroundColor: "#ffd913",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
});