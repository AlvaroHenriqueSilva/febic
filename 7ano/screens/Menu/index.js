import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Menu() {

    const navigate = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <TouchableOpacity style={styles.button} onPress={() => navigate.navigate('NewTask')}>
                <Text style={styles.text}>Nova Tarefa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigate.navigate('ListTasks')}>
                <Text style={styles.text}>Lista de Tarefas</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        backgroundColor: '#fce4ec'
    },

    content: {
        marginHorizontal: 15,
    },

    button: {
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 65,
        width: '100%',
        backgroundColor: '#f06292',
        borderRadius: 8
    },

    text: {
        fontSize: 18,
        color: '#FFF'
    }
})