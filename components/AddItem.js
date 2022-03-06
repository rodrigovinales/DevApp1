import React from "react";
import { TouchableOpacity, Text, TextInput, View } from "react-native";
import { styles } from "../styles";

const AddItem = (props) => {
    const { onChange, onAddItem, value } = props;

    return (

        <View style={styles.subcontainer}>
            <TextInput placeholder="Ingrese Item" style={styles.input} onChangeText={onChange} value={value} />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt} onPress={onAddItem}>AGREGAR</Text>
            </TouchableOpacity>
        </View>

    )
}

export default AddItem;