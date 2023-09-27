import { StyleSheet, Text, View, Linking, TouchableOpacity } from "react-native";
import Logo from "../../components/Logo";

export default function LivrosEbook() {

    const link1 = () => Linking.openURL('https://www.baixelivros.com.br/literatura-infantil')
    const link2 = () => Linking.openURL('https://fliphtml5.com/homepage/uwvpx')
    
    return (
        <View style={styles.container}>
            <Logo />

            <View style={styles.content}>
                <View style={[styles.containerText, { backgroundColor: '#81c784' }]}>
                    <Text style={styles.text}>Kindle</Text>
                </View>

                <TouchableOpacity>
                    <Text style={styles.textRed}>* Em construção</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={link2} style={[styles.containerText, { backgroundColor: '#00e676' }]}>
                    <Text style={styles.text}>Livros FlipBoard</Text>
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
