import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale, ScaledSheet } from 'react-native-size-matters';
import Logo from "../../components/Logo";

export default function List() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.content}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Diary')}>
                    <Image source={require('../../assets/agenda.png')} style={styles.image}/>
                    <Text style={styles.text}>Agenda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Libary')}>
                    <Image source={require('../../assets/biblioteca.png')} style={styles.image}/>
                    <Text style={styles.text}>Biblioteca Online</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/resenha.png')} style={styles.image}/>
                    <View>
                    <Text style={styles.text}>Resenha</Text>
                    <Text style={styles.textRed}>* Em construção</Text>
                    </View>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#FFF'
    },

    content: {
        marginHorizontal: 25,
        marginTop: 10
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        gap: 15
    },

    image: {
        width: 120,
        height: 120
    },

    text: {
        fontSize: scale(20),
        textTransform: 'uppercase',
        fontFamily: 'Inkfree'
    },

    textRed: {
        color: 'red'
    }
})