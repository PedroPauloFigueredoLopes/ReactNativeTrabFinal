import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  onPress,
} from "react-native";

import api from "../../api/api";
const Lista = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
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
});
/*import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
 
export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Nome', 'ID', 'CPF'],
      tableData: [
        ['Joao', '2', '123412314142412', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd']
      ]
    }
  }
 
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 
  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );
 
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { 
	  flex: 1,
	 padding: 16, 
	 paddingTop: 30,
	  backgroundColor: '#fff' 
	},
	
  head: { height: 40, 
	backgroundColor: '#808B97' 
},

  text: {
	   margin: 6
	 },

  row: {
   flexDirection: 'row',
   backgroundColor: '#FFF1C1'
 },

  btn: { 
	  width: 58,
	 height: 18, 
	 backgroundColor: '#78B7BB',
	   borderRadius: 2
	 },

  btnText: {
	   textAlign: 'center',
		color: '#fff'
	 }
}); */
/* import React in our code
import React, { useState, useEffect } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from "react-native";

const App = () => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {"."}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});

export default App; */
