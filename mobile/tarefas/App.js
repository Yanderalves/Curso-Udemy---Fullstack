import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function App() {

  const [tarefa, setTarefa] = useState('');

  function handleAdd(text) {
    alert(tarefa)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.containerInput}>
        <TextInput value={tarefa} onChangeText={(text) => setTarefa(text)} style={styles.input} placeholder='Digite sua tarefa' />
        <TouchableOpacity onPress={handleAdd} style={styles.buttonAdd}>
          <FontAwesome name='plus' color="#FFF" size={25} />
        </TouchableOpacity>
      </View>
      <View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272e',
    paddingTop: 28,
  },
  title: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15
  },
  input: {
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
    height: 45,
    borderRadius: 5,
    width: '75%',
  },
  containerInput: {
    marginTop: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 5
  },
  buttonAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#73f7ff',
    width: '15%',
    borderRadius: 10
  }
})