import React from "react";
import { FlatList,View,TouchableOpacity,Text } from "react-native"
import ListaItem from "./ListaItem";
import { styles } from "../../styles";

export default function FlatLista(item, props) {

    const { mostrarHandler } = props;

    return (

        <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={mostrarHandler}>
                <Text style={styles.itemLista}>ID: {item.id} // {item.value} // PULSA PARA REMOVER PRODUCTO</Text>
            </TouchableOpacity>
        </View>
    )
}
