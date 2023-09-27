import { StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
export default function Dropdown() {
    const disciplines = ["Matemática", "História", "Ciências", "Inglês", "Português", "Artes", "Ed. Física"]
    return (
        <SelectDropdown
            buttonStyle={styles.button}
            buttonTextStyle={styles.row}
            data={disciplines}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
            }}
        />
    );
};

const styles = StyleSheet.create({
    buttonDropdown: {
        backgroundColor: 'blue',
        width: '100%',
        borderRadius: 10
    },

    rowDropdown: {
        color: 'white'
    }
})