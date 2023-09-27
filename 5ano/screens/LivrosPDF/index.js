import { StyleSheet, Text, View, Linking, TouchableOpacity } from "react-native";
import Logo from "../../components/Logo";

export default function LivrosPDF() {

    const baixeLivros = () => Linking.openURL('https://www.baixelivros.com.br/literatura-infantil')
    const euleioparaumacrianca = () => Linking.openURL('https://www.euleioparaumacrianca.com.br/estante-digital/')
    const googleDrive = () => Linking.openURL('https://drive.google.com/drive/u/2/folders/1s8OFTj2e32REGK9GgdOtJzs9Z2cas6Qw')

    return (
        <View style={styles.container}>
            <Logo />

            <View style={styles.content}>
                <TouchableOpacity onPress={baixeLivros} style={[styles.containerText, { backgroundColor: '#82b1ff' }]}>
                    <Text style={styles.text}>Livros Digitais</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={euleioparaumacrianca} style={[styles.containerText, { backgroundColor: '#448aff' }]}>
                    <Text style={styles.text}>Estante Virtual</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={googleDrive} style={[styles.containerText, { backgroundColor: '#2962ff' }]}>
                    <Text style={styles.text}>Drive com Livros</Text>
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
        marginVertical: 10,
        justifyContent: 'center',
        height: 60,
        borderWidth: 3,
        borderColor: '#000',
        borderRadius: 8
    },

    text: {
        fontSize: 25,
        textAlign: 'center'
    },

    link: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#f06292',
        fontSize: 20,
        marginVertical: 25
    }
})
