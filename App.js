/*import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
class App extends React.Component {
  state = {
    data: [
      { id: "00", name: "Relâmpago McQueen" },
      { id: "01", name: "Agente Tom Mate" },
      { id: "02", name: "Doc Hudson" },
      { id: "03", name: "Cruz Ramirez" }
    ]
  };
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#d123",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  text: {
    color: "#333333"
  }
});
export default App; */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './Button.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingTop: 20,
  },
  bottom: {
    flex: 1,
  },
  number: {
    color: '#424242',
    backgroundColor: '#ffff',
    textAlign: 'right',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#424242',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
});

const App = () => (
  <View style={styles.container}>
    <View style={styles.top}>
      <Text style={styles.number}>0</Text>
      <Text style={styles.number}>0</Text>
      <Text style={styles.number}>0</Text>
    </View>
    <View style={styles.bottom}>
      <View style={styles.row}>
        <Button text="%" />
        <Button text="x²" />
        <Button text=" ²√x" />
        <Button text="/" />
      </View>
      <View style={styles.row}>
        <Button text="9" />
        <Button text="8" />
        <Button text="7" />
        <Button text="X" />
      </View>
      <View style={styles.row}>
        <Button text="6" />
        <Button text="5" />
        <Button text="4" />
        <Button text="-" />
      </View>
      <View style={styles.row}>
        <Button text="3" />
        <Button text="2" />
        <Button text="1" />
        <Button text="+" />
      </View>
      <View style={styles.row}>
        <Button text="0" />
        <Button text="." />
        <Button text="=" special />
      </View>
    </View>
  </View>
);

export default App;
