import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: '#BF4D42',
        paddingTop: 30,
        paddingBottom: 8,
        alignItems: 'center',
    },
    backButton: {
        height: 27,
        width: 27,
        margin: 6,
        flexGrow: 0,
    },
    titleView: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 15,
    },
    titleText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },
    submitButton: {

    },
    submitText: {
        margin: 6,
        marginRight: 12,
        color: '#fff',
        fontSize: 16,
    }
})