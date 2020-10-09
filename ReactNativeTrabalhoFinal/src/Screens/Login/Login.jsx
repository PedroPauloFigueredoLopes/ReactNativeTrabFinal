import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../api/api";
const Login = ({ navigation }) => {
  const goToListaScreen = () => {
    navigation.reset({
      index: 1,
      routes: [{ name: "Lista" }],
    });
  };

  return (
    <View style={styles.background}>
      <View style={styles.logo}>
        <Image source={require("../../Imagens/ruteste2.jpg")} />
      </View>
      <TextInput
        placeholderTextColor="#3337"
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
      />
      <TextInput
        placeholderTextColor="#3337"
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={() => {}}
      />
      <TouchableOpacity
        style={styles.submitbutton}
        onPress={() => {
          goToListaScreen();
        }}
      >
        <Text style={styles.submittext}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#3337",
  },

  logo: {
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  input: {
    backgroundColor: "#FFFf",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    color: "#333",
    fontSize: 17,
    borderRadius: 7,
    padding: 15,
  },
  submitbutton: {
    backgroundColor: "#ffd913",
    width: "90%",
    height: 45,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 7,
  },
  submittext: {
    color: "#FFF",
    fontSize: 18,
  },
  registertext: {
    color: "#FFF",
  },
});

export default Login;
