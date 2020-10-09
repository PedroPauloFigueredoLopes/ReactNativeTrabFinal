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
    ActivityIndicator,


} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Funcionario from '../../database/ModelFuncionario'
import Header from "./Header";
import { Entypo } from '@expo/vector-icons';
const ListaOff = () => {

    const [query, setQuery] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Funcionario.createTable()

    }, []);
    //adiciona funcionario repositorio local
   /* const addFuncionariosOffline = () => {
        const props = {
            id: 385, nome: "Fernando Ramires", cpf: "37555475030"
        }
        Funcionario.create(props)
        console.log(props)
    }
    */
    const listaFuncionarioOffline = async () => {
        const options = {
            columns: 'id,nome,cpf',
            where: {
                id_gteq: 1
            },
        }
        setQuery(await Funcionario.query(options))
        console.log(query)
    }
    useEffect(() => {
        listaFuncionarioOffline();

    }, []);


    return (
        <>
            <Header title="Lista" />
            <View style={styles.background}>
                <View style={styles.container}>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            
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
                            keyExtractor={(item, index) => index.toString()}
                        ></FlatList>
                    </View>
                </View>
            </View>
        </>
    );
};


export default ListaOff;

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

    },
});
