import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles";

const ListaItem = ({value, id}) => {

    return (
        <View style={{ marginTop: 20 }}>
                <Text style={styles.itemLista}>ID: {id} // {value} // PULSA PARA REMOVER PRODUCTO</Text>
        </View>
    )
}

export default ListaItem;
