import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";


export default function Home( ) {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../../assets/foguete.png')} style={styles.image}/>
            </View>

            <Text style={styles.title}>Bem-vindo(a) ao APP de leitura!</Text>

            <View style={styles.positionButton}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('List')}>
                    <Text style={styles.text}>COMEÇAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        
    },

    image: {
        width: 350,
        height: 330,
        alignSelf: 'center',
        marginVertical: 30
    },


    title: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 50,
        fontFamily: 'Inkfree'
    },

    positionButton: {
        flex: 1,
        justifyContent: 'flex-end'
    },

    button: {
        height: 100,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    text: {
        color: '#FFF',
        fontSize: 50,
        fontFamily: 'Inkfree'
    }

})