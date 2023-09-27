import { StyleSheet, Text, View, Linking, TouchableOpacity, Image } from "react-native";
import Logo from "../../components/Logo";

export default function LivrosAudio() {

    const link1 = () => Linking.openURL('https://www.youtube.com/playlist?list=PLBD47852D972158A4')
    const link2 = () => Linking.openURL('https://www.materiaispdg.com.br/2020/02/colecao-disquinho-historias-em-audio.html')

    return (
        <View style={styles.container}>
            <Logo />

            <View style={styles.content}>
                <TouchableOpacity
                    onPress={link1}
                    style={[styles.containerText, { backgroundColor: '#bbdefb' }]}>
                    <Text style={styles.text}>Coleção Disquinho</Text>
                </TouchableOpacity>


            </View>

            <View style={styles.content}>
                <TouchableOpacity onPress={link2}>
                    <Image source={require('../../assets/colecaoDisquinho.jpg')} style={styles.image} />
                    <Image source={require('../../assets/disquinho.jpg')} style={styles.imageD} />
                </TouchableOpacity>
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
        alignSelf: 'center',
        width: 260,
        height: 160
    },

    imageD: {
        alignSelf: 'center',
        marginHorizontal: 15,
        width: 200,
        height: 220
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
