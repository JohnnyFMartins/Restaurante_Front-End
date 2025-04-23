import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header:{
        padding: 16
    },
    headerImage:{
        width: "100%",
        height: 200,
        borderRadius: 8
    },
 
    restaurantName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5
    },
 
    subtitle:{
        color: "#666",
        marginTop: 4
    },
 
    tabs: {
        flexDirection: "row",
        padding: 16,
        borderBottomWidth: 1,
        borderColor: "#eee",
        gap: 16
    },
 
    tabText:{
        color: "#666"
    },
 
    menuList: {
        flex: 1,
        padding: 16
    },
 
    menuItem: {
        flexDirection: "row",
        padding: 16,
        borderBottomColor: "#eee",
        borderBottomWidth: 1
       
    },
 
    menuContent: {
        flex: 1,
        marginRight: 16
    },
 
    itemName: {
        fontSize: 16,
        fontWeight: "bold"
    },
 
    itemPrice: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 4
    },
 
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8
    },
 
 
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 16
    },
 
    DetailItemPrice:{
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 4,
    },
 
 
 
    productHeader: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#f8f8f8'
    },
    productImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    productDetails: {
        padding: 20
    },
   
    productName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15
    },
   
    productDescription: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
        marginBottom: 30
    },
    addToCartButton: {
        backgroundColor: '#e42765', // Cor principal como solicitado
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },
    addToCartText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
 
    backToMenuButton: {
        backgroundColor: '#011841',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10
    },
 
    backToMenuText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
});