import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity, Alert,
} from "react-native";
import api from "../../api/api";
import Header from "../Cadastro/Header";

const Info = ({ route }) => {

  const { itemid, itemnome, itemcpf } = route.params;
  const [data, setData] = useState([])
  const [id, setID] = useState(itemid);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [funcionario, setFuncionario] = useState();

  const editarDados = () => {
    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    }
    if (!nome || !cpf) {
      Alert.alert('Por favor, preencha os dados')
    } else {
      const funcionario = {
        cpf: cpf,
        nome: nome
      }
      setFuncionario(funcionario)

      console.log(id)

      api.put(`/funcionario/${id}`, { nome: nome, cpf: cpf }, { headers: headers })
        .then(response => {
          setData(response.data);
          Alert.alert("Usuario atualizado com sucesso");
        })
        .catch(error => {
          console.log(error)
          Alert.alert("Não foi possivel atualizar");
        })
    }
  }

  const handleButtonPressDelete = () => {
    api.delete(`/funcionario/${id}`)
      .then(response => {
        setData(response.data);
        Alert.alert("Usuario deletado com sucesso");
      })
      .catch(error => {
        console.log(error)
        Alert.alert("Não foi possivel deletar");
      })
  }



  return (
    <>
      <Header title='Info' />
      <View style={styles.background}>
        <View >

          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 30, marginLeft: 10 }}>Informações do Funcionario:</Text>
          <View style={{
            borderWidth: 1,
            borderColor: "#000",
            marginBottom: 20,
            borderRadius: 10,
            backgroundColor: "#ffff",
            marginTop: 20,

          }}>
            <Text style={{ fontSize: 20, marginLeft: 10, marginTop: 10 }}>ID: {JSON.stringify(itemid)}</Text>
            <Text style={{ marginTop: 10, marginLeft: 10 }}>Nome: {JSON.stringify(itemnome)}</Text>
            <Text style={{ marginBottom: 15, marginLeft: 10 }}> CPF: {JSON.stringify(itemcpf)}</Text>
          </View>
          <View style={{ width: '90%', marginVertical: 15, marginLeft: 20 }}>
            <TextInput
              placeholderTextColor="#3337"
              style={styles.input}
              placeholder="Alterar Nome do Funcionario"
              autoCorrect={false}
              onChangeText={setNome}
              value={nome}
            />
          </View>
          <View style={{ width: '90%', marginVertical: 15, marginLeft: 20 }}>
            <TextInput
              placeholderTextColor="#3337"
              style={styles.input}
              placeholder="Alterar cpf do Funcionario"
              keyboardType={"numeric"}
              autoCorrect={false}
              onChangeText={setCpf}
              value={cpf}
            />
          </View>
          <View>
            <TouchableOpacity style={[styles.button, { marginRight: 200 }]} onPress={editarDados}>
              <Text style={styles.buttonText}>Alterar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: 'red', marginTop: -60, marginLeft: 200, }]} onPress={handleButtonPressDelete}>
              <Text style={styles.buttonText}>Deletar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
export default Info;
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
    flexDirection: 'row',
    height: 60,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "center",

    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});