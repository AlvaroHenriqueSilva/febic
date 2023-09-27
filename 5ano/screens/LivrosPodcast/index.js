import { StyleSheet, Text, View, Linking, TouchableOpacity, Image } from "react-native";
import Logo from "../../components/Logo";

export default function LivrosPodcast() {

    const link = () => Linking.openURL('https://eraumavezumpodcast.com.br/')

    return (
        <View style={styles.container}>
            <Logo />

            <View style={styles.content}>
                <View style={[styles.containerText, { backgroundColor: '#fff176' }]}>
                    <Text style={styles.text}>Era uma vez Podcast</Text>
                </View>

            </View>
            
            <TouchableOpacity onPress={link}>
                <Image source={require('../../assets/podcastLivro.jpg')} style={styles.image} />

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

    text: {
        fontSize: 25,
        textAlign: 'center'
    },

    image: {
        alignSelf: 'center',
        width: 270,
        height: 276
    },

    link: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#f06292',
        fontSize: 20,
        marginVertical: 25
    }
})
