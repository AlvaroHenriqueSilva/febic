import { Image, StyleSheet } from 'react-native';

export default function Logo() {
    return (
        <Image source={require('../assets/logo.png')} style={styles.image} />
    )
}

const styles = StyleSheet.create({

    image: {
        width: 385,
        height: 112,    
        alignSelf: 'center',
        marginTop: 45
    },
})