import { Text, View, StyleSheet, Alert } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { TouchableOpacity } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import * as Notifications from 'expo-notifications';

export default function ListTasks() {

    const navigation = useNavigation()
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        async function carregaDados() {
            const task = await AsyncStorage.getItem("task");
            if (task) setTodos(JSON.parse(task));

        }

        carregaDados()
    }, [])

    useEffect(() => {
        async function salvaDados() {
            await AsyncStorage.setItem("task", JSON.stringify(todos));
        }

        salvaDados()

    }, [todos])

    // Componente de Lista
    const ListItem = ({ todo }) => {
        const currentDate = new Date(todo.dateTime)

        return (
            <View style={styles.listItem}>
                <TouchableOpacity onPress={() => deleteTodo(todo.id, todo.idNotification)}>
                    <View style={[styles.item, { borderLeftColor: todo.backColor, }]}>
                        <View style={styles.itemTask}>
                            <Text style={styles.titleTask}>{todo.name}</Text>
                            <Text style={styles.discipline}><Text style={{ fontStyle: 'italic' }}>Disciplina</Text>: {todo.discipline}</Text>

                            <View style={styles.calendar}>
                                <Entypo name="calendar" size={15} color="#9e9e9e" />
                                <Text style={styles.calendarDate}>{currentDate.toLocaleString('pt-BR', { dateStyle: 'short' })}</Text>
                            </View>
                        </View>

                        <View style={styles.hour}>
                            <Feather name="clock" size={35} color={todo.backColor} style={{ marginBottom: 5 }} />
                            <Text>{currentDate.toLocaleString('pt-BR', { timeStyle: 'short' })}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const deleteTodo = async (todoId, idNotification) => {
        Alert.alert('Deseja realmente excluir', undefined, [
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

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Eventos</Text>

            {todos.length > 0 ? <FlatList
                data={todos}

                renderItem={({ item }) => <ListItem todo={item} />}
            /> :
                <Text style={styles.noTask}>Você não tem nenhum evento!</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fce4ec'
    },

    title: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 45
    },

    italic: {
        fontStyle: 'italic'
    },

    listItem: {
        marginHorizontal: 15,
    },

    item: {

        borderRadius: 5,
        padding: 10,
        borderLeftWidth: 8,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    itemTask: {
        marginLeft: 5
    },

    titleTask: {
        fontSize: 18,
        fontWeight: "bold"
    },

    discipline: {
        marginVertical: 6
    },

    calendar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },

    calendarDate: {
        color: '#9e9e9e'
    },

    hour: {
        alignItems: 'center'
    },
    
    noTask: {
        marginVertical: 15,
        textAlign: 'center',
        color: 'red',
        fontSize: 20
    }
})