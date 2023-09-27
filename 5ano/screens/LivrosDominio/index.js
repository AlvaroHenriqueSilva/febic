import { StyleSheet, Text, View, Linking, TouchableOpacity, ScrollView } from "react-native";
import { ScaledSheet, scale } from 'react-native-size-matters';
import Logo from "../../components/Logo";

export default function LivrosDominio() {

    const link1 = () => Linking.openURL('http://www.dominiopublico.gov.br/pesquisa/PesquisaObraForm.jsp')
    const link2 = () => Linking.openURL('http://www.dominiopublico.gov.br/pesquisa/ResultadoPesquisaObraForm.do?first=50&skip=0&ds_titulo&co_autor&no_autor&co_categoria=33&pagina=1&select_action=Submit&co_midia=2&co_obra&co_idioma=1&colunaOrdenar=null&ordem=null')


    return (
        <View style={styles.container}>
            <Logo />

            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.title}>
                        **O Portal Domínio Público é uma biblioteca digital do Brasil, editada pelo Ministério da Educação do Brasil, conta com um acervo de mais de 123 mil obras.Lançado em 2004, o portal oferece acesso grátis a obras literárias, artísticas e científicas (na forma de textos, sons, imagens e vídeos), já em domínio público ou que tenham a sua divulgação autorizada.**

                    </Text>

                    <TouchableOpacity onPress={link1} style={[styles.containerText, { backgroundColor: '#ffee58' }]}>
                        <Text style={styles.text}>Domínio Público</Text>
                    </TouchableOpacity>

                   
                    <TouchableOpacity onPress={link2} style={[styles.containerText, { backgroundColor: '#ffea00' }]}>
                        <Text style={styles.text}>Literatura Infatil</Text>
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

    content: {
        marginVertical: 20,
        marginHorizontal: 25
    },

    title: {
        color: '#d50000',
        fontStyle: 'italic',
        marginVertical: 15,
        fontSize: scale(18)
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
