import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Tarefa from './src/Tarefa';
import uuid from 'react-native-uuid';

export default function App() {

  const [tarefa, setTarefa] = useState('');
  const [list, setList] = useState([])
  let key = 0;

  function handleAdd() {
    if (tarefa === '')
      return;

    key++;

    const data = {
      item: tarefa,
      key: uuid.v4()

    }

    setList(oldArray => [data, ...oldArray])

    setTarefa('')
  }

  function handleDelete(item) {
    const filteredList = list.filter((tarefa) => {
      return (item !== tarefa.item)
    })

    setList(filteredList)
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

      <FlatList style={styles.list} data={list} keyExtractor={(item) => item.key} renderItem={({ item }) => <Tarefa data={item} deleteItem={() => handleDelete(item.item)} />} />
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
    gap: 5,
    marginBottom: 15
  },
  buttonAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#73f7ff',
    width: '15%',
    borderRadius: 10
  },
  list: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    marginTop: 15,
    paddingTop: 15
  }
})