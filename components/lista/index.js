import React from "react";
import { FlatList, Pressable } from "react-native"
import ListaItem from "./ListaItem";

export default function FlatLista({ itemList, onHandlerModal }) {

    return (

        <FlatList
            data={itemList}
            renderItem={({ item }) =>(
                <Pressable onPress={() => onHandlerModal(item.id)}>
                    <ListaItem
                        {...item}
                    />
                </Pressable>)}
            keyExtractor={item => item.id.toString()}
        />
    )
}

