import { styles } from "../../styles/style";
import { Text, TouchableOpacity, View, FlatList, Alert, StyleSheet } from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from "react";
import Logo from "../../components/Logo";

async function requestPermissionsAsync() {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
}

export default function Event() {

  const [todos, setTodos] = useState([])

  const deleteTodo = async (todoId, idNotification) => {
    Alert.alert('Deseja excluir?', undefined, [
      {
        text: 'Sim',
        onPress: async () => {
          const newTodosItem = todos.filter(item => item.id != todoId);
          setTodos(newTodosItem);
          await Notifications.cancelScheduledNotificationAsync(idNotification)
        }
      },
      {
        text: 'Não'
      }
    ])
  };

  useEffect(() => {
    requestPermissionsAsync()
    async function carregaDados() {
      const task = await AsyncStorage.getItem("task");

      if (task) {
        setTodos(JSON.parse(task));
      }
    }
    carregaDados();
  }, []);

  useEffect(() => {
    async function salvaDados() {
      AsyncStorage.setItem("task", JSON.stringify(todos));
    }
    salvaDados();
  }, [todos]);


  // Componente de Lista
  const ListItem = ({ todo }) => {
    const currentDate = new Date(todo.dateTime)

    return (
      <TouchableOpacity style={styles.listItem} onPress={() => deleteTodo(todo.id, todo.idNotification)}>
        <View style={styles.listTask}>
          <Text style={styles.listTitle}>{todo.task}</Text>
          <View style={styles.listText}>
            <Entypo name="calendar" size={15} color="#FFF" />
            <Text style={styles.hourDate}>
              {currentDate.toLocaleString('pt', { dateStyle: 'short', timeStyle: 'short' })}
            </Text>

          </View>
        </View>

        <View>
          <AntDesign name="clockcircle" size={40} color="#FFF" />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>LISTA DE EVENTOS</Text>

      {todos.length > 0 ? <FlatList
        data={todos}
        renderItem={({ item }) => <ListItem todo={item} />}
      /> :
        <Text style={styles.noTask}>Você não tem nenhum evento!</Text>
      }
    </View>
  )
}