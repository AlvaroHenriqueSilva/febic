import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, PixelRatio } from "react-native";
import Logo from '../../components/Logo'
import { ScaledSheet, scale } from 'react-native-size-matters';
import { useNavigation } from "@react-navigation/native";

export default function Libary() {

    const navigation = useNavigation()

    const pdf = () => navigation.navigate('LivrosPDF')
    const ebook = () => navigation.navigate('LivrosEbook')
    const video = () => navigation.navigate('LivrosVideo')
    const audio = () => navigation.navigate('LivrosAudio')
    const podcast = () => navigation.navigate('LivrosPodcast')
    const dominioPublico = () => navigation.navigate('LivrosDominio')

    const fontScale = PixelRatio.getFontScale()
    const getFontSize = (number) => number / fontScale

    return (
        <View style={styles.container}>
            <Logo />

            <ScrollView>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('../../assets/acervoBiblioteca.png')} style={styles.image} />
                        <View>
                            <Text style={styles.text}>Acervos Biblioteca</Text>
                            <Text style={styles.textRed}>* Em construção</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={pdf}>
                        <Image source={require('../../assets/pdf.jpg')} style={styles.image} />
                        <Text style={styles.text}>Livros em PDF</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={ebook}>
                        <Image source={require('../../assets/ebooks.png')} style={styles.image} />
                        <Text style={styles.text}>E-Books</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={video}>
                        <Image source={require('../../assets/videoBook.jpg')} style={styles.image} />
                        <Text style={styles.text}>Vídeo Books</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={audio}>
                        <Image source={require('../../assets/audioBook.jpg')} style={styles.image} />
                        <Text style={styles.text}>Audio Books</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={podcast}>
                        <Image source={require('../../assets/podcast.jpg')} style={styles.image} />
                        <Text style={styles.text}>Podcast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={dominioPublico}>
                        <Image source={require('../../assets/dominioPublico.png')} style={styles.image} />
                        <Text style={styles.text}>Domínio Público</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    button: {
        marginHorizontal: 25,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
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