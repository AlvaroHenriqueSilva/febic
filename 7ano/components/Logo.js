import { View, Image, StyleSheet } from "react-native";

export default function Logo() {
    return (
        <View>
            <Image source={require('../assets/calendar.jpeg')} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 200,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 15
    }
})