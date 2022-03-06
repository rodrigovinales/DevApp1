import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    general: {
        backgroundColor: "#2c3e50",
        height:"100%",
        
    },
    container: {
        // flex: 1,
        justifyContent: "center",
    },
    subcontainer: {
        // flex: 1,
        flexDirection: "row",
        height: 50,
        paddingHorizontal: 10,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center"
    },
    header: {
        fontSize: 35,
        color: "whitesmoke",
        backgroundColor: "#808A9B",
        textAlign: "center",
    },
    itemLista: {
        fontSize: 12,
        marginLeft: 10,
        color: "white",
        // fontWeight: "bold"
    },
    modalTitle: {
        backgroundColor: "#ccc",
        color: "white",
        alignItems: "center",
    },
    modalHeader: {
        fontSize: 28
    },
    modalMessage: {
        fontSize: 28,
        marginBottom: 10,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    modalButton: {
        marginTop: 15
    },
    modalItem: {
        fontSize: 30
    },

    input: {
        borderBottomWidth: 1,
        // marginBottom: 10,
        width: '70%',
        textAlign: "center",
        fontSize: 20,
        color: "whitesmoke",
        // fontWeight: "bold",
        textAlign: "center",
    },
    btnTxt: {
        fontSize: 15,
        color: "white",
        fontStyle: "italic"
    },
    btn: {
        width: 100,
        height: 40,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DB2A64",
    }


});
