import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 30,
      fontFamily: 'Inkfree',
      textAlign: 'center',
      marginVertical: 25
    },
    content: {
      marginHorizontal: 20,
      marginVertical: 15
    },

    inputTitle: {
      fontSize: 20
    },

    input: {
      height: 45,
      borderBottomWidth: 1,
      fontSize: 18
    },

    contentTimeDate: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    dateTime: {
      fontSize: 18
    },
  
    positionButton: {
      marginHorizontal: 20
    },
    button: {
      backgroundColor: 'purple',
      justifyContent: 'center',
      alignItems: 'center',
      height: 45,
      borderRadius: 8,
      marginVertical: 15
    },
    buttonText: {
      color: '#FFF',
      fontSize: 30,
      fontFamily: 'Inkfree'
    },
  
    subTitle: {
      fontSize: 26,
      textAlign: 'center'
    },

    // Listagem das tarefas

    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'purple',
      marginVertical: 10,
      marginHorizontal: 10,
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderRadius: 10
    },

    listTitle: {
      color: '#FFF',
      fontSize: 25,
      marginVertical: 10
    },

    listText: {
      flexDirection: 'row',
      alignItems: 'center',
      color: '#FFF',
      gap: 5
    },

    hourDate: {
      color: '#FFF',
    },

    noTask: {
      textAlign: 'center',
      color: 'red',
      fontSize: 25,
      fontFamily: 'Inkfree',
      marginVertical: 15
    }

  });