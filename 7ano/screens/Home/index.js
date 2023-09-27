import { View, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logo from '../../components/Logo'
import { TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import Dialog from "react-native-dialog";

export default function Home() {
    const navigation = useNavigation()
    const [name, setName] = useState('Salve seu nome')
    const [visible, setVisible] = useState(false);

    const showDialog = () => setVisible(true)
    const handleCancel = () => setVisible(false);
    const handleDelete = () => setVisible(false);


    
    async function salvarNome() {
        AsyncStorage.setItem("Name", JSON.stringify(name));
    }

    async function carregarNome() {
        const nameUser = await AsyncStorage.getItem("Name");
        if (nameUser) {
            setName(JSON.parse(nameUser));
        }
    }
    useEffect(() => {
        carregarNome();
    }, []);

    useEffect(() => {
        salvarNome()
    }, [name])

    return (
        <View style={styles.container}>
            <Logo />

            <Text style={styles.title}>Bem-vindo</Text>
            <Text style={[styles.title, { fontSize: 45, color: '#BD4D72' }]}>{name}</Text>

            <TouchableOpacity style={styles.buttonUser} onPress={showDialog}>
            <FontAwesome5 name="user-graduate" size={28} color="#FFF" />
            </TouchableOpacity>

            <View style={styles.positionButton}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
                    <Text style={styles.text}>MENU</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerDiolog}>
                <Dialog.Container visible={visible}>
                    <Dialog.Title>Qual é o seu nome?</Dialog.Title>
                    <Dialog.Input 
                        onChangeText={(value) => setName(value)}
                    />
                    <Dialog.Button label="Salvar" onPress={handleDelete} />
                    <Dialog.Button label="Cancelar" onPress={handleCancel} />
                </Dialog.Container>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    title: {
        fontSize: 35,
        textAlign: 'center'
    },

    positionButton: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    buttonUser: {
        position: 'absolute',
        top: 590,
        zIndex: 99,
        width: 150,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#BD4D72'
    },

    button: {
        backgroundColor: '#f06292',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80
    },

    text: {
        color: '#FFF',
        fontSize: 40
    }

})