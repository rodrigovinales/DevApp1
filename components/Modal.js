import React from "react";

import { Button, Text, Modal, View } from "react-native";
import { styles } from "../styles"

const ModalItem = (props) => {
    const {visible, onDelete, noDelete } = props;

    if (!visible) return null;

    return (
        <Modal animationType="slide" visible={visible}>
            <View style={styles.modalTitle}>
                <Text style={styles.modalHeader}>Accion en Producto</Text>
            </View>
            <View>
                <Text style={styles.modalMessage}>Desea Borrar el producto??</Text>
            </View>
            <View style={styles.modalButton}>
                <Button color="red" onPress={onDelete} title="SI, ELIMINAR"/>
                <Button color="green" onPress={noDelete} title="NO BORRAR, DEJAR COMO ESTA"/>
            </View>
        </Modal>
    )
}

export default ModalItem;