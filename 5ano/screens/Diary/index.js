import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../../components/Logo";
import { useNavigation } from "@react-navigation/native";

export default function Diary() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Logo />

            <View style={styles.content}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Event')}>
                    <Text style={styles.text}>CRIAR EVENTO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListEvents')}>
                    <Text style={styles.text}>LISTA DE EVENTOS</Text>
                </TouchableOpacity>

                
                    <Image source={require('../../assets/aluno.png')} style={styles.image} />
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    content: {
        marginVertical: 25,
        alignItems: 'center',
    },

    button: {
        marginVertical: 15,
        backgroundColor: 'purple',
        height: 70,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    text: {
        color: '#FFF',
        fontSize: 25,
        fontFamily: 'Inkfree'
    },

    image: {
        marginTop: 50,
        width: 200,
        height: 250
    }

})