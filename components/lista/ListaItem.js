import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";

const ListaItem = (props) => {

    const { mostrarHandler } = props;

    return (
        <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={mostrarHandler}>
                <Text style={styles.itemLista}>ID: {item.id} // {item.value} // PULSA PARA REMOVER PRODUCTO</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListaItem;