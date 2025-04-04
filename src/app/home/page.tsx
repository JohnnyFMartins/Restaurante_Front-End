import { Image, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { styles } from "./style"
import { Link } from 'expo-router'

export default function Index() {
    const MENU = [
        {
            id: 1,
            name: "Space Burguer Classic",
            description: "Pão brioche dourado, hambúrguer de carne suculenta, queijo cheddar derretido, picles crocantes, cebola caramelizada e molho especial.",
            price: 27.00,
            image: require("@/assets/images/Spaceburguer.png")
        },

        {

            id: 2,
            name: "Chicken Galaxy",
            description: "Pão macio e brilhante, hambúrguer de frango crocante, queijo derretido, alface fresca e molho especial de estrelas!",
            price: 22.00,
            image: require("@/assets/images/Chickenburguer.png")

        },


        {

            id: 3,
            name: "Nebula Burger",
            description: "Pão preto brilhante, hambúrguer de carne, queijo azul, cebola roxa, rúcula e molho de nebulosa",
            price: 34.90,
            image: require("@/assets/images/Nebulaburguer.png")

        },

    ]

    return (

        <ScrollView style={styles.menuList}>

            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/Banner.png")} />
            </View>
            <Text style={styles.restaurantName}>Rocket Grub</Text>
            <Text style={styles.subtitle}>Um Lanche de Outro Mundo!</Text>

            <View>

                <View style={styles.tabs}>
                    {["Combos", "Lanches", "Bebidas", "Sobremesas"].map((tab) => (
                        <TouchableOpacity>
                            <Text style={styles.tabText} >{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {
                    MENU.map((item) => (
                            <Link href={"/produto/1"} asChild>
                        <TouchableOpacity style={styles.menuItem}>
                            <View style={styles.menuContent}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text>{item.description}</Text>
                                <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                            </View>
                            <Image source={item.image}  style={styles.itemImage} />

                        </TouchableOpacity>
                    </Link>
                    ))
                }

            </View>

        </ScrollView>

    )
}

