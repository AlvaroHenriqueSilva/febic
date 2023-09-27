import { styles } from "../../styles/style";
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications';
import { useEffect, useState } from "react";
import Logo from "../../components/Logo";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [name, setName] = useState('')
  const [todos, setTodos] = useState([])


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


  const addTodo = async () => {
    if (name !== '') {
      const newTodo = {
        id: Math.floor(Math.random() * 1000000),
        task: name,
        dateTime: selectedDate.toISOString(),
        idNotification: null
      }

      newTodo.idNotification = await schedulePushNotification(newTodo);
      setTodos([...todos, newTodo])
      setName('')
      Alert.alert('Agendado com sucesso!')
    } else {
      Alert.alert('Digite uma tarefa!')
      return;
    }
  }

  async function schedulePushNotification(todo) {
    const trigger = new Date(todo.dateTime);
    const idNotification = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Hora da Leitura!',
        body: todo.task,
        sound: ''
      },
      trigger,
    });
    return idNotification;
  }

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


  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>CRIAR EVENTO</Text>

      <View style={styles.content}>
        <Text style={styles.inputTitle}>Titulo:</Text>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Qual o titulo do livro?"
          onChangeText={text => setName(text)} />
      </View>

      <View style={styles.content}>
          <Text style={styles.inputTitle}>Notificação: </Text>
        <View style={styles.contentTimeDate}>
          {/* <Text style={styles.dateTime}>{selectedDate.toLocaleDateString()}</Text> */}
          <Text style={styles.dateTime}>{selectedDate.toLocaleString()}</Text>
          <TouchableOpacity onPress={showDatePicker}>
            <Fontisto name="bell-alt" size={35} color="purple" />
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          date={selectedDate}
          isVisible={datePickerVisible}
          mode="datetime"
          display='inline'
          locale='pt'
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View style={styles.positionButton}>
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text style={styles.buttonText}>Agendar</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}