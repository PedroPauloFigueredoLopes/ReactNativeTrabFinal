<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 6186fcf63cce0f69f817146ea5c2acff0f42f9a6
import {
  StyleSheet,
  Text,
  View,
  TextInput,
<<<<<<< HEAD
  TouchableOpacity,
  Alert,
} from "react-native";
import api from "../../api/api";

const Info = ({ route }) => {
  const { itemid, itemnome, itemcpf } = route.params;
  const [data, setData] = useState([]);
  const [id, setID] = useState(itemid);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
=======
  TouchableOpacity, Alert,
} from "react-native";
import api from "../../api/api";


const Info = ({ route }) => {
  const { itemid, itemnome, itemcpf } = route.params;
  const [data, setData] = useState([])
  const [id, setID] = useState(itemid);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
>>>>>>> 6186fcf63cce0f69f817146ea5c2acff0f42f9a6
  const [funcionario, setFuncionario] = useState();

  const editarDados = () => {
    const headers = {
<<<<<<< HEAD
      "Content-Type": "application/json; charset=UTF-8",
    };
    if (!nome || !cpf) {
      Alert.alert("Por favor, preencha os dados");
    } else {
      const funcionario = {
        cpf: cpf,
        nome: nome,
      };
      setFuncionario(funcionario);

      console.log(id);

      api
        .put(
          `/funcionario/${id}`,
          { nome: nome, cpf: cpf },
          { headers: headers }
        )
        .then((response) => {
          setData(response.data);
          Alert.alert("Usuario atualizado com sucesso");
        })
        .catch((error) => {
          console.log(error);
          Alert.alert("Não foi possivel atualizar");
        });
    }
  };

  const handleButtonPressDelete = () => {
    api.delete(`/funcionario/${id}`).then((res) => {
      const del = funcionario.filter((funcionario) => id !== funcionario.id);
      setFuncionario(del)
        .then((response) => {
          setData(response.data);
          Alert.alert("Usuario deletado com sucesso");
        })
        .catch((error) => {
          console.log(error);
          Alert.alert("Não foi possivel deletar");
        });
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 25 }}>
        Informações do Funcionario:
      </Text>
=======
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



  /*   function handleButtonPress() {
      const funcionario = {
        cpf: cpf,
        nome: nome
      }
      setFuncionario(funcionario)
    } */

  const handleButtonPressDelete = () => {
    api.delete(`/funcionario/${id}`).then(res => {
      const del = funcionario.filter(funcionario => id !== funcionario.id)
      setFuncionario(del)
        .then(response => {
          setData(response.data);
          Alert.alert("Usuario deletado com sucesso");
        })
        .catch(error => {
          console.log(error)
          Alert.alert("Não foi possivel deletar");
        })
    })
  }


  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 25 }}>Informações do Funcionario:</Text>
>>>>>>> 6186fcf63cce0f69f817146ea5c2acff0f42f9a6

      <Text>Id: {JSON.stringify(itemid)}</Text>
      <Text>Nome: {JSON.stringify(itemnome)}</Text>
      <Text> CPF: {JSON.stringify(itemcpf)}</Text>
<<<<<<< HEAD
      <View style={{ width: "80%", marginVertical: 15 }}>
=======
      <View style={{ width: '80%', marginVertical: 15 }}>
>>>>>>> 6186fcf63cce0f69f817146ea5c2acff0f42f9a6
        <TextInput
          placeholderTextColor="#3337"
          style={styles.input}
          placeholder="Alterar Nome do Funcionario"
          autoCorrect={false}
          onChangeText={setNome}
          value={nome}
        />
      </View>
<<<<<<< HEAD
      <View style={{ width: "80%", marginVertical: 15 }}>
=======
      <View style={{ width: '80%', marginVertical: 15 }}>
>>>>>>> 6186fcf63cce0f69f817146ea5c2acff0f42f9a6
        <TextInput
          placeholderTextColor="#3337"
          style={styles.input}
          placeholder="Alterar cpf do Funcionario"
          autoCorrect={false}
          onChangeText={setCpf}
          value={cpf}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={editarDados}>
          <Text style={styles.buttonText}>Alterar</Text>
        </TouchableOpacity>
<<<<<<< HEAD
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={handleButtonPressDelete}
        >
=======
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={handleButtonPressDelete}>
>>>>>>> 6186fcf63cce0f69f817146ea5c2acff0f42f9a6
          <Text style={styles.buttonText}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Info;
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
    height: 60,
    backgroundColor: "#ffd913",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
<<<<<<< HEAD
    flexDirection: "row",
    justifyContent: "space-around",
=======
    flexDirection: 'row',
    justifyContent: 'space-around',
>>>>>>> 6186fcf63cce0f69f817146ea5c2acff0f42f9a6
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> 6186fcf63cce0f69f817146ea5c2acff0f42f9a6
