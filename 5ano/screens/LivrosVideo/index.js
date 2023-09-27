import { StyleSheet, Text, View, Linking, TouchableOpacity, Image } from "react-native";
import Logo from "../../components/Logo";

export default function LivrosVideo() {

    const link1 = () => Linking.openURL('https://www.baixelivros.com.br/literatura-infantil')
    const link2 = () => Linking.openURL('https://www.youtube.com/@HistoriasKids')

    return (
        <View style={styles.container}>
            <Logo />

            <View style={styles.content}>
                <View style={[styles.containerText, { backgroundColor: '#ec407a' }]}>
                    <Text style={styles.text}>História Contada</Text>
                </View>

            </View>

            <TouchableOpacity onPress={link2}>
                <Image source={require('../../assets/historiaContada.jpg')} style={styles.image} />

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    content: {
        marginVertical: 20,
        marginHorizontal: 25
    },

    containerText: {
        justifyContent: 'center',
        height: 60,
        borderWidth: 3,
        borderColor: '#000',
        borderRadius: 8
    },

    image: {
        width: 'auto',
        height: 160
    },

    text: {
        fontSize: 25,
        textAlign: 'center'
    },

    textRed: {
        fontSize: 20,
        marginVertical: 25,
        textAlign: 'center',
        color: 'red'
    },

    link: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#f06292',
        fontSize: 20,
        marginVertical: 25
    }
})
