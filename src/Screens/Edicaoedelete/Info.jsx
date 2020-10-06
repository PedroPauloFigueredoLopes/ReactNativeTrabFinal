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
import Header from "../Cadastro/Header";

const Info = ({route}) => {
    
  
  const { itemid ,itemnome,itemcpf} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sou a Tela informativa</Text>
      
      <Text>Id: {JSON.stringify(itemid)}</Text>
      <Text>Nome: {JSON.stringify(itemnome)}</Text>
      <Text> CPF: {JSON.stringify(itemcpf)}</Text>
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
  });