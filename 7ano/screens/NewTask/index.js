import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown'
import * as Notifications from 'expo-notifications';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { AntDesign, Entypo, MaterialIcons  } from '@expo/vector-icons';
import Logo from '../../components/Logo'


Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });


export default function NewTask() {
    const disciplines = ["Português", "Matemática", "História", "Inglês", "Geografia", "Ed. Física", "Ciências", "Artes"]

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')
    const [subjects, setSubjects] = useState('')
    const [backgroundColor, setBackgroundColor] = useState('')

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };


    async function addTask() {
        if (!task) return Alert.alert('Digite uma tarefa!');
        if (!subjects) return Alert.alert('Escolha uma disciplina!');
        const newTodo = {
            id: Math.floor(Math.random() * 100000000),
            name: task,
            dateTime: selectedDate.toISOString(),
            discipline: subjects,
            backColor: backgroundColor,
            idNotification: null
        }
        newTodo.idNotification = await schedulePushNotification(newTodo);
        setTodos([...todos, newTodo])
        setTask('')
        setSubjects('')
        Alert.alert('Tarefa salvada com sucesso!')
    }

    async function schedulePushNotification(task) {
        const trigger = new Date(task.dateTime);
        const idNotification=  await Notifications.scheduleNotificationAsync({
          content: {
            title: `Disciplina: ${task.discipline}`,
            body: task.name,
            sound: '',
            color: task.backColor
          },
          trigger
        });
        return idNotification
      }

      useEffect(() => {
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


    return (
        <View style={styles.container}>
            <Logo />

            <View style={styles.positionInput}>
                <Text style={styles.title}>Titulo</Text>
                <Entypo name="open-book" size={30} color="#f06292" style={styles.iconBook}/>
                <TextInput
                    placeholder="Digite uma tarefa"
                    style={styles.input}
                    onChangeText={(text) => setTask(text)}
                    value={task}
                />
            </View>

            <View style={styles.positionInput}>
                <Text style={styles.title}>Disciplina</Text>
                <SelectDropdown
                
                    buttonStyle={styles.buttonDropdown}
                    buttonTextStyle={styles.rowDropdown}
                    data={disciplines}
                    onSelect={(selectedItem, index) => {
                        setSubjects(selectedItem)
                        if(index === 0) setBackgroundColor('#ef5350')
                        if(index === 1) setBackgroundColor('#fff176')
                        if(index === 2) setBackgroundColor('#b39ddb')
                        if(index === 3) setBackgroundColor('#f06292')
                        if(index === 4) setBackgroundColor('#ff8a65')
                        if(index === 5) setBackgroundColor('#4fc3f7')
                        if(index === 6) setBackgroundColor('#81c784')
                        if(index === 7) setBackgroundColor('#000000')
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    
                />
                <MaterialIcons name="arrow-drop-down" size={35} color="#f06292" style={styles.arrowDropdown}/>

            </View>

            <View style={[styles.positionInput, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                <Text style={styles.title}>Dia e Hora</Text>
                <TouchableOpacity onPress={showDatePicker} style={styles.buttonDateTime} >
                    <Text style={styles.hourDate}>{selectedDate.toLocaleString('pt', { dateStyle: 'short', timeStyle: 'short' })}</Text>
                    <AntDesign name="clockcircle" size={35} color="#f06292" style={styles.icon} />
                    
                    <DateTimePickerModal
                        date={selectedDate}
                        isVisible={datePickerVisible}
                        mode="datetime"
                        display="inline"
                        locale="pt-BR"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.positionInput, styles.button]} onPress={addTask}>
                <Text style={styles.text}>Agendar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fce4ec'
    },

    positionInput: {
        marginHorizontal: 15,
        marginVertical: 20
    },

    input: {
        borderRadius: 10,
        fontSize: 20,
        paddingLeft: 60,
        height: 50,
        backgroundColor: '#f8bbd0'
    },

    iconBook: {
        position: 'absolute',
        top: 40,
        left: 10,
        zIndex: 2
    },

    title: {
        fontSize: 20,
        marginBottom: 10
    },

    buttonDropdown: {
        backgroundColor: '#f8bbd0',
        width: '100%',
        borderRadius: 10
    },

    rowDropdown: {
        color: 'white'
    },

    arrowDropdown: {
        position: 'absolute',
        top: 37,
        right: 15
    },

    buttonDateTime: {
        width: '60%',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#f8bbd0'
    },

    hourDate: {
        fontSize: 20
    },

    button: {
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: 65,
        backgroundColor: '#f06292',
        borderRadius: 10
    },

    text: {
        color: 'white',
        fontSize: 25
    }

})