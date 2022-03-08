import React, { useState } from "react";
import { View, Alert } from "react-native";
import { styles } from "../styles";

import AddItem from "../components/AddItem";
import Header from "../components/Header";
import ModalItem from "../components/Modal";
import FlatLista from "../components/lista";

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
                <AddItem
                    onChange={onHandlerChangeItem}
                    onAddItem={addItem}
                    value={textItem}
                />

                <FlatLista
                    itemList={itemList}
                    onHandlerModal={onHandlerModal}
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
