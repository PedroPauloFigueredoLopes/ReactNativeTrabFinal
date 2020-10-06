/*import React, { useEffect, useState } from "react";
import { Text, View, TextInput } from "react-native";
import api from "../../api/api";

const Cadastro = () => {
  useEffect(() => {
    const getFunFromApiAsync = async () => {
      api
        .post("/funcionario")
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

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        onChangeText={handleNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a idade"
        keyboardType={"numeric"}
        onChangeText={handleAgeChange}
      />
      <Picker
        placeholder={placeholder}
        onValueChange={handleStateChange}
        style={pickerSelectStyles}
        items={ufs}
      />
      <Text>tela de Cadastro</Text>
    </View>
  );
};

export default Cadastro; */
import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import api from "../../api/api";
import Header from "./Header";

function Form() {
  const [data, setData] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const[funcionario,setFuncionario] = useState()
  

  // useEffect(() => {
  //   const getFunFromApiAsync = async () => {
  //     api("/funcionario").then((response) => {
  //       setEstados(
  //         response.data.map((estado) => ({
  //           label: estado.uf,
  //           key: estado.uf,
  //           value: estado.uf,
  //         }))
  //       );
  //     });
  //   };
  //   getFunFromApiAsync();
  // }, []);


  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    }
    if(funcionario!=null){
      api.post(`/funcionario`,funcionario,{headers:headers})
    
      .then(response => {
        console.log(response)
        setData(response.data);
        alert ("Usuario cadastrado com sucesso");
      
      })
      .catch (error => {
        console.log(error)
        alert ("Não foi possivel cadastrar");
      
      })
   }
  },[funcionario])
  

  function handleNomeChange(nome) {
    setNome(nome);
  }
  function handleCpfChange(cpf) {
    setCpf(cpf);
  }

  function handleButtonPress() {
    const funcionario={ 
      cpf: cpf,
      nome: nome
    }
    setFuncionario(funcionario)
  
  }

 

  // api.post("/funcionarios", {funcionario}).then((response) => {
  //   alert(response.data.length + "cadastrado");
  // });

  return (
    <>
      <Header title="Cadastro" />
      <View style={styles.container}>
        <Text style={styles.title}>
          Preencha o os campos abaixo para adiconar novo funcionario:
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          onChangeText={handleNomeChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a cpf"
          keyboardType={"numeric"}
          onChangeText={handleCpfChange}
        />

        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default Form;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inputContainer: {
    margin: 20,
    alignItems: "stretch",
  },
  topImage: {
    margin: 20,
  },
  title: {
    fontSize: 20,
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "stretch",
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
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
