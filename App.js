import React, { useState } from "react";
import { ImageBackground, View, Alert, FlatList, TouchableOpacity, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { styles } from "./styles";

import image from "./assets/imagenes/logo.jpg"
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import ModalItem from "./components/Modal";
import FlatLista from "./components/lista";
import ListaItem from "./components/lista/ListaItem"



const App = () => {

    const [textItem, setTextItem] = useState("")
    const [itemList, setItemList] = useState([])
    const [itemSelected, setItemSelected] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    const onHandlerChangeItem = (t) => setTextItem(t)

    const onHandlerDelete = id => {
        setItemList(currentItems => currentItems.filter(item => item.id !== id))
        setItemSelected({})
        setModalVisible(!modalVisible)
        Alert.alert('Producto Eliminado!!')
    }
    const onHandlerSinBorrar = () => {
        setModalVisible(!modalVisible)
    }

    const addItem = () => {
        if (textItem) {
            setItemList(currentItems => [
                ...currentItems,
                {
                    id: Math.floor(Math.random() * 500),
                    value: textItem
                }
            ])
            console.log("itemListdapp", itemList)
            setTextItem("")
            Alert.alert('Producto Ingresado')
        }
        else Alert.alert('Debe ingresar un producto')
    }

    const onHandlerModal = id => {
        setItemSelected(itemList.filter(item => item.id === id)[0])
        setModalVisible(!modalVisible)

    }

    return (
        <View style={styles.general}>
            <View style={styles.container}>
                <Header />
                <AddItem onChange={onHandlerChangeItem}
                    onAddItem={addItem}
                    value={textItem}
                />

                <FlatList
                    data={itemList}
                    renderItem={({ item }) => (
                        <View style={{ marginTop: 20 }}>
                            <Pressable onPress={() => onHandlerModal(item.id)}>
                                <Text style={styles.itemLista}>ID: {item.id} // {item.value} // PULSA PARA REMOVER PRODUCTO</Text>
                            </Pressable>
                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}
                />

                <ModalItem
                    visible={modalVisible}
                    onDelete={onHandlerDelete.bind(this, itemSelected.id)}
                    item={itemSelected}
                    noDelete={onHandlerSinBorrar}
                />
            </View>
        </View>
    );
}

export default App;
